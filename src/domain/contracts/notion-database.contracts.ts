import type { DataBase } from "../models/notion-database.model";

export interface INotionDatabase {
  listDatabase(): Promise<DataBase>
}