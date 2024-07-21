"use client";
import MoviesCard from "@/components/MoviesCard";
import SingleCard from "@/components/SingleCard";

import apiClient from "@/helper/apiClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SingleLoading from "@/components/SingleLoadind";

const Page = ({ params }: { params: any }) => {
  const { movie } = params;
  const [singleMovie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getSingleMovie = async () => {
    try {
      const res = await apiClient.get(`/movie/${movie}`);
      console.log(res.data);
      setMovie(res.data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getRelatedMovies = async () => {
    try {
      const res = await apiClient.get(`/movie/${movie}/similar`);
      console.log(res.data);
      setRelatedMovies(res.data.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    getSingleMovie();
  }, []);

  useEffect(() => {
    getRelatedMovies();
  }, [singleMovie]);

  return (
    <div className="bg-black">
      <div className="mt-24 py-7 flex flex-col justify-center items-center w-screen">
        {loading ? (
          <SingleLoading />
        ) : (
          singleMovie && <SingleCard movies={singleMovie} />
        )}
      </div>
      {relatedMovies.length > 0 && (
        <div className="mt-10 px-10">
          <h1 className="text-2xl font-bold text-white">Related Movies</h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {relatedMovies.map((movie: any) => (
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
        </div>
      )}
    </div>
  );
};

export default Page;