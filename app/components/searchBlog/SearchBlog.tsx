// //app/components/searchBlog/SearchBlog.tsx
// 'use client';

// import './searchBlog.scss';
// import { useContext, useEffect, useRef, useState } from 'react';
// import { SearchBlogContext } from '../../context/SearchBlogContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faAngleLeft,
//   faAngleRight,
//   faClose,
// } from '@fortawesome/free-solid-svg-icons';
// import { apiGet } from '@/app/lib/api';
// import { mapCategoryToTab } from '@/app/lib/mappers';
// import type { CategoriesApiResponse } from '@/app/types/category';

// type CategoryTab = {
//   id: string;
//   name: string;
//   slug: string;
// };

// const SearchBlog: React.FC = () => {
//   const [categories, setCategories] = useState<CategoryTab[]>([]);
//   const blogContext = useContext(SearchBlogContext);

//   if (!blogContext) {
//     return null;
//   }

//   const { setQuerySearch, querySearch, setBtnQuery, btnQuery, setPage } = blogContext;

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuerySearch(e.target.value);
//     setPage(0);
//   };

//   const handlePerCategoryBtn = (slug: string) => {
//     setBtnQuery(slug);
//     setPage(0);
//   };

//   const handleReset = () => {
//     setQuerySearch('');
//     setBtnQuery('');
//     setPage(0);
//   };

//   const tabMenuRef = useRef<HTMLUListElement>(null);
//   const iconLeftRef = useRef<SVGSVGElement>(null);
//   const iconRightRef = useRef<SVGSVGElement>(null);

//   const handleClickLeft = () => {
//     if (!tabMenuRef.current) return;
//     tabMenuRef.current.scrollLeft -= 100;
//     iconVisibility();
//   };

//   const handleClickRight = () => {
//     if (!tabMenuRef.current) return;
//     tabMenuRef.current.scrollLeft += 100;
//     iconVisibility();
//   };

//   const iconVisibility = () => {
//     if (!tabMenuRef.current || !iconLeftRef.current || !iconRightRef.current) return;

//     const scrollLeftValue = Math.ceil(tabMenuRef.current.scrollLeft);
//     const scrollableWidth =
//       tabMenuRef.current.scrollWidth - tabMenuRef.current.clientWidth;

//     iconLeftRef.current.style.display = scrollLeftValue > 0 ? 'block' : 'none';
//     iconRightRef.current.style.display =
//       scrollLeftValue < scrollableWidth ? 'block' : 'none';
//   };

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const response = await apiGet<CategoriesApiResponse>('/categories');
//         const mapped = response.data.map(mapCategoryToTab);
//         setCategories(mapped);
//       } catch (error) {
//         console.error('Failed to fetch categories:', error);
//         setCategories([]);
//       }
//     };

//     getCategories();
//   }, []);

//   useEffect(() => {
//     iconVisibility();
//   }, [categories]);

//   return (
//     <section className="search">
//       <div className="wrapContainer">
//         <div className="searchGroup">
//           <input
//             type="text"
//             placeholder="search article here"
//             onChange={handleSearch}
//             value={querySearch}
//           />

//           {querySearch && (
//             <span className="result">
//               <button onClick={handleReset}>
//                 {querySearch} <FontAwesomeIcon icon={faClose} className="icon" />
//               </button>
//             </span>
//           )}
//         </div>

//         <div className={`tabNavigation ${querySearch ? 'disable' : ''}`}>
//           <FontAwesomeIcon
//             icon={faAngleLeft}
//             className="leftBtn"
//             ref={iconLeftRef}
//             onClick={handleClickLeft}
//           />
//           <FontAwesomeIcon
//             icon={faAngleRight}
//             className="rightBtn"
//             ref={iconRightRef}
//             onClick={handleClickRight}
//           />

//           <ul className="tabMenu" ref={tabMenuRef}>
//             <li
//               className={`tabButton ${btnQuery === '' ? 'active' : ''}`}
//               onClick={() => handlePerCategoryBtn('')}
//             >
//               All
//             </li>

//             {categories.map((category) => (
//               <li
//                 key={category.id}
//                 className={`tabButton ${btnQuery === category.slug ? 'active' : ''}`}
//                 onClick={() => handlePerCategoryBtn(category.slug)}
//               >
//                 {category.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SearchBlog;

'use client';

import './searchBlog.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { SearchBlogContext } from '../../context/SearchBlogContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { apiGet } from '@/app/lib/api';
import { mapCategoryToTab } from '@/app/lib/mappers';
import type { CategoriesApiResponse } from '@/app/types/category';

type CategoryTab = {
  id: string;
  name: string;
  slug: string;
};

const SearchBlog: React.FC = () => {
  const [categories, setCategories] = useState<CategoryTab[]>([]);
  const blogContext = useContext(SearchBlogContext);

  if (!blogContext) {
    return null;
  }

  const { setQuerySearch, querySearch, setBtnQuery, btnQuery, setPage } = blogContext;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuerySearch(value);
    setPage(0);

    if (value.trim()) {
      setBtnQuery('');
    }
  };

  const handlePerCategoryBtn = (slug: string) => {
    setBtnQuery(slug);
    setQuerySearch('');
    setPage(0);
  };

  const handleReset = () => {
    setQuerySearch('');
    setBtnQuery('');
    setPage(0);
  };

  const tabMenuRef = useRef<HTMLUListElement>(null);
  const iconLeftRef = useRef<SVGSVGElement>(null);
  const iconRightRef = useRef<SVGSVGElement>(null);

  const handleClickLeft = () => {
    if (!tabMenuRef.current) return;
    tabMenuRef.current.scrollLeft -= 100;
    iconVisibility();
  };

  const handleClickRight = () => {
    if (!tabMenuRef.current) return;
    tabMenuRef.current.scrollLeft += 100;
    iconVisibility();
  };

  const iconVisibility = () => {
    if (!tabMenuRef.current || !iconLeftRef.current || !iconRightRef.current) return;

    const scrollLeftValue = Math.ceil(tabMenuRef.current.scrollLeft);
    const scrollableWidth =
      tabMenuRef.current.scrollWidth - tabMenuRef.current.clientWidth;

    iconLeftRef.current.style.display = scrollLeftValue > 0 ? 'block' : 'none';
    iconRightRef.current.style.display =
      scrollLeftValue < scrollableWidth ? 'block' : 'none';
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await apiGet<CategoriesApiResponse>('/categories');
        const mapped = response.data.map(mapCategoryToTab);
        setCategories(mapped);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setCategories([]);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    iconVisibility();
  }, [categories]);

  return (
    <section className="search">
      <div className="wrapContainer">
        <div className="searchGroup">
          <input
            type="text"
            placeholder="search article here"
            onChange={handleSearch}
            value={querySearch}
          />

          {querySearch && (
            <span className="result">
              <button onClick={handleReset}>
                {querySearch} <FontAwesomeIcon icon={faClose} className="icon" />
              </button>
            </span>
          )}
        </div>

        <div className="tabNavigation">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="leftBtn"
            ref={iconLeftRef}
            onClick={handleClickLeft}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="rightBtn"
            ref={iconRightRef}
            onClick={handleClickRight}
          />

          <ul className="tabMenu" ref={tabMenuRef}>
            <li
              className={`tabButton ${btnQuery === '' ? 'active' : ''}`}
              onClick={() => handlePerCategoryBtn('')}
            >
              All
            </li>

            {categories.map((category) => (
              <li
                key={category.id}
                className={`tabButton ${btnQuery === category.slug ? 'active' : ''}`}
                onClick={() => handlePerCategoryBtn(category.slug)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SearchBlog;