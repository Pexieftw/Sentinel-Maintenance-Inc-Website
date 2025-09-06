// app/blogs/[blog]/page.js (Server Component)
import { cleaningBlogs } from "../../utils/data";
import BlogPostClient from "./BlogPostClient";

function titleToSlug(title) {
  return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

// This function generates static params at build time
export async function generateStaticParams() {
  return cleaningBlogs.map((post) => ({
    blog: titleToSlug(post.title),
  }));
}

// Server component that passes data to client component
export default function BlogPost({ params }) {
  const { blog } = params;
  
  const blogPost = cleaningBlogs.find(post => titleToSlug(post.title) === blog);
  
  const relatedPosts = blogPost?.relatedPosts 
    ? blogPost.relatedPosts.map(id => cleaningBlogs.find(post => post.id === id)).filter(Boolean)
    : [];

  return (
    <BlogPostClient 
      blogPost={blogPost} 
      relatedPosts={relatedPosts}
      slug={blog}
    />
  );
}