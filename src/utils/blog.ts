export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const getSlug = (filePath?: string) => {
  return filePath?.split("/").pop()?.replace(".mdx", "");
};

export function getExcerpt(rawContent: string = ""): string {
  const moreMarker = "{/* more */}";
  const index = rawContent.indexOf(moreMarker);
  if (index === -1) return rawContent;
  return rawContent.slice(0, index).trim();
}
