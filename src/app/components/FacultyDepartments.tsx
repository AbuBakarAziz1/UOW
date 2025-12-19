"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Department {
  name: string;
  id: string;
  programs: string[];
  description?: string;
}

interface Faculty {
  name: string;
  key: string;
  departments: Department[];
}

const faculties: Faculty[] = [
  {
    name: "Basic Sciences",
    key: "basic",
    departments: [
      {
        name: "Biosciences",
        id: "biosciences",
        programs: ["BS Biosciences", "MS Biosciences", "MS Biochemistry", "MS Biotechnology", "PhD Biosciences"],
      },
      {
        name: "Chemistry",
        id: "chemistry",
        programs: ["BS Chemistry", "BS Applied Chemistry", "MS Inorganic Chemistry", "MS Organic Chemistry", "MS Physical Chemistry", "PhD Chemistry"],
      },
      {
        name: "Mathematics",
        id: "mathematics",
        programs: ["BS Mathematics", "MS Mathematics", "PhD Mathematics"],
      },
      {
        name: "Physics",
        id: "physics",
        programs: ["BS Physics", "MS Physics", "PhD Physics"],
      },
      {
        name: "Statistics",
        id: "statistics",
        programs: ["BS Statistics", "MS Statistics"],
      },
    ],
  },
  {
    name: "Computer Science",
    key: "cs",
    departments: [
      {
        name: "Computer Science",
        id: "computer-science",
        programs: ["BS Computer Science", "BS Artificial Intelligence", "BS Cyber Security", "BS Data Science", "MS Computer Science", "PhD Computer Science"],
        description: "The Department of Computer Science imparts quality education in the field of Computer and Information Technology. The Department offers the degrees of BS and MS and aspires to prepare top quality graduates for the job market by providing them with up-to-date education in Computer Science."
      },
    ],
  },
  {
    name: "Management Sciences",
    key: "mgmt",
    departments: [
      {
        name: "Management Sciences",
        id: "management-sciences",
        programs: ["Bachelor of Business Administration", "BS Accounting and Finance", "BS Business Analytics", "MS Management Sciences", "Master of Business Administration (1.5 Year)", "Master of Business Administration (2 Years)", "PhD Management Sciences"],
        description: "At the Department of Management Sciences, we believe that the reality of business and administration lies in the relationships and bonds built among human beings. Therefore, our academic programs focus upon knowledge and capacity building through fostering a positive relationship between faculty and students."
      },
    ],
  },
  {
    name: "Social Sciences",
    key: "social",
    departments: [
      {
        name: "Education",
        id: "education",
        programs: ["BS Education", "MS Education", "PhD Education"],
      },
      {
        name: "English",
        id: "english",
        programs: ["BS English", "MS English"],
      },
      {
        name: "Economics",
        id: "economics",
        programs: ["BS Economics", "MS Economics", "PhD Economics"],
      },
      {
        name: "Islamic Studies",
        id: "islamic-studies",
        programs: ["BS Islamic Studies", "MS Islamic Studies"],
      },
      {
        name: "Psychology", 
        id: "psychology",
        programs: ["BS Psychology", "ADCP", "MS Psychology"],
      },
      {
        name: "Sociology",
        id: "sociology",
        programs: ["BS Sociology"],
      },
    ],
  },
  {
    name: "Engineering",
    key: "eng",
    departments: [
      {
        name: "Chemical Engineering",
        id: "chemical-engineering",
        programs: ["BSc Chemical Engg", "MS Chemical Engg", "PhD Chemical Engg"],
      },
      {
        name: "Civil Engineering", 
        id: "civil-engineering",
        programs: ["BSc Civil Engg", "MS Civil Engg", "MS Constrn Engg & Mgt"],
      },
      {
        name: "Electrical Engineering",
        id: "electrical-engineering",
        programs: ["BSc Electrical Engg", "BS Computer Engg", "BS Software Engg", "MS Electrical Engg", "PhD Electrical Engg"],
      },
      {
        name: "Mechanical Engineering",
        id: "mechanical-engineering",
        programs: ["BSc Mechanical Engg", "MS Mechanical Engg", "PhD Mechanical Engg"],
      },
      {
        name: "Mechatronics Engineering",
        id: "mechatronics-engineering",
        programs: ["BSc Mechatronics Engg", "MS Mechatronics Engg"],
      },
       {
        name: "Software Engineering",
        id: "software-engineering",
        programs: ["BSc Software Engg", "MS Software Engg"],
      },
    ],
  },
];

