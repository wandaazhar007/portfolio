import './myBlog.scss';
import BlogList from '../components/blogList/BlogList';
import SearchBlog from '../components/searchBlog/SearchBlog';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Development Blog | Insights and Tutorials by Wanda Azhar | Canton, Michigan',
  description: 'tay up-to-date with the latest web development trends and insights. Read my blog for expert advice, tutorials, and industry news',
}
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
}

export default MyBlogPage;