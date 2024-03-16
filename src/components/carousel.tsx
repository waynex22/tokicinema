"use client"
import React, { useEffect, useState } from "react";
import { Movie } from "@/utils/types/movie";
import {ListItemMovie} from "@/components";

const Carousel = ({ movies }: { movies: Movie[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full relative backdrop-blur-md bg-gray-100/10 rounded-2xl p-4 ">
      <button
        aria-label="slide backward"
        className="absolute z-30 left-[-2%] focus:text-blue-300 cursor-pointer"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? movies.length - 1 : prevIndex - 1
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </button>
      <div className="w-full relative flex items-center justify-center">
        <div className="h-full w-fit mx-auto overflow-x-hidden overflow-y-hidden">
          <div
            id="slider"
            className="h-full flex items-center justify-between transition ease-out duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / movies.length)}%)`,
            }}
          >
            {movies.map((movie: Movie) => (
              <ListItemMovie key={movie._id} movie={movie} />
            ))}
            {movies.map((movie: Movie) => (
              <ListItemMovie key={movie._id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
      <button
        aria-label="slide forward"
        className="absolute z-30 right-[-2%] focus:outline-none focus:text-blue-300 "
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;

