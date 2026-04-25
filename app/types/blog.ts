export type BlogItem = {
  uuid: string;
  legacyId: number | null;
  title: string;
  slug: string;
  desc: string;
  categoryUuid: string;
  categoryName: string;
  categorySlug: string;
  link: string;
  author: string;
  license: string;
  image: {
    fileName: string;
    path: string;
    url: string;
  } | null;
  normalizedTitle: string;
  isPublished: boolean;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  updatedAt: {
    _seconds: number;
    _nanoseconds: number;
  };
};

export type BlogsApiResponse = {
  success: boolean;
  message: string;
  data: {
    items: BlogItem[];
    nextCursor: string | null;
  };
};