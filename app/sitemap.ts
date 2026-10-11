import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andreacosta-portfolio.vercel.app";
  const releaseDate = "2026-10-11";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Exclusivamente proyectos publicados
  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: releaseDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
