import type { BlogItem } from "@/app/types/blog";
import type { CategoryItem } from "@/app/types/category";
import type { WorkItem } from "@/app/types/work";

export type LegacyBlogCard = {
  id: string;
  title: string;
  desc: string;
  link: string;
  urlImage: string;
  category: {
    name: string;
    slug: string;
    uuid: string;
  };
};

export type LegacyWorkCard = {
  id: string;
  name: string;
  desc: string;
  license: string;
  urlImage: string;
  preview: string;
  github: string;
  type: string;
  tags: string[];
};

function normalizeImageUrl(url?: string | null): string {
  if (!url || !url.trim()) {
    return "/wanda-azhar.jpg";
  }

  const trimmed = url.trim();

  if (
    trimmed.includes("localhost:5005") ||
    trimmed.includes("127.0.0.1:5005")
  ) {
    return "/wanda-azhar.jpg";
  }

  return trimmed;
}

export function mapBlogToLegacyCard(blog: BlogItem): LegacyBlogCard {
  return {
    id: blog.uuid,
    title: blog.title,
    desc: blog.desc,
    link: blog.link,
    urlImage: normalizeImageUrl(blog.image?.url),
    category: {
      name: blog.categoryName,
      slug: blog.categorySlug,
      uuid: blog.categoryUuid,
    },
  };
}

export function mapWorkToLegacyCard(work: WorkItem): LegacyWorkCard {
  return {
    id: work.uuid,
    name: work.name,
    desc: work.desc,
    license: work.license,
    urlImage: normalizeImageUrl(work.image?.url),
    preview: work.preview,
    github: work.github,
    type: work.type,
    tags: work.tags ?? [],
  };
}

export function mapCategoryToTab(category: CategoryItem) {
  return {
    id: category.uuid,
    name: category.name,
    slug: category.slug,
  };
}