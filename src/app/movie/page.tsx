"use client";
import React , { useEffect } from "react";

import { getMovies } from "@/redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import {Carousel} from "@/components";
const Movies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: any) => state.movie.movies);
    const status = useSelector((state: any) => state.movie.status);
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    
    return (
        <div>
            {status === "loading" && <div>Loading...</div>}
            {status === "succeeded" && (
                <div className="my-10">
                    <Carousel movies={movies} />
                </div>
            )}
            {status === "failed" && <div>Failed to fetch movies</div>}
        </div>
    );
};
export default Movies;