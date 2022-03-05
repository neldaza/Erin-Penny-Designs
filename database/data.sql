UPDATE "users"
SET "isAdmin" = TRUE
WHEN "username" = 'admin'
WHERE "username" IN ('username')

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
  TRUE,
  FALSE
  ),  (
  1,
  '/images/FIT/1.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/2.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/3.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/4.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/5.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/6.png',
  now(),
  TRUE,
  FALSE
  ),  (
  1,
  '/images/FIT/7.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/8.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/9.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/10.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/11.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/12.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/13.png',
  now(),
  FALSE,
  TRUE
  ),  (
  1,
  '/images/FIT/14.png',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/1.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/2.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/3.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/4.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/5.jpg',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/6.png',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/7.png',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/8.png',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/9.png',
  now(),
  FALSE,
  TRUE
  ),  (
  2,
  '/images/hudsonyards/10.png',
  now(),
  FALSE,
  TRUE
  ),  (
  3,
  '/images/Kalish/1.png',
  now(),
  FALSE,
  TRUE
  ),  (
  3,
  '/images/Kalish/2.png',
  now(),
  FALSE,
  TRUE
  ),  (
  3,
  '/images/Kalish/3.png',
  now(),
  FALSE,
  TRUE
  ),  (
  3,
  '/images/Kalish/4.png',
  now(),
  FALSE,
  TRUE
  ),  (
  3,
  '/images/Kalish/5.png',
  now(),
  FALSE,
  TRUE
  ),  (
  3,
  '/images/Kalish/6.png',
  now(),
  TRUE,
  FALSE
  ),  (
  4,
  '/images/HBK/1.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/2.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/3.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/4.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/5.png',
  now(),
  TRUE,
  FALSE
  ),  (
  4,
  '/images/HBK/6.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/7.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/8.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/9.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/10.png',
  now(),
  FALSE,
  TRUE
  ),  (
  4,
  '/images/HBK/11.png',
  now(),
  FALSE,
  TRUE
  );
