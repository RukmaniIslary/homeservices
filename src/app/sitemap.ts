import { MetadataRoute } from "next";
import { SERVICES, TOP_CITIES, US_STATES } from "@/lib/services-data";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://n-nodes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: APP_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${APP_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${APP_URL}/book`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${APP_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${APP_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${APP_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${APP_URL}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${APP_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${APP_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${APP_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // State pages
  const statePages: MetadataRoute.Sitemap = US_STATES.map((state) => ({
    url: `${APP_URL}/locations/${state.abbr.toLowerCase()}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = TOP_CITIES.map((city) => ({
    url: `${APP_URL}/locations/${city.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Service + city pages (top 10 services x top 10 cities)
  const serviceCityPages: MetadataRoute.Sitemap = SERVICES.flatMap((service) =>
    TOP_CITIES.slice(0, 10).map((city) => ({
      url: `${APP_URL}/services/${service.slug}/${city.toLowerCase().replace(/\s+/g, "-")}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...statePages,
    ...cityPages,
    ...serviceCityPages,
  ];
}
