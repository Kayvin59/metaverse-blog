import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react';

export default function PostList({ posts }: { posts: BlogPost[] }) {
    return (
        <ul>
            {posts.map((post: BlogPost) => (
                <li key={post.id} className="mb-5 group">
                    <Card className="flex flex-col p-5 relative hover:shadow-2xl">
                        <ArrowUpRight className="absolute transition-transform transform duration-300 top-4 right-4 group-hover:top-2 group-hover:right-2"/>
                        <CardHeader className="mb-5">
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription className="font-bold">{post.author}</CardDescription>
                        </CardHeader>
                        <CardContent className="line-clamp-2 flex-nowrap p-0">{post.body}</CardContent>
                    </Card>
                </li>
            ))}
        </ul>
    )
}
