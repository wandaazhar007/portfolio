import "./styles/globals.scss";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SearchBlogProvider from "./context/SearchBlogContext";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://wandaazhar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wanda Azhar | Web Developer in Twin Falls, Idaho",
    template: "%s | Wanda Azhar",
  },
  description:
    "Wanda Azhar is a web developer in Twin Falls, Idaho, United States, building modern websites and web applications with a focus on performance, usability, and clean frontend architecture.",
  keywords: [
    "Web Developer in Twin Falls, Idaho, United States",
    "Web Designer in Twin Falls, Idaho",
    "Programmer in Twin Falls, Idaho",
    "DevOps in Twin Falls, Idaho",
    "Wanda Azhar portfolio",
    "Full Stack Web Developer Twin Falls",
    "Frontend Developer Twin Falls",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wanda Azhar | Web Developer in Twin Falls, Idaho",
    description:
      "Explore the portfolio of Wanda Azhar, a web developer in Twin Falls, Idaho, showcasing projects, experience, and technical blog resources.",
    url: siteUrl,
    siteName: "Wanda Azhar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/wanda-azhar.jpg",
        width: 1200,
        height: 630,
        alt: "Wanda Azhar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanda Azhar | Web Developer in Twin Falls, Idaho",
    description:
      "Explore the portfolio of Wanda Azhar, a web developer in Twin Falls, Idaho, showcasing projects, experience, and technical blog resources.",
    images: ["/wanda-azhar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wanda Azhar",
  url: siteUrl,
  image: `${siteUrl}/wanda-azhar.jpg`,
  jobTitle: "Web Developer",
  description:
    "Web developer in Twin Falls, Idaho, United States, focused on modern websites, web applications, and clean frontend experiences.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Twin Falls",
    addressRegion: "Idaho",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/wandaazhar007/",
    "https://www.linkedin.com/in/wanda-azhar/",
    "https://instagram.com/wanda_azharr/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wanda Azhar Portfolio",
  url: siteUrl,
  description:
    "Portfolio website of Wanda Azhar, featuring web development projects, experience, and technical blog resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SearchBlogProvider>
          <Navbar />
          {children}
          <Footer />
        </SearchBlogProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </body>
    </html>
  );
}