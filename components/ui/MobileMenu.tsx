"use client"
import {useState} from 'react'
import { routes } from '@/constants/data'
import Link from 'next/link'


const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
    
   
        <div className=" ">
            <div className="flex items-center justify-center h-10 w-10" onClick={() => setIsOpen(pre=>!pre)}>
              { !isOpen ?   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                :
            
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
}




            </div>



            <div className={`flex flex-col items-center justify-center h-screen transition-all ease-linear duration-200 delay-100  overflow-hidden bg-black/90 fixed top-14 left-0 z-50 ${isOpen ? "w-[60vw]":"w-[0px]"}`}>
           
            <div className="flex flex-col space-y-5 ">
                {routes.map((route) => (
                    <Link className='text-white font-medium text-md' href={route.path} key={route.name}>
                        {route.name}
                    </Link>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu