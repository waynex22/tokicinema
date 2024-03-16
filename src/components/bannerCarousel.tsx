"use client"
import React, { useEffect, useState } from "react";
import ListBanner from "./listBanner";
import { Banner } from "@/utils/types/banner";

const BannerCarousel = (props : any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden ">
        <div
          className="flex transition-transform duration-700 ease-out relative"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {props.banners.map((banner: Banner) => (
              <ListBanner  key={banner._id} banner={banner} />
          ))}
        </div>
      </div>
      <button
        aria-label="slide backward"
        className="absolute z-30 top-[50%] left-[10%] focus:text-blue-300 cursor-pointer"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? props.banners.length - 1 : prevIndex - 1
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
      <button
        aria-label="slide forward"
        className="absolute z-30 top-[50%] right-[10%] focus:outline-none focus:text-blue-300 "
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

export default BannerCarousel;
