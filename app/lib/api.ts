//app/lib/api.ts
const REVALIDATE_SECONDS = 300;

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:5015/api";

function buildUrl(path: string, query?: Record<string, string | number | boolean | undefined | null>) {
  const url = new URL(`${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return;
      url.searchParams.set(key, String(value));
    });
  }

  return url.toString();
}

export async function apiGet<T>(
  path: string,
  query?: Record<string, string | number | boolean | undefined | null>
): Promise<T> {
  const cacheOptions: RequestInit =
    typeof window === "undefined"
      ? { next: { revalidate: REVALIDATE_SECONDS } }
      : { cache: "no-store" };

  const response = await fetch(buildUrl(path, query), {
    method: "GET",
    ...cacheOptions
  });

  if (!response.ok) {
    throw new Error(`GET ${path} failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export { API_BASE_URL, buildUrl };