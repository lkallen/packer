import { pgTable, varchar, text, boolean, uuid } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const tasks = pgTable("tasks", {
	id: varchar().primaryKey().notNull(),
	taskName: text().notNull(),
	done: boolean().default(false).notNull(),
});

export const items = pgTable("items", {
	id: uuid().primaryKey().notNull(),
	item: varchar().notNull(),
	done: boolean().default(false),
	tags: text().notNull(),
});
