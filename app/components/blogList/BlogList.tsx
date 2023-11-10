'use client'
import './blogList.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { SearchBlogContext } from '../../context/SearchBlogContext';

const BlogList: React.FC = () => {
  const [limit, setLimit] = useState(6);
  const blogContext: any = useContext(SearchBlogContext);
  const keywordSearch = blogContext.querySearch;
  const categoryButton = blogContext.btnQuery;
  const page = blogContext.page;
  const setPage = blogContext.setPage;
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [myBlogSearch, setMyBlogSearch] = useState([]);
  const [myBlogButton, setMyBlogButton] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const getAllBlog = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_ALL_MY_BLOG}?search_query=${keywordSearch}&page=${page}&limit=${limit}`)
    console.log(response.data.result);
    setMyBlogSearch(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }

  const getBlogCategory = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_BLOG_PER_CATEGORY}?category_id=${categoryButton}&page=${page}&limit=${limit}`)
    setMyBlogButton(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }

  const changePage = ({ selected }: any) => {
    setIsLoading(true)
    setTimeout(() => {
      setPage(selected);
    }, 1000)
    if (selected === 2) {
      setMsg(
        "Please search by specific keyword..."
      );
    } else {
      setMsg("");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (!keywordSearch) {
        setIsLoading(false)
        getBlogCategory();
      } else {
        setIsLoading(false)
        getAllBlog();
      }
    }, 300)
  }, [page, categoryButton, keywordSearch])

  return (
    <section className="boxListBlog">
      <h1>{msg}</h1>
      {keywordSearch ? (
        isLoading ? (
          <div className="contentBlog">
            {myBlogSearch.map((blog: any) => (
              <Link href="#" key={blog.id}>
                <div className="boxBlog">
                  <div className="headerBox">
                    <div className="image skeletonBlog skeletonImageBlog">
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
          // This is Result Search
          <>
            <h1 className='searchResult'>{rows} Results for: "{keywordSearch}"  (0.37 seconds)  </h1>
            <div className="contentBlog">
              {myBlogSearch.map((blog: any) => (
                <Link href={blog.link} target='_blank' key={blog.id}>
                  {/* <h1>This Is Search</h1> */}
                  <div className="boxBlog">
                    <div className="headerBox">
                      <div className="image">
                        <Image src={blog.urlImage} alt='logo' width={100} height={100} />
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
          </>
        )
      ) : (
        isLoading ? (
          <div className="contentBlog">
            {myBlogButton.map((blog: any) => (
              <Link href="#" key={blog.id}>
                <div className="boxBlog">
                  <div className="headerBox">
                    <div className="image skeletonBlog skeletonImageBlog">
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
            {myBlogButton.map((blog: any) => (
              <Link href={blog.link} target='_blank' key={blog.id}>
                <div className="boxBlog">
                  <div className="headerBox">
                    <div className="image">
                      <Image src={blog.urlImage} alt='logo' width={100} height={100} />
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
        )
      )
      }

      <div className="pagination">
        <div className="containerPagination">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.min(6, pages)}
            onPageChange={changePage}
            containerClassName={"pagination containerPagination"}
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