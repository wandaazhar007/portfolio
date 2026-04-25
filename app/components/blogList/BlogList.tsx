// //app/components/blogList/BlogList.tsx
// 'use client';
// import './blogList.scss';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useContext, useEffect, useMemo, useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import { SearchBlogContext } from '../../context/SearchBlogContext';
// import { apiGet } from '@/app/lib/api';
// import { mapBlogToLegacyCard, type LegacyBlogCard } from '@/app/lib/mappers';
// import type { BlogsApiResponse } from '@/app/types/blog';

// const BlogList: React.FC = () => {
//   const blogContext = useContext(SearchBlogContext);

//   if (!blogContext) {
//     return null;
//   }

//   const { querySearch, btnQuery, page, setPage } = blogContext;

//   const [allBlogs, setAllBlogs] = useState<LegacyBlogCard[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [msg, setMsg] = useState('');
//   const limit = 6;

//   const filteredBlogs = useMemo(() => {
//     let items = [...allBlogs];

//     if (btnQuery) {
//       items = items.filter((blog) => blog.category.slug === btnQuery);
//     }

//     if (querySearch.trim()) {
//       const keyword = querySearch.trim().toLowerCase();
//       items = items.filter((blog) => {
//         return (
//           blog.title.toLowerCase().includes(keyword) ||
//           blog.desc.toLowerCase().includes(keyword) ||
//           blog.category.name.toLowerCase().includes(keyword)
//         );
//       });
//     }

//     return items;
//   }, [allBlogs, btnQuery, querySearch]);

//   const rows = filteredBlogs.length;
//   const pages = Math.ceil(filteredBlogs.length / limit);

//   const paginatedBlogs = useMemo(() => {
//     const start = page * limit;
//     const end = start + limit;
//     return filteredBlogs.slice(start, end);
//   }, [filteredBlogs, page]);

//   const getAllBlogs = async () => {
//     setIsLoading(true);

//     try {
//       const response = await apiGet<BlogsApiResponse>('/blogs', {
//         isPublished: true,
//         limit: 100,
//       });

//       const mapped = response.data.items.map(mapBlogToLegacyCard);
//       setAllBlogs(mapped);
//     } catch (error) {
//       console.error('Failed to fetch blogs:', error);
//       setAllBlogs([]);
//     } finally {
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 300);
//     }
//   };

//   const changePage = ({ selected }: { selected: number }) => {
//     setIsLoading(true);

//     setTimeout(() => {
//       setPage(selected);
//       setIsLoading(false);
//     }, 300);

//     if (selected === 2) {
//       setMsg('Please search by specific keyword...');
//     } else {
//       setMsg('');
//     }
//   };

//   useEffect(() => {
//     getAllBlogs();
//   }, []);

//   useEffect(() => {
//     setPage(0);
//   }, [querySearch, btnQuery, setPage]);

//   return (
//     <section className="boxListBlog">
//       <h1>{msg}</h1>

//       {isLoading ? (
//         <div className="contentBlog">
//           {Array.from({ length: limit }).map((_, index) => (
//             <Link href="#" key={index}>
//               <div className="boxBlog">
//                 <div className="headerBox">
//                   <div className="image skeletonBlog skeletonImageBlog"></div>

//                   <div className="descHeader">
//                     <h3 className="category skeletonBlog skeletonCategoryBlog"></h3>
//                     <p className="link skeletonBlog skeletonLinkBlog"></p>
//                   </div>
//                 </div>

//                 <div className="titleBox">
//                   <h1 className="titleBlogSkeleton skeletonBlog skeletonTitle">
//                     <span>Loading title</span>
//                   </h1>
//                   <p className="descBlogSkeleton skeletonBlog skeletonDesc">
//                     <span>Loading description</span>
//                   </p>
//                   <p className="descBlogSkeleton skeletonBlog skeletonDesc">
//                     <span>Loading description</span>
//                   </p>
//                   <p className="descBlogSkeleton skeletonBlog skeletonDesc">
//                     <span>Loading description</span>
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <>
//           {querySearch ? (
//             <h1 className="searchResult">
//               {rows} Results for: "{querySearch}"
//             </h1>
//           ) : null}

