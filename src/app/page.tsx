import {
  DatabaseObjectResponse,
  GetDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { getPageById, getPostsNotion } from "./_services/notion";
import { DataBase } from "./_services/types/getPostsNotion.types";

export default async function Home() {
  const posts = await getPostsNotion();
  const getPost = await getPageById("73ad4a5713e241c1983730effad0d253");
  console.log(getPost);
  console.log(posts);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {posts.results.map((result) => {
          return (
            <div key={result.id}>
              <ul>
                <li>{result.id}</li>
                <li>{result.properties.Author.people.map((e) => e.name)}</li>
                <li>{result.properties.Nome.title.map((e) => e.plain_text)}</li>
              </ul>
            </div>
          );
        })}
      </main>
    </>
  );
}
