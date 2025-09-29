"use client";
import Link from "next/link";
import { FaHome, FaSearch, FaUniversity, FaBook, FaGraduationCap } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    setMounted(true);
    
    // Generate floating academic elements
    const elements = Array.from({length: 15}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setFloatingElements(elements);
  }, []);

  const academicIcons = [FaBook, FaGraduationCap, FaUniversity];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 relative overflow-hidden flex items-center justify-center">
      {/* Animated floating academic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => {
          const Icon = academicIcons[element.id % academicIcons.length];
          return (
            <div
              key={element.id}
              className="absolute opacity-10 text-theme-blue animate-float"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                animationDelay: `${element.delay}s`,
                fontSize: `${20 + (element.id % 3) * 10}px`
              }}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-theme-blue via-theme-orange to-red-600 animate-pulse-slow">
            4<span className="inline-block animate-bounce-slow bg-clip-text bg-gradient-to-r from-blue-300 to-red-300">0</span>4
          </h1>
        </div>

        {/* University building animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <FaUniversity className="text-6xl md:text-8xl text-theme-blue animate-sway" />
            {/* Animated dots around the building */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-theme-orange rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-theme-blue rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-theme-orange rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>

        {/* Error message with typewriter effect */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-blue mb-4 animate-fade-in-up">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Looks like this page took a study break and wandered off campus!
          </p>
          <p className="text-base md:text-lg text-gray-600 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Don't worry, even the best students sometimes get lost in the hallways.
          </p>
        </div>

        {/* Animated action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <Link 
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-theme-blue text-white rounded-full font-bold text-lg shadow-lg hover:bg-theme-orange transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <FaHome className="group-hover:animate-bounce" />
            Return to Campus
          </Link>
          
          <Link 
            href="/search"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-theme-blue border-2 border-theme-blue rounded-full font-bold text-lg shadow-lg hover:bg-theme-blue hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <FaSearch className="group-hover:animate-spin" />
            Search Site
          </Link>
        </div>

        {/* University branding */}
        <div className="mt-12 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <p className="text-sm text-gray-500 mb-2">Lost but still part of the</p>
          <h3 className="text-xl font-bold text-theme-blue">
            University of <span className="text-red-600">Wah</span> Family
          </h3>
        </div>

        {/* Popular links */}
        <div className="mt-8 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
          <p className="text-sm text-gray-600 mb-4">Maybe you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Admissions", href: "/admissions" },
              { name: "Academics", href: "/academics" },
              { name: "Research", href: "/research" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" }
            ].map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-theme-orange hover:text-white transition-all duration-300 transform hover:scale-105"
                style={{animationDelay: `${1.8 + index * 0.1}s`}}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
      
      {/* Moving dots */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-theme-orange rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-theme-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 right-10 w-3 h-3 bg-theme-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
}