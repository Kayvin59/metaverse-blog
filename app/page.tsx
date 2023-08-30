import PostList from "@/components/PostList";
import { getData } from "@/lib/get-posts";

export default async function Home() {
  const data: BlogPost[] = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-2xl font-bold mb-4">Metaverse Blog</h1>
      <PostList posts={data} />
    </main>
  )
}
