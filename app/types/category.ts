export type CategoryItem = {
  uuid: string;
  legacyId: number | null;
  name: string;
  slug: string;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  updatedAt: {
    _seconds: number;
    _nanoseconds: number;
  };
};

export type CategoriesApiResponse = {
  success: boolean;
  message: string;
  data: CategoryItem[];
};