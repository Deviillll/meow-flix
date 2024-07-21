"use client";
import { useEffect, useState } from 'react';
import apiClient from "@/helper/apiClient";
import MoviesCard from './MoviesCard';

import { useRouter } from 'next/navigation';
import Loading from './Loading';

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

const SearchList = ({ input }: { input: string | null }) => {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchMoviesList = async () => {
        try {
            if (!input) return;

            const res = await apiClient.get("/search/multi", {
                params: {
                    query: input
                }
            });
            setMovies(res.data.results);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
           // setLoading(false);
        }
    };

    useEffect(() => {
        fetchMoviesList();
    }, [input]);

    return (
        <div className='px-4 bg-black py-10'>
            {loading ? (
                <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Loading key={index} />
                    ))}
                </div>
            ) : (
                <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                    {movies.map((movie: Movies) => (
                        <div key={movie.id} onClick={() => {
                            if (movie.name) {
                                router.push(`/shows/${movie.id}`);
                            } else {
                                router.push(`/movie/${movie.id}`);
                            }
                        }} className='cursor-pointer mt-2 sm:mt-3 md:mt-4 lg:mt-5'>
                            <MoviesCard movies={movie} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchList;