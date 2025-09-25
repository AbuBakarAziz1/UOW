"use client";

import { FiChevronRight } from "react-icons/fi";
import Carousel from "./components/carousel";
import Link from "next/link";
import { FaBullhorn } from "react-icons/fa6";
import QuickStats from "./components/QuickStats";
import { FaUserGraduate, FaFlask, FaUniversity, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import MasonryFacilities from "./components/MasonryFacilities";
import LeaderSlider from "./components/LeaderSlider";
import FacultyDepartments from "./components/FacultyDepartments";
import Events from "./components/Events";

export default function Home() {
  return (
    <div className="relative">
      {/* Sliding notification bar */}
      <div className="absolute top-0 left-0 w-full z-30 overflow-hidden">
        <div className="bg-red-700 text-white py-1 px-6 text-sm font-bold">
          <div className="animate-marquee-ticker flex whitespace-nowrap">
            {/* First copy of content */}
            <span className="mr-36 flex items-center">
              <FaBullhorn className="mr-2" />
              Admissions Open! Apply now for Fall 2025 —{" "}
              <Link href="/admissions" className="underline text-white">
                Click here
              </Link>
            </span>
            <span className="mr-36 flex items-center">
              <FaBullhorn className="mr-2" />
              University of wah remains closed from 22th Sep Onward —{" "}
              <Link href="/admissions" className="underline text-white">
                Click here
              </Link>
            </span>
            {/* Second copy of content for seamless looping */}
            <span className="mr-36 flex items-center">
              <FaBullhorn className="mr-2" />
              Admissions Open! Apply now for Fall 2025 —{" "}
              <Link href="/admissions" className="underline text-white">
                Click here
              </Link>
            </span>
            <span className="mr-36 flex items-center">
              <FaBullhorn className="mr-2" />
              University of wah remains closed on 18th Sep —{" "}
              <Link href="/admissions" className="underline text-white">
                Click here
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div
        className=" relative w-full overflow-hidden bg-gray-200 h-auto md:h-[calc(100vh-20vh)]" >
        <Carousel />
      </div>

      {/* Overlay Cards */}
      <div className="relative -mt-2 md:-mt-5 flex flex-col md:flex-row justify-center px-2 md:px-4 pb-2 z-20">
        <div className="bg-theme-blue text-white px-3 sm:px-4 md:px-6 py-4 md:pt-10 md:pb-3 shadow-lg transform hover:scale-102 transition max-w-md w-full flex flex-col">
          <div className="flex flex-col items-center flex-grow">
            <span className="mb-3 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
              <FaUserGraduate />
            </span>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-2">Academic Excellence</h3>
            <p className="text-xs sm:text-sm text-center mb-3 flex-grow">World-class programs designed to prepare you for success in your chosen field.</p>
          </div>
          <div className="flex justify-end">
            <Link href="/academics" className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-orange text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue">
              Learn More <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
        <div className="bg-theme-orange text-white px-3 sm:px-4 md:px-6 py-4 md:pt-10 md:pb-3 shadow-lg transform hover:scale-102 transition max-w-md w-full flex flex-col">
          <div className="flex flex-col items-center flex-grow">
            <span className="mb-3 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
              <FaFlask />
            </span>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-2">Research Innovation</h3>
            <p className="text-xs sm:text-sm text-center mb-3 flex-grow">Cutting-edge research opportunities to contribute to global advancements.</p>
          </div>
          <div className="flex justify-end">
            <Link href="/research" className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-red-500 text-white text-xs font-bold shadow hover:bg-theme-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600">
              Explore <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
        <div className="bg-red-600 text-white px-3 sm:px-4 md:px-6 py-4 md:pt-10 md:pb-3 shadow-lg transform hover:scale-102 transition max-w-md w-full flex flex-col">
          <div className="flex flex-col items-center flex-grow">
            <span className="mb-3 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
              <FaUniversity />
            </span>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-2">Campus Life</h3>
            <p className="text-xs sm:text-sm text-center mb-3 flex-grow">Vibrant community with diverse activities and modern facilities.</p>
          </div>
          <div className="flex justify-end">
            <Link href="/about" className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-blue text-white text-xs font-bold shadow hover:bg-theme-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue">
              Discover <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>


      {/* Welcome Section */}
      <div className="relative bg-white py-16 px-4 overflow-hidden" style={{ backgroundImage: 'url(/theme/images/footerBackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="w-full lg:w-[30%] flex justify-center items-stretch order-1">
              <div className="w-full h-full flex items-stretch">
                <Image src="/theme/images/uwView.jpg" width={800} height={700} alt="University of Wah campus" className="rounded-xl shadow-lg w-full h-full object-cover lg:h-full" style={{ height: '100%' }} />
              </div>
            </div>
            <div className="w-full lg:w-[70%] text-left order-2 flex flex-col justify-center">
              <h1 className="text-2xl md:text-4xl font-bold text-theme-blue mb-4">Welcome to <span className="text-red-600">University of Wah</span></h1>
              <p className="text-sm md:text-base antialiased text-gray-600 mb-6 max-w-max lg:max-w-max">
                The University of Wah (UW) is a private-sector higher education institution founded with the vision of achieving excellence in unbiased dissemination of quality education to all. Chartered in 2009, by Provincial Assembly of the Punjab, the University imparts knowledge in the fields of Engineering, Basic, Social, Computer, Management Sciences and Engineering Technology by inculcating universal Islamic values of truth, goodness and service to mankind on one hand and facilitation of active research environment on the other.
              </p>
              <div className="flex justify-start gap-2">
               
                <Link href="/about" className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-blue text-white text-xs font-bold shadow hover:bg-theme-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue">
                  Read More <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeaderSlider />

      <Events />

      <MasonryFacilities />

      <div>
        <QuickStats />
      </div>

      <FacultyDepartments />
    </div>
  );
}
