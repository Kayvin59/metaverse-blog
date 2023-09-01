import { postsData } from '@/data';
import Link from 'next/link';

export default function PostDetails({ params }: { params: { id: string } }) {
    const postId = params.id;
    const postDetails = postsData.find((post: BlogPost) => post.id === postId);

    if (!postDetails) {
      return <div>Post not found</div>;
    }

    return (
      <div className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5 font-roboto">
        <Link href='/' className='flex self-start underline'>Back to home</Link>
        <h1 className="text-4xl underline font-bold mb-8 font-cambria">{postDetails.title}</h1>
        <p className='mb-8'>{postDetails.body}</p>
        <div className='flex justify-between w-full'>
          <span>Written by: {postDetails.author}</span>
          <span>Published: {/* {postDetails.published} */}</span>
        </div>
      </div>

    )
}
