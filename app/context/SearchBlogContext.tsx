"use client";

import { createContext, useState } from "react";

type SearchBlogContextType = {
  querySearch: string;
  setQuerySearch: React.Dispatch<React.SetStateAction<string>>;
  btnQuery: string;
  setBtnQuery: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const SearchBlogContext = createContext<SearchBlogContextType | null>(null);

export function SearchBlogProvider({ children }: { children: React.ReactNode }) {
  const [querySearch, setQuerySearch] = useState("");
  const [btnQuery, setBtnQuery] = useState("javascript");
  const [page, setPage] = useState(0);

  const contextValue: SearchBlogContextType = {
    setQuerySearch,
    querySearch,
    setBtnQuery,
    btnQuery,
    setPage,
    page
  };

  return (
    <SearchBlogContext.Provider value={contextValue}>
      {children}
    </SearchBlogContext.Provider>
  );
}

export default SearchBlogProvider;