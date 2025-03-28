-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "tasks" (
	"id" varchar PRIMARY KEY NOT NULL,
	"taskName" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "items" (
	"id" uuid PRIMARY KEY NOT NULL,
	"item" varchar NOT NULL,
	"done" boolean DEFAULT false,
	"tags" text NOT NULL
);

*/