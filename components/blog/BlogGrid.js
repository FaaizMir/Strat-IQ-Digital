"use client";

import { useRef } from "react";
import useFadeUpReveal from "@/components/home/useFadeUpReveal";
import BlogCard from "./BlogCard";

// Grid of post cards with the same subtle scroll-reveal fade-up used on
// /projects (see components/home/useFadeUpReveal.js).
export default function BlogGrid({ posts, gridClassName = "blog-grid" }) {
  const gridRef = useRef(null);
  useFadeUpReveal(gridRef, ".blog-card", { stagger: 0.12 });

  return (
    <div className={gridClassName} ref={gridRef}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
