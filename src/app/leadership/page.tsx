"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { leaders } from "@/lib/leadershipData";
import InnerPageLayout from "../components/InnerPageLayout";

export default function Leadership() {
  return (
    <InnerPageLayout section="about">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-theme-blue to-theme-orange">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <span className="text-white">University</span>{" "}
            <span className="text-yellow-300">Leadership</span>
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            Meet the distinguished leaders guiding the University of Wah towards excellence in education and research.
          </p>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <Link
              key={leader.id}
              href={`/about/leadership/${leader.id}`}
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
                  <p className="text-yellow-300 text-sm font-semibold">{leader.title}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {leader.message.split('\n\n')[0]}
                </p>
                <div className="flex items-center gap-2 text-theme-blue font-semibold text-sm group-hover:text-theme-orange transition-colors">
                  Read Message <FaArrowRight className="text-xs" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-theme-blue to-theme-orange rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Leadership Excellence
          </h2>
          <p className="text-white/90 leading-relaxed">
            The University of Wah is fortunate to have visionary leaders who bring extensive experience in academia, 
            administration, and strategic planning. Their collective expertise guides the university in achieving its 
            mission of providing quality education, fostering research excellence, and contributing to national development.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
