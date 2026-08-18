import "@/components/blog/blog.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug, getOtherPosts } from "@/data/posts";
import { formatPostDate } from "@/components/blog/formatDate";
import PostBody from "@/components/blog/PostBody";
import BlogGrid from "@/components/blog/BlogGrid";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Strat IQ Digital Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = getOtherPosts(slug);

  return (
    <div className="post-page">
      <div className="blog-hero">
        <img src={post.coverImage} alt={post.title} />
        <div className="blog-hero-caption">
          <div className="blog-eyebrow">Journal</div>
          <h1 className="blog-h1 funnel-bold">{post.title}</h1>
          <div className="post-hero-date">{formatPostDate(post.date)}</div>
        </div>
      </div>

      <div className="post-article-wrap">
        <PostBody body={post.body} />
      </div>

      <div className="post-back-link-wrap">
        <Link href="/blog" className="post-back-link">
          &larr; Back to blog
        </Link>
      </div>

      {otherPosts.length > 0 && (
        <div className="blog-container post-more">
          <h2 className="post-more-heading">More posts</h2>
          <BlogGrid posts={otherPosts} gridClassName="post-more-grid" />
        </div>
      )}
    </div>
  );
}
