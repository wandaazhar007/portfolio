import Image from 'next/image';
import './myBlog.scss';
import Link from 'next/link';
import BlogList from '../components/blogList/BlogList';
import SearchBlog from '../components/searchBlog/SearchBlog';

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