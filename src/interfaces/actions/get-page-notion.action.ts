"use server";

import { ListNotionPage } from "@/data/usecases/notionPage/listNotionPage.usecase";

export async function getPageNotionById(pageId: string) {
  try {
    const getPageNotion = new ListNotionPage();
    const page = await getPageNotion.listPage(pageId);
    return page;
  } catch (error) {
    console.error("Error fetching posts from Notion:", error);
    throw new Error("Failed to fetch posts from Notion");
  }
}

export async function getPageNotionByIdToMd(pageId: string) {
  try {
    const getPageNotion = new ListNotionPage();
    const page = await getPageNotion.listPageToMd(pageId);
    return page;
  } catch (error) {
    console.error("Error fetching posts from Notion:", error);
    throw new Error("Failed to fetch posts from Notion");
  }
}
