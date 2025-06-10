import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        postid: post.id, // Ensure correct key casing
    }));
}

export async function generateMetadata({ params }) {
    const { postid } = params; // No need to await params, it is not a Promise
    console.log("Resolved params:", params);

    const posts = getSortedPostsData();
    console.log("Posts:", posts);

    const post = posts.find((post) => post.id === postid);

    if (!post) {
        console.error(`Post not found for postId: ${postid}`);
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
    };
}

export default async function Post({ params }) {
    const { postid } = params; // No need to await params
    console.log("Post ID:", postid);

    const posts = getSortedPostsData();

    const post = posts.find((post) => post.id === postid);
    if (!post) {
        console.error(`Post not found for postId: ${postid}`);
        notFound();
    }

    const { title, date, contentHtml } = await getPostData(postid);

    const pubDate = getFormattedDate(date);

    return (
        <div className="">
            <div className="container m-auto p-4">
                <Navbar></Navbar>
            </div>
        <main className="prose prose-sm lg:prose-2xl prose-slate dark:prose-invert m-auto mt-40 p-4">

            <article className="">
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
            <div className="container m-auto mt-40 p-4">
                <Footer></Footer>
            </div>

        </div>
    );
}
