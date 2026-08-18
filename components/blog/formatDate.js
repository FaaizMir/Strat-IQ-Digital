// Shared date formatter for blog cards + post hero, e.g. "June 2, 2026".
export function formatPostDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
