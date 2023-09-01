import Link from 'next/link';
import { postsData } from '@/data';
import { Calendar, ChevronLeft, FileSignature } from 'lucide-react';
import { generateFormattedDate } from '@/utils/formatDate';

export default function PostDetails({ params }: { params: { id: string } }) {
    const postId = params.id;
    const postDetails = postsData.find((post: BlogPost) => post.id === postId);

    if (!postDetails) {
      return <div>Post not found</div>;
    }

    return (
      <div className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5 font-roboto">
        <Link href='/' className='flex self-start mb-5 underline'>
          <ChevronLeft />
          Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 font-cambria">{postDetails.title}</h1>
        <p className='mb-8'>{postDetails.body}</p>
        <div className='flex justify-between w-full'>
          <div className='flex h-fit text-muted-foreground'>
            <FileSignature className='mr-2'/> 
            <span>{postDetails.author}</span>
          </div>
          <div className='flex h-fit text-muted-foreground'>
            <Calendar className='mr-2'/> 
            <span>{generateFormattedDate(postDetails.published)}</span>
          </div>
        </div>
      </div>

    )
}
