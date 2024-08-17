import { getPageById } from "@/app/_services/notion";

export default async function Page({ params }: { params: { slug: string } }) {
  const getPost = await getPageById(params.slug);

  return (
    <div>
      <div>
        {getPost.results.map(
          (result) => result.heading_1?.rich_text[0].plain_text
        )}
      </div>
    </div>
  );
}
