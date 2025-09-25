"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaFileAlt, FaMedal, FaFutbol, FaUniversity, FaFlask, FaGraduationCap, FaLaptop, FaArrowRight } from "react-icons/fa";

const leaders = [
  {
    name: "Sardar Saleem Haider Khan",
    title: "Chancellor",
    image: "/theme/images/directors/chancellor.jpg",
    message:
      "It is matter of great satisfaction for me as chancellor to note steady evolution of University of Wah as premier institution of higher education and professional knowledge in Wah cantt...",
    link: "/leadership/chancellor",
  },
  {
    name: "Prof. Dr. Jameel-Un Nabi",
    title: "Vice Chancellor",
    image: "/theme/images/directors/vicechancellor.jpg",
    message:
      "University of Wah is an HEC recognized private-sector university and chartered by Government of the Punjab. Since its inception in 2005...",
    link: "/leadership/vicechancellor",
  },
  {
    name: "Lt Gen Tahir Hameed Shah HI(M)",
    title: "Chairman Board of Governors",
    image: "/theme/images/directors/vicechancellor.jpg",
    message:
      "Current era has witnessed a massive application of scientific knowledge that erupted in the last two centuries. Our lives have been irreversibly influenced by the technological advancements...",
    link: "/leadership/chairman",
  },
];

const LeaderSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % leaders.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);


  // Decorative icons for background (books, documents, medal, sport, buildings, research, degree, laptop)
  const bgIcons = [
    FaBook, FaMedal, FaFileAlt, FaFutbol, FaUniversity, FaFlask, FaLaptop, FaGraduationCap,
    FaLaptop, FaLaptop, FaBook, FaMedal, FaFileAlt, FaFutbol, FaUniversity, FaFlask, FaGraduationCap, FaLaptop
  ];
  // More visible colors
  const iconColors = [
    "text-blue-400", "text-orange-400", "text-blue-300", "text-orange-300", "text-white/80", "text-green-600", "text-red-700",
    "text-orange-400", "text-blue-400", "text-orange-300", "text-blue-500", "text-orange-500", "text-green-500", "text-red-500", "text-white/90"
  ];
  // Only left, right, and top positions, more entries for richer look
  const iconLayout = [
    // Top side
    { top: 2, left: 10, size: 54, rotate: 15 },
    { top: 6, left: 22, size: 38, rotate: 45 },
    { top: 12, left: 30, size: 60, rotate: 315 },
    { top: 4, left: 50, size: 44, rotate: 75 },
    { top: 2, left: 70, size: 50, rotate: 90 },
    { top: 10, left: 80, size: 36, rotate: 110 },
    // Left side
    { top: 18, left: 2, size: 56, rotate: 120 },
    { top: 28, left: 17, size: 40, rotate: 135 },
    { top: 38, left: 12, size: 48, rotate: 180 },
    { top: 48, left: 3, size: 42, rotate: 160 },
    { top: 58, left: 18, size: 34, rotate: 190 },
    { top: 66, left: 7, size: 48, rotate: 140 },
    { top: 80, left:14, size: 52, rotate: 225 },
    { top: 88, left: 5, size: 40, rotate: 250 },
    // Right side
    { top: 20, left: 92, size: 54, rotate: 270 },
    { top: 32, left: 95, size: 38, rotate: 290 },
    { top: 45, left: 83, size: 46, rotate: 320 },
    { top: 55, left: 90, size: 42, rotate: 340 },
    { top: 70, left: 88, size: 58, rotate: 60 },
    { top: 80, left: 95, size: 36, rotate: 80 },
    { top: 90, left: 92, size: 44, rotate: 100 },
  ];

  return (
    <section className="w-full py-16 relative bg-gradient-to-r from-blue-400 via-orange-100 to-blue-200 overflow-hidden">
      {/* Decorative random icons overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {iconLayout.map((layout, i) => {
          const Icon = bgIcons[i % bgIcons.length];
          const color = iconColors[i % iconColors.length];
          return (
            <span
              key={i}
              className={`absolute ${color}`}
              style={{
                top: `${layout.top}%`,
                left: `${layout.left}%`,
                fontSize: `${layout.size}px`,
                opacity: 0.18,
                transform: `rotate(${layout.rotate}deg)`,
              }}
            >
              <Icon />
            </span>
          );
        })}
      </div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
       
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {leaders.map((leader, idx) => (
              <div
                key={leader.name}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-2xl shadow-xl p-0 md:p-0 border border-orange-100 flex flex-col md:flex-row items-stretch justify-center gap-0 min-h-[340px] overflow-hidden">
                  <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                    <Image src={leader.image} alt={leader.name} fill className="object-cover w-full h-full" />
                  </div>
                  <div className="w-full md:w-2/3 flex flex-col justify-center items-start text-left p-6 md:p-10">
                    <h3 className="text-xl md:text-2xl font-bold text-theme-blue mb-2">{leader.name}</h3>
                    <span className="text-theme-orange font-semibold mb-4 text-base md:text-lg">{leader.title}</span>
                    <blockquote className="flex items-start gap-3 text-xl italic font-semibold text-gray-900 mb-4">
                      <svg className="w-8 h-8 text-gray-400 flex-shrink-0 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                      </svg>
                       <p className="text-gray-700 text-sm md:text-base leading-relaxed">{leader.message}</p>
                    </blockquote>

                    <Link href={leader.link} className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-orange text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue">
                      Read More <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Slider indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-2">
            {leaders.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full border-0 transition-colors ${current === idx ? "bg-theme-orange" : "bg-orange-200"}`}
                aria-label={`Go to ${leaders[idx].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderSlider;
