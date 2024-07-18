import React from 'react'
import { Card, CardContent } from './ui/card'
import  Image  from 'next/image'

interface Movies {
    name?: string;
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
    <div>
        <Card className=' '>
            <div className=''>
                <div>
                    <Image width={100} height={100}  className='w-full object-fit h-72 hover:opacity-80 transition-all ease-in-out rounded-t-lg' src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="movie" />

                 <div className='py-4'>
                    
                 <h3 className='text-sm font-medium text-center line-clamp-1 mt-2'>{movies.title? movies.title:movies.name}</h3>
                       
                 </div>
              
                    

                </div>
            </div>

        </Card>
      
    </div>
  )
}

export default MoviesCard
