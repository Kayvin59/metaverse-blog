import Link from "next/link";
import { getPosts } from "@/lib/get-data";
import PostList from "@/components/PostList";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  const data: BlogPost[] = await getPosts();

  return (
    <main className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5 font-roboto">
      <h1 className="text-4xl underline font-bold mb-8 font-cambria">Metaverse Blog</h1>
      <Link className={`self-end mb-3 bg-foreground font-bold text-white ${buttonVariants({ variant: "outline"})}`} href="/posts/new">New Post</Link>
      <PostList posts={data} />
    </main>
  )
}
