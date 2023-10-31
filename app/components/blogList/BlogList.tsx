'use client'
import './blogList.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { SearchBlogContext } from '../../context/SearchBlogContext';

const BlogList: React.FC = () => {
  const [limit, setLimit] = useState(2);
  // const [keywordButton, setKeywordButton] = useState("");
  const searchContext: any = useContext(SearchBlogContext);
  const keywordSearch = searchContext.querySearch;
  const categoryButton = searchContext.btnQuery;
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [myBlog, setMyBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const getAllBlog = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_ALL_MY_BLOG}?search_query=${keywordSearch}&page=${page}&limit=${limit}`)
    // console.log(response.data.result);
    setMyBlog(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }

  const getBlogCategory = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_BLOG_PER_CATEGORY}?search_query=${categoryButton}&page=${page}&limit=${limit}`)
    setMyBlog(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }

  const changePage = ({ selected }: any) => {
    setIsLoading(true)
    setTimeout(() => {
      setPage(selected);
    }, 1000)
    if (selected === 9) {
      setMsg(
        "Please search by specific keyword..."
      );
    } else {
      setMsg("");
    }
  };

  useEffect(() => {
    getAllBlog();
    getBlogCategory()
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      getAllBlog();
      getBlogCategory()
    }, 1000)
  }, [page, keywordSearch, categoryButton])

  return (
    <section className="boxListBlog">
      {isLoading ? (
        <div className="contentBlog">
          {myBlog.map((blog: any) => (
            <Link href="#">
              <div className="boxBlog">
                <div className="headerBox">
                  <div className="image skeletonBlog skeletonImageBlog">
                    {/* <Image src="/javascript.png" alt='logo' width={100} height={100} /> */}
                  </div>
                  <div className="descHeader">
                    <h3 className="category skeletonBlog skeletonCategoryBlog"></h3>
                    <p className="link skeleton skeletonLinkBlog"></p>
                  </div>
                </div>
                <div className="titleBox">
                  <h1 className="titleBlogSkeleton skeletonBlog skeletonTitle"><span>{blog.title}</span></h1>
                  <p className="descBlogSkeleton skeletonBlog skeletonDesc"><span>{blog.desc}</span></p>
                  <p className="descBlogSkeleton skeletonBlog skeletonDesc"><span>{blog.desc}</span></p>
                  <p className="descBlogSkeleton skeletonBlog skeletonDesc"><span>{blog.desc}</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="contentBlog">
          {myBlog.map((blog: any) => (
            <Link href={blog.link} target='_blank'>
              <div className="boxBlog">
                <div className="headerBox">
                  <div className="image">
                    <Image src="/javascript.png" alt='logo' width={100} height={100} />
                  </div>
                  <div className="descHeader">
                    <h3 className="category">{blog.category.name}</h3>
                    <p className="link">{blog.link.substring(0, 45)}...</p>
                  </div>
                </div>
                <div className="titleBox">
                  <h1 className="titleBlog">{blog.title}</h1>
                  <p className="descBlog">{blog.desc.substring(0, 95)} ...</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}


      <div className="pagination">
        <div className="box-container">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.min(10, pages)}
            onPageChange={changePage}
            containerClassName={"pagination box-container"}
            pageLinkClassName={"link"}
            previousLinkClassName={"link"}
            nextLinkClassName={"link"}
            activeLinkClassName={"link on"}
            disabledLinkClassName={"disabled"}
          />
        </div>
      </div>
    </section>


  );
}

export default BlogList;