"use client"
import { useSearchParams } from "next/navigation"


const Page = ({params}:any) => {
     const searchParams = useSearchParams()
     const season=searchParams.get('season')
     const episode=searchParams.get('episode')
  
    
    const {id}=params
    const url=`https://vidsrc.to/embed/tv/${id}/${season}/${episode}`
  
  return (
    <div className="">
        <iframe className="w-screen h-screen" allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        src={url}  >

        </iframe>
       
      
    </div>
  )
}

export default Page
