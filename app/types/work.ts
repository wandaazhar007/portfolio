//app/types/work.ts
export type WorkItem = {
  uuid: string;
  legacyId: number | null;
  slug: string;
  name: string;
  desc: string;
  preview: string;
  github: string;
  tags: string[];
  license: string;
  type: string;
  image: {
    fileName: string;
    path: string;
    url: string;
  } | null;
  normalizedName: string;
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

export type WorksApiResponse = {
  success: boolean;
  message: string;
  data: {
    items: WorkItem[];
    nextCursor: string | null;
  };
};

export type WorkDetailApiResponse = {
  success: boolean;
  message: string;
  data: WorkItem;
};