//           <div className="contentBlog">
//             {paginatedBlogs.map((blog) => (
//               <Link href={blog.link || '#'} target="_blank" key={blog.id}>
//                 <div className="boxBlog">
//                   <div className="headerBox">
//                     <div className="image">
//                       <Image src={blog.urlImage} alt={blog.title} width={100} height={100} />
//                     </div>

//                     <div className="descHeader">
//                       <h3 className="category">{blog.category.name}</h3>
//                       <p className="link">
//                         {blog.link ? `${blog.link.substring(0, 45)}...` : 'No external link'}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="titleBox">
//                     <h1 className="titleBlog">{blog.title}</h1>
//                     <p className="descBlog">{blog.desc.substring(0, 95)} ...</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </>
//       )}

//       <div className="pagination">
//         <div className="containerPagination">
//           <ReactPaginate
//             previousLabel={'<'}
//             nextLabel={'>'}
//             pageCount={Math.max(1, pages)}
//             onPageChange={changePage}
//             // forcePage={page}
//             forcePage={Math.min(page, Math.max(0, pages - 1))}
//             containerClassName={'pagination containerPagination'}
//             pageLinkClassName={'link'}
//             previousLinkClassName={'link'}
//             nextLinkClassName={'link'}
//             activeLinkClassName={'link on'}
//             disabledLinkClassName={'disabled'}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogList;



'use client';
import './blogList.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { SearchBlogContext } from '../../context/SearchBlogContext';
import { apiGet } from '@/app/lib/api';
import { mapBlogToLegacyCard, type LegacyBlogCard } from '@/app/lib/mappers';
import type { BlogsApiResponse } from '@/app/types/blog';

const SKELETON_ITEMS = 6;
const UI_LOADING_DELAY = 350;

