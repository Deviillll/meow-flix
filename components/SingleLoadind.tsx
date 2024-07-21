import Link from 'next/link';
import { Card } from './ui/card'
import  Image  from 'next/image'

interface Movies {
    name: string;
    title: string;
    poster_path?: string;
    overview?: string;
    release_date?: string;
    vote_average?: number;
    vote_count?: number;
    id?: number;
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    original_language?: string;
    original_title?: string;
    popularity?: number;
    video?: boolean;
    spoken_languages?: {english_name: string}[];
    genres?: {name: string}[];
    number_of_seasons?: string;
}




const SingleLoading = () => {
  return (
    
        <Card className='border-0 rounded-md w-[80vw]  md:w-1/2 shadow-none  bg-black '>
            <div className='md:py-8 sm:py-5 py-3 lg:py-10 w-full  text-center text-white'>
            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl w-10 h-5  font-semibold  mt-2'></h3>
            </div>
            
            
                <div className='w-full  '>
                    

                 <div  className='rounded-sm  md:w-[35vw] mx-auto h-[50vh] md:h-[60vh] lg:h-[63vh] bg-slate-300'>

                 </div>

                 <div className='md:py-8 sm:py-5 py-4 space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 w-full bg-slate-300 text-slate-200'>
                 <h3 className='text-md sm:text-lg md:text-xl bg-slate-300 lg:text-2xl h-5 w-8 font-semibold text-center  mt-2'></h3>
                 
                    
                
                    <p className='text-xs sm:text-sm md:text-md bg-slate-300 lg:text-lg w-7 h-5 md:line-clamp-5 mt-2 text-center'></p>
                    {/* <div>
                        <h3 className='text-md sm:text-lg md:text-xl lg:text-2xl  font-semibold text-red  mt-2'>Generes</h3>
                        <div className='mt-4'>
                            {
                                movies.genres?.map((genere, index) => (
                                    <span key={index} className='  px-1 text-xs sm:text-sm md:text-md lg:text-lg'>{genere.name}</span>
                                ))
                            }
                        </div>
                 </div> */}
                    {/* <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Release Date   :</span> {movies.release_date}</p>
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Rating   :</span> {movies.vote_average?.toFixed(1)} imdb</p>
                   
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Popularity   : </span>{movies.popularity?.toFixed(0)}</p>
                   
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Language   :</span> {movies.spoken_languages && movies.spoken_languages[0]?.english_name}</p>
                     */}
                       
                 </div>
                 {/* <div className='w-full flex justify-center pb-5'>
                        <button className='bg-red/80 font-medium text-white px-2 md:px-4 md:py-2 py-1 rounded-md mt-4'><Link  target="_blank" href={`/watchMovie/${movies.id}`}>Watch Now</Link></button >
                 </div> */}
              
                    

                </div>
            

        </Card>
      

  )
}

export default SingleLoading
