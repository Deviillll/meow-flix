"use client"
 
import { useContext ,useState} from "react"
import { genres,TvGeneres } from "@/constants/data"
import { usePathname } from "next/navigation"
 
import {GenrexContext} from "@/context/GenrexContext"
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Genere = () => {
  const path= usePathname()
  const genreList = path === "/movies" ? genres : TvGeneres
  
   const {genre, setGenre} = useContext(GenrexContext)
   const [name, setName] = useState<string|null>("")

  return (
   <div className="">
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h1 className={`cursor-pointer font-semibold text-md md:text-xl tracking-wide ${name ? "text-white":""}`}>{name ? name :"Genre"}</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:w-48 md:h-[70vh] w-40 h-60  overflow-y-scroll">
        
        
        <DropdownMenuRadioGroup value={genre?.toString()} onValueChange={(value: string) => setGenre(Number(value))} >
          
          {genreList.map((genre) => (
            <DropdownMenuRadioItem key={genre.id}   onClick={()=>setName(genre.name)}  value={genre.id.toString()}>{genre.name}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
   </div>
  )
}

export default Genere
