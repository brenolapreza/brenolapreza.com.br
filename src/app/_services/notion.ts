"use server";

import { Client } from "@notionhq/client";
import { DataBase } from "./types/getPostsNotion.types";
import type { IPageByIdProps } from "./types/getPageById";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getPostsNotion = async () => {
  const databaseId = "7007ee9fb7e94c55bc94fd08fafb7d2d";
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const notionDatabaseResponse = response as unknown as DataBase;

  return notionDatabaseResponse;
};

export const getPageById = async (pageId: string) => {
  const response = await notion.blocks.children.list({ block_id: pageId });

  const notioBlocksChildren = response as unknown as IPageByIdProps;

  return notioBlocksChildren;
};
