import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Manifesto(){
    const posts = await getAllPosts();

    return (
        <main className="flex justif-center items-center flex-col p-76">
            <h1>Manifesto</h1>
            <p>this is a page of all my ideas</p>
            <ul className="">
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