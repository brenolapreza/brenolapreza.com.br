import {
  DatabaseObjectResponse,
  GetDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { getPageById, getPostsNotion } from "./_services/notion";
import { DataBase } from "./_services/types/getPostsNotion.types";
import { Card } from "@/components/card";
import Link from "next/link";

export default async function Home() {
  const posts = await getPostsNotion();

  return (
    <>
      <main>
        {posts.results.map((result) => {
          const { Author, Nome } = result.properties;
          const author = Author.people.map((author) => author.name);
          const postName = Nome.title.map((author) => author.text.content);

          return (
            <Link key={result.id} href={`/blog/${result.id}`}>
              <Card id={result.id} author={author} postName={postName} />
            </Link>
          );
        })}
      </main>
    </>
  );
}
