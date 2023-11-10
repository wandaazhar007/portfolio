'use client'
import './searchBlog.scss';
import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchBlogContext } from '../../context//SearchBlogContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight, faClose } from '@fortawesome/free-solid-svg-icons';

const SearchBlog: React.FC = () => {
  // const [querySearch, setQuerySearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const blogContext: any = useContext(SearchBlogContext);
  const setQuerySearch = blogContext.setQuerySearch;
  const querySearch = blogContext.querySearch;
  const setBtnPerCategory = blogContext.setBtnQuery;
  const btnPerCategory = blogContext.btnQuery;
  const page = blogContext.page;
  const setPage = blogContext.setPage;
  // const [keywordButton, setKeywordButton] = useState(1)

  // const getSearch = async () => {
  //   const responseSearch = await axios.get(`${process.env.NEXT_PUBLIC_GET_ALL_MY_BLOG}?search_query=${querySearch}`)
  //   console.log(responseSearch.data.result);
  //   console.log('first')
  // }


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value)
    setPage(0)
  }

  const handlePerCategoryBtn = (id: number) => {
    // setQuerySearch('');
    setBtnPerCategory(id)
    setPage(0)
  }
  const handleReset = () => {
    setQuerySearch('')
    setBtnPerCategory(3)
    setPage(0)
  }

  const tabMenuRef = useRef<HTMLUListElement>(null);
  const iconLeftRef = useRef<SVGSVGElement>(null);
  const iconRightRef = useRef<SVGSVGElement>(null);

  const handleClickLeft = () => {
    tabMenuRef.current!.scrollLeft -= 100;
    const scrollRightValue = Math.ceil(tabMenuRef.current!.scrollLeft);
    console.log(scrollRightValue)
    iconRightRef.current!.style.display = scrollRightValue <= 100 ? "block" : "none";
  }

  const handleClickRight = () => {
    tabMenuRef.current!.scrollLeft += 100;
    iconVisibility();
  }

  const iconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenuRef.current!.scrollLeft);
    iconLeftRef.current!.style.display = scrollLeftValue > 0 ? "block" : "none"

    let scrollableWidth = tabMenuRef.current!.scrollWidth - tabMenuRef.current!.clientWidth;

  }

  return (
    <section className="search">
      <div className="wrapContainer">
        <div className="searchGroup">
          <input type='text' placeholder='search article here' onChange={handleSearch} value={querySearch} />
          {querySearch && <span className='result'><button onClick={handleReset}>{querySearch} <FontAwesomeIcon icon={faClose} className='icon' /></button></span>}
        </div>

        <div className={`tabNavigation ${querySearch ? 'disable' : ''}`}>
          <FontAwesomeIcon icon={faAngleLeft} className="leftBtn" ref={iconLeftRef} onClick={handleClickLeft} />
          <FontAwesomeIcon icon={faAngleRight} className="rightBtn" ref={iconRightRef} onClick={handleClickRight} />
          <ul className="tabMenu" ref={tabMenuRef}>
            <li className={`tabButton ${btnPerCategory == 1 ? 'active' : ''}`} onClick={() => handlePerCategoryBtn(1)}>HTML</li>
            <li className={`tabButton ${btnPerCategory == 2 ? 'active' : ''} `} onClick={() => handlePerCategoryBtn(2)}>CSS</li>
            <li className={`tabButton ${btnPerCategory == 3 ? 'active' : ''} `} onClick={() => handlePerCategoryBtn(3)}>JavaScript</li>
            <li className={`tabButton ${btnPerCategory == 4 ? 'active' : ''}`} onClick={() => handlePerCategoryBtn(4)}>ReactJs</li>
            <li className={`tabButton ${btnPerCategory == 5 ? 'active' : ''} `} onClick={() => handlePerCategoryBtn(5)}>Git & GitHub</li>
            <li className={`tabButton ${btnPerCategory == 6 ? 'active' : ''} `} onClick={() => handlePerCategoryBtn(6)}>Linux Server</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SearchBlog;