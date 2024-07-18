"use client";
import { useEffect, useState } from 'react';
import apiClient from "@/helper/apiClient";
import MoviesCard from './MoviesCard';

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







const MoviesList = () => {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [loading, setLoading] = useState(true);
   

    const fetchMoviesList = async () => {
        try {
            const res = await apiClient.get('/discover/movie');
            setMovies(res.data.results);
        } catch (error) {
        console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMoviesList();
    }, []);

  
    

    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 px-5'>
            {movies.map((movie:Movies) => (
                <div key={movie.id} className='cursor-pointer'>
                    <MoviesCard movies={movie} />
                </div>
            ))}
           
        </div>
    );
};

export default MoviesList;