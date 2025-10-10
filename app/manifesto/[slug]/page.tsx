import {getPostBySlug, getPostSlugs} from "@/lib/posts";
import {marked} from "marked";

type Props = {
    params: {slug: string};
}

export async function generateStaticParams(){
    const slugs = getPostSlugs();
    return slugs.map((slug)=>({
        slug: slug.replace(/\.md$/,""),
    }))
}

export default async function PostPage({params}: Props){
    const post = getPostBySlug(params.slug);
    const htmlContent = marked(post.content);

    return (
        <article className="prose mx-auto p-8">
            <h1>{post.metadata.title}</h1>
            <article dangerouslySetInnerHTML={{__html: htmlContent}}/>
        </article>
    )
}