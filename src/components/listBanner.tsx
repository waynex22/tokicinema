import { Banner } from "@/utils/types/banner";

const ListBanner = ({banner}: {banner: Banner} | any) => {
    const {url , name } = banner;
    return (
        <>
        <div className="flex flex-shrink-0 items-center justify-center w-full ">
                <div className="mx-2 ">
                    <img src={url} alt={name} className="relative object-cover object-center object-fit w-full h-[500px] rounded-2xl " />
                </div>
            </div>
        </>
    )
}
export default ListBanner;