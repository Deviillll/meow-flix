

const page = ({params}:any) => {
  
    const {id}=params
    const url=`https://vidsrc.to/embed/movie/${id}`
  
  return (
    <div className="mt-20">
        <iframe className="w-screen h-screen" allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        src={url}  >

        </iframe>
       
      
    </div>
  )
}

export default page
