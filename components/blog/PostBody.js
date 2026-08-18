// Generic renderer for the structured `body` array on each post in
// data/posts.js -- { type: "h4" | "p" | "ul", text | items }.
// Keeping the format generic here means new post shapes never require
// touching the detail page itself.
export default function PostBody({ body }) {
  return (
    <div className="post-article">
      {body.map((block, i) => {
        if (block.type === "h4") {
          return <h4 key={i}>{block.text}</h4>;
        }
        if (block.type === "p") {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === "ul") {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}
