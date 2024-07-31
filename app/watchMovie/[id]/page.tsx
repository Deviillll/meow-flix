

const page = ({params}:any) => {
  
    const {id}=params
    const url=`https://vidsrc.xyz/embed/movie/${id}`
  //const url=` https://multiembed.mov/?video_id=${id}&tmdb=1`
  return (
    <div className="my-20">
        <iframe className="w-screen h-screen" allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        src={url}  >

        </iframe>
       
      
    </div>
  )
}

export default page
