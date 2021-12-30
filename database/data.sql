insert into "projects" ("name")
     values ('FIT'), ('Hudson Yards'), ('Kalish'), ('HBK'), ('45th Street');

insert into "photos" ( "projectId", "url", "createdAt", "homepage", "specific")
values (
  1,
  '/images/FIT.png',
  now(),
  FALSE,
  FALSE
  ),(
  2,
  '/images/hudsonyards.jpeg',
  now(),
  FALSE,
  FALSE
  ), (
  2,
  '/images/homepageHudson.jpeg',
  now(),
  TRUE,
  FALSE
  ),   (
  3,
  '/images/kalish.png',
  now(),
  FALSE,
  FALSE
  ),  (
  4,
  '/images/hbk.png',
  now(),
  FALSE,
  FALSE
  ),  (
  5,
  '/images/45thstreet.jpeg',
  now(),
  FALSE,
  FALSE
  ),  (
  5,
  '/images/45thstreet/1.jpeg',
  now(),
  FALSE,
  TRUE
  ),  (
  5,
  '/images/45thstreet/2.jpeg',
  now(),
  FALSE,
  TRUE
  ),  (
  5,
  '/images/45thstreet/3.jpeg',
  now(),
  FALSE,
  TRUE
  ),  (
  5,
  '/images/45thstreet/4.jpeg',
  now(),
  FALSE,
  TRUE
  ),  (
  5,
  '/images/45thstreet/5.jpeg',
  now(),
  FALSE,
  TRUE
  );
