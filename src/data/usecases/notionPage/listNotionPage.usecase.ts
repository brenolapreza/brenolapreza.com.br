import { notionClient } from "@/data/services/notionClient";
import { n2m } from "@/data/services/notionToMarkdown";
import type { INotionListPage } from "@/domain/contracts/notion-page.contracts";
import type { IPageByIdProps } from "@/domain/models/notion-page.model";

export class ListNotionPage implements INotionListPage {
  async listPage(pageId: string): Promise<IPageByIdProps> {
    if(!pageId) throw new Error("PageId is required")
      const response = await notionClient.pages.retrieve({
        page_id: pageId
      })
      return response as unknown as IPageByIdProps
  }

  async listPageToMd(pageId: string) {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    return n2m.toMarkdownString(mdblocks);
  }

}