import { siteMetadata } from "./constants";

export const getMeta = (title: string, description?: string | null) => {
  const metaDescription = description || siteMetadata.description;
  const imageUrl = new URL("/images/social.png", import.meta.env.SITE);

  return {
    title: `${title} - ${siteMetadata.title}`,
    description: metaDescription,
    keywords: siteMetadata.keywords,

    // Open Graph
    openGraph: {
      title: `${title} - ${siteMetadata.title}`,
      description: metaDescription,
      type: "website",
      image: imageUrl,
    },
  };
};
