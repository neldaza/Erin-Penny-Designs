insert into "projects" ("name")
     values ('FIT'), ('Hudson Yards'), ('Kalish'), ('HBK'), ('45th Street');

insert into "photos" ( "projectId", "url", "createdAt", "homepage")
values (
  1,
  '/images/FIT.png',
  now(),
  FALSE
  ),(
  2,
  '/images/hudsonyards.jpeg',
  now(),
  FALSE
  ), (
  2,
  '/images/homepageHudson.jpeg',
  now(),
  TRUE
  ),   (
  3,
  '/images/kalish.png',
  now(),
  FALSE
  ),  (
  4,
  '/images/hbk.png',
  now(),
  FALSE
  ),  (
  5,
  '/images/45thstreet.jpeg',
  now(),
  FALSE
  );
