import { notionClient } from '@/data/services/notionClient';
import { INotionDatabase } from '@/domain/contracts/notion-database.contracts';
import type { DataBase } from '@/domain/models/notion-database.model';

export class ListNotionDatabase implements INotionDatabase {
  private databaseId: string;

  constructor(){
    this.databaseId = process.env.NOTION_DATABASE_ID || '';
    if (!this.databaseId) {
      throw new Error("Database ID not defined in environment variables.");
    }
  }

  async listDatabase(): Promise<DataBase> {
    const response = await notionClient.databases.query({
      database_id: this.databaseId,
    });
    const notionDatabaseResponse = response as unknown as DataBase;

    return notionDatabaseResponse
  }
  
}