import type { Metadata } from "next";

export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  siteName: "Wanda Azhar Portfolio",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Wanda Azhar | Web Developer in Twin Falls, Idaho",
    },
  ],
};
