import Link from "next/link"
import { Input } from "./input"
import { routes } from "@/constants/data"
import MobileMenu from "./MobileMenu"




type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex px-2 md:px-8 items-center fixed top-0 bg-black/90 h-14 md:h-20  text-red justify-between w-screen">
        <div className=" text-md md:text-2xl uppercase tracking-widest">
            <h1 className="font-bold ">meowFlix</h1>
        </div>
        <div className="flex md:space-x-5 h-full items-center justify-between">
           <div>

            <Input className="rounded-xl h-7 sm:h-8 md:h-auto w-36 md:w-auto" placeholder="Search" />
           </div>
           <div className="space-x-5 font-medium text-lg hidden md:flex">
                {routes.map((route) => (
                     <Link href={route.path} key={route.name}>
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