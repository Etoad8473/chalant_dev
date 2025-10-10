import fs, { readdir, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// export interface Post{
//     slug: string;
//     title: string;
//     date: string;
//     contentHtml: string;
// }

export function getPostSlugs(){
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/,"");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath,"utf8");

    const {data, content } = matter(fileContents);
    // const processedContent = await remark().use(html).process(content);
    // const contentHtml = processedContent.toString();

    return{
        slug:realSlug,
        metadata: data,
        content,
    };
}

export async function getAllPosts(){
    // const slugs = await getPostSlugs();
    // const posts = await Promise.all(slugs.map((slug)=>getPostBySlug(slug)));
    // return posts.sort((a,b)=>(a.date < b.date ? 1 : -1));
    return getPostSlugs().map((slug)=>getPostBySlug(slug));
}