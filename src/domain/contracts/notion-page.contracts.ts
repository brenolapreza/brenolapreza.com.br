import type { IPageByIdProps } from "../models/notion-page.model";

export interface INotionListPage {
  listPage(pageId: string): Promise<IPageByIdProps>
}