const BlogList: React.FC = () => {
  const blogContext = useContext(SearchBlogContext);

  if (!blogContext) {
    return null;
  }

  const { querySearch, btnQuery, page, setPage } = blogContext;

  const [allBlogs, setAllBlogs] = useState<LegacyBlogCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState('');
  const [isInitialLoaded, setIsInitialLoaded] = useState(false);
  const limit = 6;

  const loadingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filteredBlogs = useMemo(() => {
    let items = [...allBlogs];

    if (btnQuery) {
      items = items.filter((blog) => blog.category.slug === btnQuery);
    }

    if (querySearch.trim()) {
      const keyword = querySearch.trim().toLowerCase();
      items = items.filter((blog) => {
        return (
          blog.title.toLowerCase().includes(keyword) ||
          blog.desc.toLowerCase().includes(keyword) ||
          blog.category.name.toLowerCase().includes(keyword)
        );
      });
    }

    return items;
  }, [allBlogs, btnQuery, querySearch]);

  const rows = filteredBlogs.length;
  const pages = Math.ceil(filteredBlogs.length / limit);

  const paginatedBlogs = useMemo(() => {
    const start = page * limit;
    const end = start + limit;
    return filteredBlogs.slice(start, end);
  }, [filteredBlogs, page]);

  const getAllBlogs = async () => {
    setIsLoading(true);

    try {
      const response = await apiGet<BlogsApiResponse>('/blogs', {
        isPublished: true,
        limit: 100,
      });

      const mapped = response.data.items.map(mapBlogToLegacyCard);
      setAllBlogs(mapped);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      setAllBlogs([]);
    } finally {
      setIsLoading(false);
      setIsInitialLoaded(true);
    }
  };

  const changePage = ({ selected }: { selected: number }) => {
    setPage(selected);

    if (selected === 2) {
      setMsg('Please search by specific keyword...');
    } else {
      setMsg('');
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    setPage(0);
  }, [querySearch, btnQuery, setPage]);

  useEffect(() => {
    if (!isInitialLoaded) return;

    setIsLoading(true);

    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, UI_LOADING_DELAY);

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [querySearch, btnQuery, page, isInitialLoaded]);

  return (
    <section className="boxListBlog">
      <h1>{msg}</h1>

      {isLoading ? (
        <div className="contentBlog">
          {Array.from({ length: SKELETON_ITEMS }).map((_, index) => (
            <div className="boxBlog skeletonCard" key={index}>
              <div className="headerBox">
                <div className="image skeletonBlog skeletonImageBlog"></div>

                <div className="descHeader">
                  <h3 className="category skeletonBlog skeletonCategoryBlog"></h3>
                  <p className="link skeletonBlog skeletonLinkBlog"></p>
                </div>
              </div>

              <div className="titleBox">
                <h1 className="titleBlogSkeleton skeletonBlog skeletonTitle">
                  <span>Loading title</span>
                </h1>
                <p className="descBlogSkeleton skeletonBlog skeletonDesc">
                  <span>Loading description</span>
                </p>
                <p className="descBlogSkeleton skeletonBlog skeletonDesc">
                  <span>Loading description</span>
                </p>
                <p className="descBlogSkeleton skeletonBlog skeletonDesc short">
                  <span>Loading description</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {querySearch ? (
            <h1 className="searchResult">
              {rows} Results for: "{querySearch}"
            </h1>
          ) : null}

          <div className="contentBlog">
            {/* {paginatedBlogs.map((blog) => (
              <Link href={blog.link || '#'} target="_blank" key={blog.id}>
                <div className="boxBlog">
                  <div className="headerBox">
                    <div className="image">
                      <Image src={blog.urlImage} alt={blog.title} width={100} height={100} />
                    </div>

                    <div className="descHeader">
                      <h3 className="category">{blog.category.name}</h3>
                      <p className="link">
                        {blog.link ? `${blog.link.substring(0, 45)}...` : 'No external link'}
                      </p>
                    </div>
                  </div>

                  <div className="titleBox">
                    <h1 className="titleBlog">{blog.title}</h1>
                    <p className="descBlog">{blog.desc.substring(0, 95)} ...</p>
                  </div>
                </div>
              </Link>
            ))} */}

            {paginatedBlogs.map((blog) => {
              const hasExternalLink =
                typeof blog.link === 'string' &&
                (blog.link.startsWith('http://') || blog.link.startsWith('https://'));

              const card = (
                <div className="boxBlog">
                  <div className="headerBox">
                    <div className="image">
                      <Image src={blog.urlImage} alt={blog.title} width={100} height={100} />
                    </div>

                    <div className="descHeader">
                      <h3 className="category">{blog.category.name}</h3>
                      <p className="link">
                        {hasExternalLink ? `${blog.link.substring(0, 45)}...` : 'No external link'}
                      </p>
                    </div>
                  </div>

                  <div className="titleBox">
                    <h1 className="titleBlog">{blog.title}</h1>
                    <p className="descBlog">{blog.desc.substring(0, 95)} ...</p>
                  </div>
                </div>
              );

              return hasExternalLink ? (
                <Link href={blog.link} target="_blank" rel="noopener noreferrer" key={blog.id}>
                  {card}
                </Link>
              ) : (
                <div key={blog.id}>{card}</div>
              );
            })}
          </div>
        </>
      )}

      <div className="pagination">
        <div className="containerPagination">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={Math.max(1, pages)}
            onPageChange={changePage}
            forcePage={Math.min(page, Math.max(0, pages - 1))}
            containerClassName={'pagination containerPagination'}
            pageLinkClassName={'link'}
            previousLinkClassName={'link'}
            nextLinkClassName={'link'}
            activeLinkClassName={'link on'}
            disabledLinkClassName={'disabled'}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogList;