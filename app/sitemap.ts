import { MetadataRoute } from "next";

import { blogContent } from "@/lib/blog";
import { categories } from "@/lib/services";

const SITE = "https://www.eloraenails.com";

function lastModifiedFromBlogDate(dateStr: string): Date | undefined {
  const t = Date.parse(dateStr);
  return Number.isNaN(t) ? undefined : new Date(t);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE}/services/${c.routeSegment}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = Object.entries(blogContent).map(
    ([slug, post]) => {
      const lastModified = lastModifiedFromBlogDate(post.date);
      return {
        url: `${SITE}/blog/${slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        ...(lastModified !== undefined ? { lastModified } : {}),
      };
    },
  );

  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
    {
      url: `${SITE}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogEntries,
    {
      url: `${SITE}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
