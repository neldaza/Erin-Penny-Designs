require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
