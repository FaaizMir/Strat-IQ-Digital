import Link from "next/link";
import { formatPostDate } from "./formatDate";

// Single post card -- reused on /blog (full listing) and on /post/[slug]
// ("More posts" section) so both look identical.
export default function BlogCard({ post }) {
  return (
    <Link href={`/post/${post.slug}`} className="blog-card">
      <div className="blog-card-image">
        <img src={post.coverImage} alt={post.title} width={640} height={480} loading="lazy" />
      </div>
      <div className="blog-card-meta">
        <div className="blog-card-date">{formatPostDate(post.date)}</div>
        <h2 className="blog-card-title">{post.title}</h2>
        <p className="blog-card-excerpt">{post.excerpt}</p>
      </div>
    </Link>
  );
}
