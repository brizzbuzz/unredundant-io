-- create "users" table
CREATE TABLE "public"."users" ("id" uuid NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, "email" character varying(256) NOT NULL, "password" character varying(256) NOT NULL);
