import { getPageNotionByIdToMd } from "@/interfaces/actions/get-page-notion.action";
import type { IBlogPageProps } from "./types";
import { marked } from "marked";

export default async function Page({params}: IBlogPageProps) {
  const getPost = await getPageNotionByIdToMd(params.slug)
  const htmlText = marked(getPost.parent);
  console.log(htmlText)

  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    </div>
  );
}

export const revalidate = 60; 