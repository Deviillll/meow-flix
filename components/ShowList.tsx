"use client";
import { useContext, useEffect, useState } from 'react';
import apiClient from "@/helper/apiClient";
import MoviesCard from './MoviesCard';
import { GenrexContext } from '@/context/GenrexContext';
import { SearchContext } from '@/context/SearchContext';
import { useRouter } from 'next/navigation';
import Mypagination from './Mypagination';
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

const ShowList = () => {
    const router = useRouter();
    //@ts-ignore
    const { setSearchText } = useContext(SearchContext);
    const [movies, setMovies] = useState<Movies[]>([]);
    const [loading, setLoading] = useState(true);
    const { genre } = useContext(GenrexContext);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchMoviesList = async () => {
        try {
            setSearchText('');
            const params = genre ? { with_genres: genre } : {};
            const res = await apiClient.get(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc`, { params });
            if (res.data.results.length === 0) {
                window.location.reload();
            }
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
    }, [genre, pageNumber]);

    return (
        <div className='bg-black'>
            <div className='px-4 py-10'>
                {loading ? (
                    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Loading key={index} />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                            {movies.map((movie: Movies) => (
                                <div key={movie.id} onClick={() => { router.push(`/shows/${movie.id}`) }} className='cursor-pointer mt-2 sm:mt-3 md:mt-4 lg:mt-5'>
                                    <MoviesCard movies={movie} />
                                </div>
                            ))}
                        </div>
                        {movies.length > 0 && (
                            <div className='md:py-4 py-2'>
                                <Mypagination pageNum={pageNumber} setPage={setPageNumber} />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ShowList;