import { Movie } from "@/utils/types/movie";
import Link from 'next/link';
const ListItemMovie = ({ movie }: { movie: Movie }) => {
    const { _id, title, thumnail, trailer, director, category_id, premiere, time, language_id, rated, description, createdAt, updatedAt } = movie;
    return (
        <>
            <div className="flex flex-shrink-0 gap-2">
                <div className="mx-2 relative group">
                    <img src={thumnail} alt={title} className="relative object-cover object-center object-fit w-[350px] h-[500px] rounded-md " />
                    <div className="absolute w-full h-[40%] bottom-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-75 transition-opacity duration-300">
                        <h3 className="text-2xl font-bold text-white mt-14 ml-12 h-[80px]">{title}</h3>
                        <div className="flex items-center justify-start gap-2 my-2">    
                            <div className="max-w-[200px] flex rounded-full mx-auto bg-gradient-to-tr from-violet-400 to-green-400 p-[1px] shadow-lg">
                             <Link href={`/movie/${_id}`}>
                                <button className="flex-1 font-bold md:text-xl lg:text-sm bg-black px-6 py-3 rounded-full">
                                    Xem chi tiết
                                </button>
                                </Link>
                            </div>
                            <div className="max-w-[200px] flex rounded-full mx-auto bg-gradient-to-tr from-violet-400 to-green-400 p-[1px] shadow-lg">
                                <button className="flex-1 font-bold md:text-xl lg:text-sm bg-black px-6 py-2 rounded-full">
                                    Mua vé
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};
export default ListItemMovie;
