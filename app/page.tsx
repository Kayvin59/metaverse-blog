import PostList from "@/components/PostList";
import { getData } from "@/lib/get-posts";

export default async function Home() {
  const data: BlogPost[] = await getData();

  return (
    <main className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5 font-roboto">
      <h1 className="text-4xl underline font-bold mb-8 font-cambria">Metaverse Blog</h1>
      <PostList posts={data} />
    </main>
  )
}
