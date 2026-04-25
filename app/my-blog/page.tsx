//app/my-blog/page.tsx
import type { Metadata } from "next";
import BlogList from "../components/blogList/BlogList";
import SearchBlog from "../components/searchBlog/SearchBlog";
import "./myBlog.scss";

export const metadata: Metadata = {
  title: "Web Development Blog in Twin Falls, Idaho",
  description:
    "Browse coding resources, web development articles, and technical references curated by Wanda Azhar, a web developer in Twin Falls, Idaho.",
  alternates: {
    canonical: "/my-blog",
  },
  openGraph: {
    title: "Web Development Blog | Wanda Azhar",
    description:
      "Browse coding resources, web development articles, and technical references curated by Wanda Azhar.",
    url: "/my-blog",
    images: [
      {
        url: "/wanda-azhar.jpg",
        width: 1200,
        height: 630,
        alt: "Wanda Azhar Blog",
      },
    ],
  },
};

const MyBlogPage: React.FC = () => {
  return (
    <section className="blog">
      <div className="wrapContainer">
        <div className="wrapBlog">
          <SearchBlog />
          <BlogList />
        </div>
      </div>
    </section>
  );
};

export default MyBlogPage;