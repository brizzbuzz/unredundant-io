-- modify "users" table
ALTER TABLE "public"."users"
    ADD PRIMARY KEY ("id");
-- create "cardio" table
CREATE TABLE "public"."cardio"
(
    "id"             uuid           NOT NULL,
    "user_id"        uuid           NOT NULL,
    "date"           date           NOT NULL,
    "distance_miles" numeric(10, 2) NOT NULL,
    "time_seconds"   numeric        NOT NULL,
    "notes"          text           NULL,
    CONSTRAINT "user_id" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON UPDATE CASCADE ON DELETE CASCADE
);
