'use client'
import './searchBlog.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SearchBlogContext } from '../../context//SearchBlogContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const SearchBlog: React.FC = () => {
  // const [querySearch, setQuerySearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const searchBlog: any = useContext(SearchBlogContext);
  const setQuerySearch = searchBlog.setQuerySearch;
  const querySearch = searchBlog.querySearch;
  const setBtnPerCategory = searchBlog.setBtnQuery;
  const btnPerCategory = searchBlog.btnQuery;
  // const [keywordButton, setKeywordButton] = useState(1)

  // const getSearch = async () => {
  //   const responseSearch = await axios.get(`${process.env.NEXT_PUBLIC_GET_ALL_MY_BLOG}?search_query=${querySearch}`)
  //   console.log(responseSearch.data.result);
  //   console.log('first')
  // }

  const getBlogPerCategory = async () => {
    const responseSearch = await axios.get(`${process.env.NEXT_PUBLIC_GET_BLOG_PER_CATEGORY}?search_query=${btnPerCategory}`)
    console.log(responseSearch.data.result);
    console.log('first')
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
    // getSearch();
  }

  const handlePerCategoryBtn = (id: number) => {
    setBtnPerCategory(id)
    // alert(id)
  }
  const handleReset = () => {
    setQuerySearch('')
  }
  return (
    <section className="search">
      <input type='text' placeholder='search article here' onChange={handleSearch} value={querySearch} />
      {querySearch && <span className='result'><button onClick={handleReset}>{querySearch} <FontAwesomeIcon icon={faClose} className='icon' /></button></span>}
      <div className="buttonGroup">
        <button className={btnPerCategory == 3 ? 'active' : ''} onClick={() => handlePerCategoryBtn(3)}>HTML</button>
        <button className={btnPerCategory == 2 ? 'active' : ''} onClick={() => handlePerCategoryBtn(2)}>CSS</button>
        <button className={btnPerCategory == 1 ? 'active' : ''} onClick={() => handlePerCategoryBtn(1)}>JavaScript</button>
        <button className={btnPerCategory == 4 ? 'active' : ''} onClick={() => handlePerCategoryBtn(4)}>ReactJs</button>
        <button className={btnPerCategory == 5 ? 'active' : ''} onClick={() => handlePerCategoryBtn(5)}>Git</button>
      </div>
    </section>
  );
}

export default SearchBlog;