const FacultyDepartments: React.FC = () => {
  const [activeFaculty, setActiveFaculty] = useState(faculties[0].key);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const currentFaculty = faculties.find(f => f.key === activeFaculty);

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (currentFaculty?.departments.length) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % currentFaculty.departments.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentFaculty]);

  // Reset slide when faculty changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFaculty]);

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 via-orange-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-blue mb-8 text-center">Faculties & <span className="text-red-600">Departments</span></h2>
        <p className="text-center text-gray-700 mb-6">University of Wah has 18 departments in five faculties. Click for details of the departments under their faculties.</p>
        {/* Faculties navbar */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8">
          {faculties.map(fac => (
            <button
              key={fac.key}
              onClick={() => setActiveFaculty(fac.key)}
              className={`px-4 py-2 rounded-full font-semibold border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-theme-blue text-sm md:text-base ${activeFaculty === fac.key ? "bg-theme-blue text-white border-theme-blue" : "bg-white text-theme-blue border-blue-200 hover:bg-blue-50"}`}
            >
              Faculty of {fac.name}
            </button>
          ))}
        </nav>
        {/* Departments cards - responsive layout */}
        <div className="relative w-full">
          {currentFaculty?.departments.length ? (
            currentFaculty.departments.length === 1 ? (
              // Full-size card for single department faculties (CS and Management)
              <div className="w-full">
                {currentFaculty.departments.map((dept, idx) => {
                  const sampleImages = [
                    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80", // computer science
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", // management
                  ];
                  const imgSrc = sampleImages[idx % sampleImages.length];
                  return (
                    <div
                      key={dept.name}
                      className="bg-white rounded-2xl shadow-xl border border-orange-300 p-4 mx-auto max-w-6xl"
                    >
                      <div className="flex flex-col lg:flex-row gap-6 items-start">
                        {/* Image section */}
                        <div className="w-full lg:w-1/3">
                          <Image src={imgSrc} alt={dept.name} width={400} height={256} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                        </div>
                        {/* Content section */}
                        <div className="w-full lg:w-2/3 flex flex-col">
                          <span className="text-sm text-gray-500 tracking-wide mb-0">Department of</span>
                          <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#0d5189] to-red-500  bg-clip-text text-transparent mb-4">{dept.name}</h3>
                          {dept.description && (
                            <p className="text-gray-700 leading-relaxed text-base">{dept.description}</p>
                          )}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-theme-blue mb-3">Programs Offered:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {dept.programs.map(prog => (
                                <div key={prog} className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
                                  <span className="text-gray-700 text-sm">{prog}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <Link 
                              href={`/departments/${dept.id}`}
                              className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-500 text-white text-sm font-bold shadow-lg hover:bg-theme-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue"
                            >
                              Learn More <FaArrowRight className="text-sm" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Carousel for multiple departments
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * (100/cardsPerView)}%)` }}
                >
                  {/* Duplicate cards for infinite effect */}
                  {[...currentFaculty.departments, ...currentFaculty.departments].map((dept, idx) => {
                    const originalIdx = idx % currentFaculty.departments.length;
                    // Sample images for departments
                    const sampleImages = [
                      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // biosciences
                      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // chemistry
                      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80", // mathematics
                      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // physics
                      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // statistics
                    ];
                    const imgSrc = sampleImages[originalIdx % sampleImages.length];
                    return (
                      <div
                        key={`${dept.name}-${idx}`}
                        className="relative bg-white rounded-2xl shadow-xl border border-orange-300 p-0 flex flex-col flex-shrink-0 overflow-hidden mx-2"
                        style={{ 
                          width: `calc((100% - ${cardsPerView * 1}rem) / ${cardsPerView})`, 
                          minHeight: '400px' 
                        }}
                      >
                        {/* Card image - full width, natural height */}
                        <div className="w-full overflow-hidden flex items-center justify-center">
                          <Image src={imgSrc} alt={dept.name} width={400} height={140} className="w-full h-auto object-contain lg:object-cover rounded-t-xl shadow-lg border-2 border-white" />
                        </div>
                        <div className="w-full flex flex-col items-start px-6 py-4 flex-grow">
                          <span className="text-xs text-gray-500 tracking-wide">Department of</span>
                          <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#0d5189] to-red-500 bg-clip-text text-transparent mb-3 leading-tight">{dept.name}</span>
                          <ul className="mb-4 list-disc list-inside text-gray-700 text-sm text-left w-full flex-grow">
                            {dept.programs.map(prog => (
                              <li key={prog}>{prog}</li>
                            ))}
                          </ul>
                        </div>
                        {/* Button at bottom right */}
                        <div className="w-full px-4 pb-4 flex justify-end">
                          <Link 
                            href={`/departments/${dept.id}`}
                            className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-500 text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-blue"
                          >
                            View Details <FaArrowRight className="text-xs" />
                          </Link>
                        </div>
                        {/* Decorative accent */}
                        <span className="absolute -top-4 -right-4 text-orange-200 text-4xl opacity-30">★</span>
                      </div>
                    );
                  })}
                </div>
                {/* Slide indicators for carousel */}
                <div className="flex justify-center mt-6 gap-2">
                  {currentFaculty.departments.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${currentSlide === idx ? "bg-red-500" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            )
          ) : (
            <div className="w-full text-center text-gray-500 py-12">Departments info coming soon.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FacultyDepartments;
