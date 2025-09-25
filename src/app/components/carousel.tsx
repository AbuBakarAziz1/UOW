"use client";
import React, { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    {
      src: "/theme/images/carousel/uwBackground1.jpg",
      caption: "Welcome to University of Wah",
    },
    {
      src: "/theme/images/carousel/uwBackground2.jpg",
      caption: "Excellence in Education and Research",
    },
    {
      src: "/theme/images/carousel/uwBackground3.jpg",
      caption: "Join Our Vibrant Campus Life",
    },
    {
      src: "/theme/images/carousel/uwBackground2.jpg",
      caption: "Empowering Future Leaders",
    },
    {
      src: "/theme/images/carousel/uwBackground3.jpg",
      caption: "Innovation and Opportunities Await",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-200 h-full mt-6">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            {/* Gradient mask */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(229,231,235,1) 0%, rgba(229,231,235,0) 10%, rgba(229,231,235,0) 90%, rgba(229,231,235,1) 100%)",
              }}
            />

            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>
        ))}
      </div>

      {/* Caption overlay */}
      <div className="absolute bottom-4 lg:bottom-12 right-4 bg-black/60 text-white px-4 py-2 rounded-md text-xs sm:text-sm z-20 max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] text-center transition-opacity duration-500">
        {images[currentIndex].caption}
      </div>

      {/* Indicators at center-right */}
      <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col space-y-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-500" : "bg-blue-500/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
