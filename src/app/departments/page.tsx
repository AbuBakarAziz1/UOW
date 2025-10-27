"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBuilding } from "react-icons/fa";
import { getAllDepartments } from "@/lib/departmentsData";

export default function DepartmentsPage() {
  const departments = getAllDepartments();

  // Group departments by faculty
  const facultyGroups = {
    'Faculty of Basic Sciences': departments.filter(d => d.faculty === 'Faculty of Basic Sciences'),
    'Faculty of Computer Science': departments.filter(d => d.faculty === 'Faculty of Computer Science'),
    'Faculty of Management Sciences': departments.filter(d => d.faculty === 'Faculty of Management Sciences'),
    'Faculty of Social Sciences & Humanities': departments.filter(d => d.faculty === 'Faculty of Social Sciences & Humanities'),
    'Faculty of Engineering': departments.filter(d => d.faculty === 'Faculty of Engineering'),
  };

  return (
    <InnerPageLayout section="academics">
      {/* Hero */}
      <div className="relative bg-gray-50">
        <div className="relative h-36 md:h-48 lg:h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance1.jpg')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 to-orange-400/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Academic Departments</h1>
              <p className="mt-2 text-sm md:text-base max-w-2xl">Explore our diverse range of academic departments and programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        {Object.entries(facultyGroups).map(([faculty, depts]) => {
          if (depts.length === 0) return null;
          return (
            <div key={faculty} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
                {faculty}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {depts.map((dept) => (
                  <Link
                    key={dept.id}
                    href={`/departments/${dept.id}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={dept.image}
                        alt={dept.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FaBuilding className="text-orange-300 text-sm" />
                          <span className="text-orange-300 text-xs font-semibold uppercase tracking-wide">
                            {faculty.replace('Faculty of ', '')}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {dept.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {dept.description[0]}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {dept.programs.length} Program{dept.programs.length !== 1 ? 's' : ''}
                        </span>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-theme-orange text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300">
                          View Details <FaArrowRight className="text-xs" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-sky-50 to-orange-50 rounded-xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
            Academic Excellence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The University of Wah offers a comprehensive range of academic programs across multiple disciplines. 
            Our departments are equipped with state-of-the-art facilities and staffed by highly qualified faculty members 
            who are committed to providing quality education and fostering research excellence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each department offers undergraduate, graduate, and doctoral programs designed to meet international standards 
            and prepare students for successful careers in their chosen fields.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
