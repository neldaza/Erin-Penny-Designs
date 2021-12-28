insert into "projects" ("name")
     values ('FIT'), ('Hudson Yards'), ('Kalish'), ('HBK'), ('45th Street');

insert into "photos" ( "projectId", "url", "createdAt")
values (
  1,
  '/images/FIT.png',
  now()
  ),  (
  2,
  '/images/hudsonyards.png',
  now()
  ),  (
  3,
  '/images/kalish.png',
  now()
  ),  (
  4,
  '/images/hbk.png',
  now()
  ),  (
  5,
  '/images/45thstreet.png',
  now()
  );
