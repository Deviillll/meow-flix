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




const SingleCard = ({movies}: {movies: Movies}) => {
  return (
    
        <Card className='border-0 rounded-md w-[80vw]  md:w-1/2 shadow-none  bg-black '>
            <div className='md:py-8 sm:py-5 py-3 lg:py-10 w-full  text-center text-white'>
            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl  font-semibold  mt-2'>Watch Online Free </h3>
            </div>
            
            
                <div className='w-full  '>
                    

                   {
                    movies.poster_path ? (
                        <Image
                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                        alt={movies.title? movies.title:movies.name}
                        width={400}
                        height={400}
                        
                        className='rounded-sm  md:w-[35vw] mx-auto h-[50vh] md:h-[60vh] lg:h-[63vh] '
                        />
                    ):(
                        <Image
                        src={`https://via.placeholder.com/500x750.png?text=${movies.title}`}
                        
                        alt={movies.title? movies.title:movies.name}
                        width={500}
                        height={750}
                        
                        className='rounded-sm  md:w-[35vw] mx-auto h-[50vh] md:h-[60vh]'
                        />
                    )
                   }

                 <div className='md:py-8 sm:py-5 py-4 space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 w-full bg-black text-slate-200'>
                 <h3 className='text-md sm:text-lg md:text-xl lg:text-2xl  font-semibold text-center  mt-2'>{movies.title? movies.title:movies.name}</h3>
                 
                    
                
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg lg:leading-tight line-clamp-3 md:line-clamp-5 mt-2 text-center'>{movies.overview}</p>
                    <div>
                        <h3 className='text-md sm:text-lg md:text-xl lg:text-2xl  font-semibold text-red  mt-2'>Generes</h3>
                        <div className='mt-4'>
                            {
                                movies.genres?.map((genere, index) => (
                                    <span key={index} className='  px-1 text-xs sm:text-sm md:text-md lg:text-lg'>{genere.name}</span>
                                ))
                            }
                        </div>
                 </div>
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Release Date   :</span> {movies.release_date}</p>
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Rating   :</span> {movies.vote_average?.toFixed(1)} imdb</p>
                   
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Popularity   : </span>{movies.popularity?.toFixed(0)}</p>
                   
                    <p className='text-xs sm:text-sm md:text-md lg:text-lg mt-2'><span className='text-red'>Language   :</span> {movies.spoken_languages && movies.spoken_languages[0]?.english_name}</p>
                    
                       
                 </div>
                 <div className='w-full flex justify-center pb-5'>
                        <button className='bg-red/80 font-medium text-white px-2 md:px-4 md:py-2 py-1 rounded-md mt-4'><Link  target="_blank" href={`/watchMovie/${movies.id}`}>Watch Now</Link></button >
                 </div>
              
                    

                </div>
            

        </Card>
      

  )
}

export default SingleCard
