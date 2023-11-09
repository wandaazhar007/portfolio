import './myBlog.scss';
import BlogList from '../components/blogList/BlogList';
import SearchBlog from '../components/searchBlog/SearchBlog';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Development Portfolio: Crafting Impactful Digital Experiences',
  description: 'Explore a web developer portfolio showcasing skills, creativity, and dedication in crafting impactful digital experiences. Discover coding passion and user-friendly solutions.',
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