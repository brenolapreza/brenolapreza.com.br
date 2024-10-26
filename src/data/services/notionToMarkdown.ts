import { NotionToMarkdown } from "notion-to-md";
import { notionClient } from "./notionClient";

export const n2m = new NotionToMarkdown({ notionClient });