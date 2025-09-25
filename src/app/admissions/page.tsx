"use client";
import InnerPageLayout from "../components/InnerPageLayout";
import { FaGraduationCap, FaFileAlt, FaCalendarAlt, FaUsers, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function Admissions() {
  const admissionSteps = [
    {
      title: "Check Requirements",
      description: "Review admission requirements for your desired program",
      icon: FaFileAlt,
      link: "/admissions/requirements"
    },
    {
      title: "Submit Application",
      description: "Complete and submit your online application form",
      icon: FaCalendarAlt,
      link: "/admissions/application"
    },
    {
      title: "Document Review",
      description: "We'll review your academic credentials and documents",
      icon: FaCheckCircle,
      link: "/admissions/deadlines"
    },
    {
      title: "Join Community",
      description: "Welcome to University of Wah academic community",
      icon: FaUsers,
      link: "/admissions/contact"
    }
  ];

  return (
    <InnerPageLayout section="admissions">
      {/* Header Section */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=1200&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-orange-300/80"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <FaGraduationCap className="text-4xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join a vibrant community of learners and scholars at University of Wah
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Overview Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-theme-blue mb-6">Welcome to University of Wah</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              University of Wah welcomes applications from qualified students who seek to be part of our academic excellence. 
              Our admission process is designed to identify students who will thrive in our challenging and supportive academic environment.
            </p>
            <p className="text-gray-600 mb-6">
              We offer a comprehensive range of undergraduate and graduate programs in Engineering, Computer Science, 
              Management Sciences, and Basic Sciences. Our faculty consists of highly qualified professionals and researchers 
              committed to providing quality education and fostering innovation.
            </p>
          </div>
        </div>

        {/* Admission Process Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-theme-blue mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-theme-blue to-theme-orange p-4 rounded-full mb-4">
                      <StepIcon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-theme-blue mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{step.description}</p>
                    <Link 
                      href={step.link}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-orange text-white text-xs font-bold shadow hover:bg-theme-blue transition-all duration-300"
                    >
                      Learn More <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-theme-blue to-blue-700 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Important Dates</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaCalendarAlt className="text-theme-orange" />
                <div>
                  <strong>Fall 2025:</strong> Applications open March 1, 2025
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaCalendarAlt className="text-theme-orange" />
                <div>
                  <strong>Spring 2026:</strong> Applications open October 1, 2025
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaCalendarAlt className="text-theme-orange" />
                <div>
                  <strong>Priority Deadline:</strong> 30 days before semester start
                </div>
              </li>
            </ul>
            <Link 
              href="/admissions/deadlines"
              className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-full bg-theme-orange text-white font-bold hover:bg-white hover:text-theme-blue transition-all duration-300"
            >
              View All Dates <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="bg-gradient-to-r from-theme-orange to-red-600 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                href="/admissions/application"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <FaFileAlt />
                <span className="font-semibold">Apply Online</span>
                <FaArrowRight className="ml-auto text-xs" />
              </Link>
              <Link 
                href="/admissions/scholarships"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <FaGraduationCap />
                <span className="font-semibold">Scholarships</span>
                <FaArrowRight className="ml-auto text-xs" />
              </Link>
              <Link 
                href="/admissions/contact"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <FaUsers />
                <span className="font-semibold">Contact Admissions</span>
                <FaArrowRight className="ml-auto text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}