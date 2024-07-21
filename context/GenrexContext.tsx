"use client"
import { useState,createContext } from "react"
export const GenrexContext = createContext<{
    genre:number | null,
    setGenre:(genre:number)=>void

}>({
    genre:null,
    setGenre:()=>{}
})

export const GenrexProvider = ({children}:{children:React.ReactNode}) => {
    const [genre, setGenre] = useState<number | null>(null)
    const value = {genre,setGenre}
    return (
        <GenrexContext.Provider value={value}>
            {children}
        </GenrexContext.Provider>
    )
}
