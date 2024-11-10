import { getPageNotionByIdToMd } from "@/interfaces/actions/get-page-notion.action";
import type { IBlogPageProps } from "./types";
import { marked } from "marked";
import { Suspense } from "react";

export default async function Page({params}: IBlogPageProps) {
  const getPost = await getPageNotionByIdToMd(params.slug)
  const htmlText = marked(getPost.parent);
  return (
    <div>
      <Suspense fallback={<>carregando...</>}>

      </Suspense>
        <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    </div>
  );
}
