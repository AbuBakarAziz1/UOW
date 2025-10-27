"use client";

import InnerPageLayout from "../../components/InnerPageLayout";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { leaders, deans } from "@/lib/leadershipData";

export default function Leadership() {
  return (
    <InnerPageLayout section="about">
      {/* Hero */}
      <div className="relative bg-gray-50">
        <div className="relative h-36 md:h-48 lg:h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance1.jpg')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 to-orange-400/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">University Leadership</h1>
              <p className="mt-2 text-sm md:text-base max-w-2xl">Meet the distinguished leaders guiding the University of Wah towards excellence in education and research.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Administration Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
            Administration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-orange-300 text-sm font-semibold">{leader.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {leader.message.split('\n\n')[0]}
                  </p>
                  <Link href={`/about/leadership/${leader.id}`} className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-orange text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue">
                    Read More <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deans Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
            Deans of Faculties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deans.map((dean) => (
              <div
                key={dean.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dean.image}
                    alt={dean.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{dean.name}</h3>
                    <p className="text-orange-300 text-sm font-semibold">{dean.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {dean.message.split('\n\n')[0]}
                  </p>
                  <Link href={`/about/leadership/${dean.id}`} className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-orange text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue">
                    Read More <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-sky-50 to-orange-50 rounded-xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
            Leadership Excellence
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The University of Wah is fortunate to have visionary leaders who bring extensive experience in academia, 
            administration, and strategic planning. Their collective expertise guides the university in achieving its 
            mission of providing quality education, fostering research excellence, and contributing to national development.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
