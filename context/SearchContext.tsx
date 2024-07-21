"use client";
import { createContext,useState } from "react";
export const SearchContext = createContext({});
export const SearchProvider = ({ children }:{children:React.ReactNode}) => {
    const [searchText , setSearchText] = useState('');
    const [searchData , setSearchData] = useState();

    const value = {searchData, setSearchData, searchText, setSearchText};




    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}