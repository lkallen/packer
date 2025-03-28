"use server"

import { v4 as uuid4 } from 'uuid'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '@/db/drizzle'
import { items } from '@/db/schema'
import { eq, not } from 'drizzle-orm'

export async function getAllItems() {
    const data = await db.select()
    .from(items)
    .orderBy(items.tags, items.item)
    return data
}

export async function getItemsByTag(tag) {
    const data = await db.select()
    .from(items)
    .where(eq(items.tags, tag))
    return data
}
