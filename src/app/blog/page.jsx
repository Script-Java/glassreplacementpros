import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { getSortedPostsData } from "@/lib/markdown";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/img/blog1.jpg"; // Example image import, adjust path as necessary

export default function Blog() {
    const posts = getSortedPostsData();

    // Check if posts are properly fetched
    if (!posts || posts.length === 0) {
        console.error("No posts found");
        return <p className="text-center text-xl">No blogs available at the moment.</p>;
    }

    return (
        <div className="">
            <Navbar></Navbar>
                <div className="relative w-full h-[500px]">
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 z-10" />
            
                  {/* Static Background Image */}
                  <Image
                    src={img1}
                    alt="Hero Background"
                    fill
                    className="object-cover object-center z-0"
                    priority
                  />
            
                  {/* Title in the center */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl text-center uppercase font-bold">All Blogs</h1>
                  </div>
                </div>
            <section className="max-w-7xl mx-auto px-4 text-base-content">
            <div className="grid my-40 grid-cols-1 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="card card-compact bg-base-100 lg:w-96 shadow-xl">
                        <figure>
                            <Image
                                src={post.image || "/assets/tehran.jpg"}
                                alt={post.title || "blog post image"}
                                width={400} // Specify image width
                                height={250} // Specify image height
                                layout="responsive" // Ensure responsiveness
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.title || "Untitled Post"}</h2>
                            <p>{post.description || "No description available."}</p>
                            <div className="card-actions justify-end">
                                <Link className="btn btn-primary" href={`/blog/${post.id}`}>
                                    Read
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            </section>
            <Footer></Footer>
        </div>
    );
}
