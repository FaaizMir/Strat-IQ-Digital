import "@/components/blog/blog.css";
import { posts } from "@/data/posts";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog | Strat IQ Digital",
  description:
    "Straight talk on paid ads, conversion optimization, and scaling e-commerce brands past DIY marketing -- from the team at Strat IQ Digital.",
};

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-hero">
        <img src="/images/uploads/Services-Banner-1-scaled.jpg" alt="" />
        <div className="blog-hero-caption">
          <div className="blog-eyebrow">Journal</div>
          <h1 className="blog-h1 funnel-bold">Blog</h1>
        </div>
      </div>

      <div className="blog-container">
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
