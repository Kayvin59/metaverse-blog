export default function PostList({ posts }: { posts: BlogPost[] }) {
    return (
        <ul>
            {posts.map((post: BlogPost) => (
                <li key={post.id} className="flex">
                    <div>
                        <h2>{post.title}</h2>
                        <span>{post.author}</span>
                    </div>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    )
}
