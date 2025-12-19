"use client";
import React from "react";
import { FaLaptop, FaBook, FaFutbol, FaBed, FaBus, FaUtensils, FaArrowRight } from "react-icons/fa";

const facilities = [
  {
    title: "Labs",
    description:
      "Currently there are five state of the art computer labs that facilitate students ...",
    icon: FaLaptop,
    link: "/facilities/labs",
  },
  {
    title: "Library",
    description:
      "University of Wah library provides students with an efficient and reliable stock of books ...",
    icon: FaBook,
    link: "/facilities/library",
  },
  {
    title: "Sports",
    description:
      "UW takes pride in offering world-class sports facilities built to international standards ...",
    icon: FaFutbol,
    link: "/facilities/sports",
  },
  {
    title: "Hostel",
    description:
      "UW runs two hostels, one housing male students and the other accommodates female students ...",
    icon: FaBed,
    link: "/facilities/hostel",
  },
  {
    title: "Transport",
    description:
      "The University has its own transport fleet which commutes students, faculty and staff of UW ...",
    icon: FaBus,
    link: "/facilities/transport",
  },
  {
    title: "Cafeteria",
    description:
      "The cafeterias serve almost 5,000 students and provide fresh meals prepared according ...",
    icon: FaUtensils,
    link: "/facilities/cafeteria",
  },
];

const MasonryFacilities = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Campus <span className="text-orange-500">Facilities</span>
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.title}
                className="break-inside-avoid mb-6 group"
              >
                <div
                  className="relative rounded-xl bg-gradient-to-br from-blue-100 via-orange-50 to-orange-100 p-6 flex flex-col gap-3 border-2 border-orange-100 overflow-hidden
                  transform transition-all duration-500 ease-out
                  hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                  hover:border-orange-300
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/0 before:to-orange-500/0 before:transition-all before:duration-500
                  hover:before:from-blue-500/10 hover:before:to-orange-500/10"
                >
                  {/* Animated Background Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-12 group-hover:left-full transition-all duration-1000 ease-in-out"></div>
                  </div>

                  {/* Icon Container with Advanced Hover */}
                  <div className="relative z-10">
                    <span className="text-4xl text-blue-900 mb-2 bg-white/60 rounded-full p-3 w-fit mx-auto flex items-center justify-center
                      transform transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white/90 group-hover:shadow-lg
                      group-hover:text-orange-500">
                      <Icon className="transition-transform duration-500 group-hover:scale-110" />
                    </span>
                  </div>

                  {/* Title with Hover Effect */}
                  <h3 className="relative z-10 text-lg font-bold text-blue-900 mb-1 text-center tracking-wide
                    transition-all duration-300
                    group-hover:text-orange-500 group-hover:scale-105">
                    {facility.title}
                  </h3>

                  {/* Description with Smooth Transition */}
                  <p className="relative z-10 text-gray-700 text-sm mb-2 text-center leading-relaxed
                    transition-all duration-300
                    group-hover:text-gray-900">
                    {facility.description}
                  </p>

                  {/* Button with Enhanced Hover */}
                  <button
                    className="relative z-10 mt-2 self-center inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold shadow
                    transition-all duration-300 ease-out
                    hover:bg-blue-900 hover:gap-3 hover:px-6 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2
                    overflow-hidden
                    before:absolute before:inset-0 before:bg-blue-900 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-300
                    hover:before:scale-x-100 hover:before:origin-left"
                  >
                    <span className="relative z-10">Read More</span>
                    <FaArrowRight className="relative z-10 text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* Corner Accent (appears on hover) */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/0 to-blue-500/0 rounded-bl-full
                    transition-all duration-500 origin-top-right
                    group-hover:from-orange-400/20 group-hover:to-blue-500/20 group-hover:w-32 group-hover:h-32"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MasonryFacilities;