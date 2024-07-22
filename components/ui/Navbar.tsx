"use client";
import Link from "next/link"
import { Input } from "./input"
import { routes } from "@/constants/data"
import MobileMenu from "./MobileMenu"
import Genere from "../Genere"
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";




type Props = {}

const Navbar = (props: Props) => {
     const path = usePathname();
     const router = useRouter();
     // @ts-ignore
     const {searchText, setSearchText} = useContext(SearchContext);
     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(e.target.value);
               router.push(`/search/${e.target.value}`)
               if(e.target.value === ''){
                    router.push('/')
               }
     }
     
  return (
    <div className={`flex px-4 sm:px-6 md:px-8 lg:px-10 items-center fixed top-0 z-50 bg-black/90 h-16 md:h-20  text-red justify-between w-screen`}>
        <div className=" text-lg sm:text-xl md:text-2xl  font-semibold uppercase  tracking-wider">
            <Link href={'/'}>meowflix</Link>
        </div>
        <div className="flex md:space-x-5 h-full items-center justify-between">
           <div>

            <Input value={searchText} onChange={handleSearch} className="rounded-xl h-8 md:h-auto w-32 md:w-auto" placeholder="Search" />
           </div>
           {path !== '/' && <div className="hidden md:block"> <Genere /></div>}
                       
                        <div className="space-x-5   font-bold text-lg hidden md:flex">
                {routes.map((route) => (
                     <Link href={route.path} key={route.name} className="hover:text-red text-white">
                          {route.name}
                     </Link>
                ))}
           </div>
           {/* mobile menu */}
           <div className="md:hidden">
            <MobileMenu />
           

        </div>

        </div>

      


    </div>
  )
}

export default Navbar