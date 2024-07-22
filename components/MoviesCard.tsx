import React from 'react'
import { Card, CardContent } from './ui/card'
import  Image  from 'next/image'

interface Movies {
    name: string;
    title?: string;
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
}




const MoviesCard = ({movies}: {movies: Movies}) => {
  return (
    <div className=''>
        <Card className='border-0 rounded-md'>
            <div className=''>
                <div className=''>

                   {
                    movies.poster_path ? (
                        <Image
                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                        alt={movies.title? movies.title:movies.name}
                        width={400}
                        height={400}
                        className='rounded-t-md hover:opacity-90'
                        />
                    ):(
                        <Image
                        src={`https://via.placeholder.com/500x750.png?text=${movies.title? movies.title:movies.name}`}
                        
                        alt={movies.title? movies.title:movies.name}
                        width={500}
                        height={750}
                        className='rounded-t-md hover:opacity-90 transition-opacity ease-linear'
                        />
                    )
                   }

                 <div className='md:py-4 sm:py-2 py-1 bg-black text-white'>
                    
                 <h3 className='text-sm  font-semibold  line-clamp-1 mt-2'>{movies.title? movies.title:movies.name}</h3>
                       
                 </div>
              
                    

                </div>
            </div>

        </Card>
      
    </div>
  )
}

export default MoviesCard
