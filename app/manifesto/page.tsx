import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Manifesto(){
    const posts = await getAllPosts();

    return (
        <main>
            <h1>Manifesto</h1>
            <p>this is a page of all my ideas</p>
            <ul className="space y-4">
                {posts.map((post)=>(
                    <li key={post.slug}>
                        <Link href={`/manifesto/${post.slug}`}>
                            {post.metadata.title ?? post.slug}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}