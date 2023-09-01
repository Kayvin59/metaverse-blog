import { Suspense } from 'react'

import Link from "next/link";

import { getPosts } from "@/lib/get-data";
import Loading from "@/app/loading";
import PostList from "@/components/PostList";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  const data: BlogPost[] = await getPosts();

  return (
    <main className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5 font-roboto">
      <h1 className="text-4xl font-bold mb-10 font-cambria">Metaverse Blog</h1>
      <Link className={`self-end mb-5 bg-foreground font-bold text-white ${buttonVariants({ variant: "outline"})}`} href="/posts/new">Start Writing</Link>
      <Suspense fallback={<Loading />}>
        <PostList posts={data} />
      </Suspense>
    </main>
  )
}
