import { apiGet } from "@/app/lib/api";
import { mapBlogToLegacyCard, mapWorkToLegacyCard, type LegacyBlogCard, type LegacyWorkCard } from "@/app/lib/mappers";
import type { BlogsApiResponse } from "@/app/types/blog";
import type { WorksApiResponse } from "@/app/types/work";

export async function getPublishedWorks(): Promise<LegacyWorkCard[]> {
  try {
    const response = await apiGet<WorksApiResponse>("/works", {
      isPublished: true,
      limit: 100,
    });
    return response.data.items.map(mapWorkToLegacyCard);
  } catch (error) {
    console.error("Failed to fetch works:", error);
    return [];
  }
}

export async function getPublishedBlogs(): Promise<LegacyBlogCard[]> {
  try {
    const response = await apiGet<BlogsApiResponse>("/blogs", {
      isPublished: true,
      limit: 100,
    });
    return response.data.items.map(mapBlogToLegacyCard);
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}
