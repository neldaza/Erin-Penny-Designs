require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');
const argon2 = require('argon2');
const ClientError = require('./client-error');
const jsonMiddleware = express.json();
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
const app = express();
const jwt = require('jsonwebtoken');
const authorizationMiddleware = require('./authorization-middleware');

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.get('/api/images', (req, res, next) => {

  const sql = `
     select  "projectId",
             "photoId",
             "name",
             "url",
             "homepage",
             "specific"
       from  "photos"
       join  "projects" using ("projectId")
`;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/images/:projectId', (req, res, next) => {
  const reqId = Number(req.params.projectId);
  const sql = `
    select   "name",
             "photoId",
             "url",
             "homepage",
             "specific"
      from   "photos"
      join   "projects" using ("projectId")
     where   "projectId" = $1
    `;
  const get = [reqId];
  db.query(sql, get)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/auth/register', (req, res, next) => {
  const { firstName, lastName, username, password, companyName } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2.hash(password)
    .then(result => {
      const sql = `
    insert into "users" ("firstName", "lastName", "username", "hashedPassword", "companyName")
    values ($1, $2, $3, $4, $5)
    ON CONFLICT ("username") DO NOTHING
    returning *;
    `;
      const post = [firstName, lastName, username, result, companyName];
      db.query(sql, post)
        .then(result => {
          if (!result.rows[0]) {
            throw new ClientError(401, 'username already taken');
          }
          res.status(201);
          const resultObject = result.rows[0];
          const emptyObject = {};
          emptyObject.username = resultObject.username;
          emptyObject.createdAt = resultObject.createdAt;
          emptyObject.userId = resultObject.userId;
          res.send(emptyObject);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

app.post('/api/auth/login', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  const sql = `
    select "userId",
           "hashedPassword",
           "isAdmin"
      from "users"
     where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      if (!user) {
        throw new ClientError(401, 'invalid login');
      }
      const { userId, hashedPassword, isAdmin } = user;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if (!isMatching) {
            throw new ClientError(401, 'invalid login');
          }
          if (isAdmin === true) {
            const adminPayload = { userId, username, isAdmin };
            const token = jwt.sign(adminPayload, process.env.ADMIN_SECRET);
            res.json({ token, user: adminPayload });
            return;
          }
          const payload = { userId, username };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.json({ token, user: payload });

        });
    })
    .catch(err => next(err));
});
app.use(authorizationMiddleware);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
