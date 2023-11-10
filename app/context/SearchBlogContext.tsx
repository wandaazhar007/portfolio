'use client'
import { createContext, useState } from "react";

export const SearchBlogContext = createContext({});

export function SearchBlogProvider({ children }: any) {
  const [querySearch, setQuerySearch] = useState('');
  const [btnQuery, setBtnQuery] = useState(3);
  const [page, setPage] = useState(0);

  const contextValue = {
    setQuerySearch,
    querySearch,
    setBtnQuery,
    btnQuery,
    setPage,
    page
  }

  return (
    <SearchBlogContext.Provider value={contextValue}>
      {children}
    </SearchBlogContext.Provider>
  )
}

export default SearchBlogProvider;