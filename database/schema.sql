set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL UNIQUE,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"companyName" TEXT NOT NULL,
	"isAdmin" BOOLEAN NOT NULL,
	"phoneNumber" TEXT,
	"acceptsTexts" BOOLEAN,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."photos" (
	"photoId" serial NOT NULL,
	"projectId" int NOT NULL,
	"url" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	CONSTRAINT "photos_pk" PRIMARY KEY ("photoId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."reviews" (
	"reviewId" serial NOT NULL,
	"userId" serial NOT NULL,
	"title" TEXT NOT NULL,
	"content" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("reviewId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."messages" (
	"messageId" serial NOT NULL,
	"senderId" int NOT NULL,
	"recipientId" int NOT NULL,
	"content" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	CONSTRAINT "messages_pk" PRIMARY KEY ("messageId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."projects" (
	"projectId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "projects_pk" PRIMARY KEY ("projectId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "photos" ADD CONSTRAINT "photos_fk0" FOREIGN KEY ("projectId") REFERENCES "projects"("projectId");

ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "messages" ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("senderId") REFERENCES "users"("userId");
ALTER TABLE "messages" ADD CONSTRAINT "messages_fk1" FOREIGN KEY ("recipientId") REFERENCES "users"("userId");
