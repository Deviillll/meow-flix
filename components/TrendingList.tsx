"use client";
import { useContext, useEffect, useState } from "react";
import apiClient from "@/helper/apiClient";
import MoviesCard from "./MoviesCard";
import Loading from "./Loading"; // Import the LoadingCard component
import { useRouter } from "next/navigation";
import { SearchContext } from "@/context/SearchContext";

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

const TrendingList = () => {
  //@ts-ignore
  const { setSearchText } = useContext(SearchContext);

  const [myMovies, setMovies] = useState<Movies[]>([]);
  const [tv, setTv] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchMoviesList = async () => {
    try {
      setSearchText("");

      const res = await apiClient.get("/trending/movie/day");
      setMovies(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchtvList = async () => {
    try {
      const res = await apiClient.get("/trending/tv/day");
      setTv(res.data.results);
      console.log(res.data.results);
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
  }, []);
  useEffect(() => {
    fetchtvList();
  }, []);

  return (
    <div className="px-4 bg-black py-10">
      {loading ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Loading key={index} />
          ))}
        </div>
      ) : (
        <>
          {myMovies.length > 0 && (
            <>
              <h1 className="text-white my-5 text-xl md:text-2xl lg:text-3xl tracking-wide font-semibold">
                Trending Movies
              </h1>
              <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                {myMovies.map((movie: Movies) => (
                  <div
                    key={movie.id}
                    onClick={() => {
                      router.push(`/movie/${movie.id}`);
                    }}
                    className="cursor-pointer mt-2 sm:mt-3 md:mt-4 lg:mt-5"
                  >
                    <MoviesCard movies={movie} />
                  </div>
                ))}
              </div>
            </>
          )}
          {tv.length > 0 && (
            <>
              <h1 className="text-white my-10 text-xl font-semibold md:text-2xl lg:text-3xl tracking-wide">
                Trending Tv Shows
              </h1>
              <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                {tv.map((moviee: Movies) => (
                  <div
                    key={moviee.id}
                    onClick={() => {
                      router.push(`/shows/${moviee.id}`);
                    }}
                    className="cursor-pointer mt-2 sm:mt-3 md:mt-4 lg:mt-5"
                  >
                    <MoviesCard movies={moviee} />
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TrendingList;