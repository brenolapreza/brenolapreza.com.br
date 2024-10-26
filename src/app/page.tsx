import { Card } from "@/components/card";
import { getDatabasesNotion } from "@/interfaces/actions/get-database-notion.action";
import Link from "next/link";

export default async function Home() {
  const posts = await getDatabasesNotion()
  return (
    <>
      <main className="container">
        <div className="grid grid-cols-2 gap-5">
          {posts.results.map((result) => {
            const { Author, Nome } = result.properties;
            const author = Author.people.map((author) => author.name);
            const postName = Nome.title.map((author) => author.text.content);

            return (
             <Link key={result.id} href={`/blog/${result.id}`} >
             <Card
                postName={postName}
                author={author}
                id={result.id}
              />
             </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
