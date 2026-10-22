//app/my-blog/page.tsx
import type { Metadata } from "next";
import { baseOpenGraph } from "../lib/seo";
import BlogList from "../components/blogList/BlogList";
import SearchBlog from "../components/searchBlog/SearchBlog";
import { getPublishedBlogs } from "../lib/data";
import "./myBlog.scss";

export const metadata: Metadata = {
  title: "Web Development Blog in Twin Falls, Idaho",
  description:
    "Browse coding resources, web development articles, and technical references curated by Wanda Azhar, a web developer in Twin Falls, Idaho.",
  alternates: {
    canonical: "/my-blog",
  },
  openGraph: {
    ...baseOpenGraph,
    title: "Web Development Blog | Wanda Azhar",
    description:
      "Browse coding resources, web development articles, and technical references curated by Wanda Azhar.",
    url: "/my-blog",
  },
};

const MyBlogPage = async () => {
  const blogs = await getPublishedBlogs();

  return (
    <section className="blog">
      <div className="wrapContainer">
        <h1 className="srOnly">Web Development Blog and Coding Resources</h1>
        <div className="wrapBlog">
          <SearchBlog />
          <BlogList initialBlogs={blogs} />
        </div>
      </div>
    </section>
  );
};

export default MyBlogPage;