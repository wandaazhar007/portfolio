'use client'
import { createContext, useState } from "react";

export const SearchBlogContext = createContext({});

export function SearchBlogProvider({ children }: any) {
  const [querySearch, setQuerySearch] = useState('');
  const [btnQuery, setBtnQuery] = useState(1);

  const contextValue = {
    setQuerySearch,
    querySearch,
    setBtnQuery,
    btnQuery
  }

  return (
    <SearchBlogContext.Provider value={contextValue}>
      {children}

    </SearchBlogContext.Provider>
  )
}

export default SearchBlogProvider;