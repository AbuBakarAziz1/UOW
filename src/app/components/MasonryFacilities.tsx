"use client";
import React from "react";
import Link from "next/link";
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

const MasonryFacilities: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-blue mb-8 text-center">Campus <span className="text-theme-orange">Facilities</span></h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
          <div className="w-full flex flex-col gap-6">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.title}
                  className="break-inside-avoid rounded-xl shadow-lg bg-gradient-to-br from-blue-100 via-orange-50 to-orange-100 p-6 mb-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 border-2 border-orange-100"
                  style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.08)" }}
                >
                  <span className="text-4xl text-theme-blue mb-2 drop-shadow-lg bg-white/60 rounded-full p-3 w-fit mx-auto">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-bold text-theme-blue mb-1 text-center tracking-wide">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2 text-center leading-relaxed">
                    {facility.description}
                  </p>
                  <Link
                    href={facility.link}
                    className="mt-2 self-center inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-orange text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue"
                  >
                    Read More <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasonryFacilities;
