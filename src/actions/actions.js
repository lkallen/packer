"use server";

import { v4 as uuid4 } from "uuid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "@/db/drizzle";
import { items } from "@/db/schema";
import { eq, not } from "drizzle-orm";

export async function getAllItems() {
  const data = await db.select().from(items).orderBy(items.tags, items.item);
  return data;
}

export async function getItemsByTag(tag) {
  const data = await db.select().from(items).where(eq(items.tags, tag));
  return data;
}

export async function addItem(itemData) {
  const id = uuid4();
  const item = itemData.item;
  const tags = itemData.tags;
  await db.insert(items).values({
    id: id,
    item: item,
    tags: tags,
  });
  revalidatePath("/admin");
}

export async function deleteItem(item) {
  const id = item.id;
  await db.delete(items).where(eq(items.id, id));
  revalidatePath("/admin");
}

export async function editItem(item) {
  const id = item.id;
  await db
    .update(items)
    .set({
      item: item.item,
    })
    .where(eq(items.id, id));
  revalidatePath("/admin");
}

export async function toggleDone(item) {
  const id = item.id;
  await db
    .update(items)
    .set({
      done: not(items.done),
    })
    .where(eq(items.id, id));
}

export async function resetAllItems() {
  await db.update(items).set({
    done: false,
  });
  revalidatePath("/user")
}
