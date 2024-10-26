"use server";

import { ListNotionDatabase } from "@/data/usecases/notionDatabase/listNotionDatabase.usecase";

export async function getDatabasesNotion() {
  const notionPostRepository = new ListNotionDatabase();
  try {
    const posts = await notionPostRepository.listDatabase();
    return posts;
  } catch (error) {
    console.error("Error fetching posts from Notion:", error);
    throw new Error("Failed to fetch posts from Notion");
  }
}