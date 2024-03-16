'use client'
import { Spinner } from "@/components";
import { getMovieById } from "@/redux/slices/movieSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DetailMovie = (props: any) => {
    const { params } = props;
    const movie = useSelector((state: any) => state.movie.movie);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getMovieById(params.movieId))
    }, [dispatch])
    if (!movie) {
        return <Spinner />
    }
    console.log(movie);

    const { thumnail, title, director, category_id, language_id, rated, premiere, time, trailer, description } = movie;
    return (
        <>
            <div className="contaier mx-auto backdrop-blur-md bg-gray-100/10 rounded-2xl p-4 h-fit my-10">
                <div className="flex items-start justify-start ">
                    <div className="">
                        <div className="p-2">
                            <img src={thumnail} alt="" className="min-w-[200px] max-w-[300px] rounded-xl " />
                        </div>
                    </div>
                    <div className="ml-10">
                        <div>
                            <h1 className="text-3xl font-extrabold ">{title}</h1>
                        </div>
                        <div className="flex items-center justify-start mt-10 mb-5">
                            <p className="text-md font-bold">Đạo diễn : </p>
                            <p className="text-md font-extralight text-gray-200 ml-5">{director}</p>
                        </div>
                        <div className="flex items-center justify-start my-5">
                            <p className="text-md font-bold">Diễn viên : </p>
                            <p className="text-md font-extralight text-gray-200 ml-5">{director}</p>
                        </div>
                        <div className="flex items-center justify-start my-5">
                            <p className="text-md font-bold">Thể loại : </p>
                            <p className="text-md font-extralight text-gray-200 ml-5">{category_id}</p>
                        </div>
                        <div className="flex items-center justify-start my-5">
                            <p className="text-md font-bold">Khởi chiếu : </p>
                            <p className="text-md font-extralight text-gray-200 ml-5">{premiere}</p>
                        </div>
                        <div className="flex items-center justify-start my-5">
                            <p className="text-md font-bold">Thời lượng : </p>
                            <p className="text-md font-extralight text-gray-200 ml-5">{time}</p>
                        </div>
                        <div className="flex items-center justify-start my-3">
                            <p className="text-md font-bold">Ngôn ngữ : </p>
                            <p className="text-md font-extralight text-gray-200 ml-3">{language_id}</p>
                        </div>
                        <div className="flex items-center justify-start my-3">
                            <p className="text-md font-bold">Rated : </p>
                            <p className="text-md font-extralight text-gray-200 ml-3">{rated}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 contaier mx-auto backdrop-blur-md bg-gray-100/10 rounded-2xl p-4 h-fit">
                <div className="my-4">
                    <p className="text-gray-100">{description}</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="backdrop-blur-md bg-gray-100/10 rounded-2xl p-4">
                    <div className="w-fit flex">
                        <div className="flex items-center mx-2">
                            <p className="font-bold text-lime-200 text-2xl">T</p>
                            <p className="font-bold text-lime-300 text-2xl">R</p>
                            <p className="font-bold text-teal-300 text-2xl">A</p>
                            <p className="font-bold text-teal-500 text-2xl">I</p>
                            <p className="font-bold text-indigo-300 text-2xl">L</p>
                            <p className="font-bold text-pink-300 text-2xl">E</p>
                            <p className="font-bold text-pink-400 text-2xl">R</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-10">
                    <div className="aspect-w-16 aspect-h-9 h-[599px] w-[80%] bg-gray-100/10 rounded-2xl">
                        <iframe className="w-full h-full" src={trailer} frameBorder="0" allowFullScreen></iframe>
                    </div>
            </div>
        </>
    );
};

export default DetailMovie;
