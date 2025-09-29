"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes, FaArrowRight, FaBullhorn } from "react-icons/fa";
import Link from "next/link";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds countdown
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay showing modal slightly for better animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Auto-close countdown effect
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleClose();
          return 0;
        }
        return prev - 1;
      });
      
      
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300); // Wait for animation to complete
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative w-[95%] max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        {/* Auto-close Timer Display */}
        <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <span className="w-2 h-2 bg-theme-orange rounded-full animate-pulse"></span>
          Auto-close in {timeLeft}s
          {isPaused && <span className="text-theme-orange ml-1">(Paused)</span>}
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-theme-orange"
          aria-label="Close modal"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-64 lg:h-auto relative bg-gradient-to-br from-theme-blue to-theme-orange">
            <div className="absolute inset-0 bg-black/20"></div>
            <Image
              src="/theme/images/uwView.jpg" // You can change this to any announcement image
              alt="University of Wah Welcome"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Content on Image */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="text-white">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">Welcome to UW!</h2>
                <p className="text-sm lg:text-base opacity-90">Excellence in Education Since 2009</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Announcement Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold">
                  <FaBullhorn className="text-xs" />
                  ANNOUNCEMENT
                </div>
                <div className="bg-theme-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </div>
              </div>

              {/* Main Announcement */}
              <h3 className="text-xl lg:text-2xl font-bold text-theme-blue mb-4">
                🎓 Fall 2025 Admissions Now Open!
              </h3>
              
              <div className="space-y-4 text-gray-700 text-sm lg:text-base">
                <p>
                  Join the University of Wah community and embark on your journey to academic excellence. We offer world-class programs in:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-theme-orange rounded-full"></div>
                    Engineering & Technology
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                    Computer Sciences & AI
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-theme-orange rounded-full"></div>
                    Management Sciences
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                    Basic Sciences & Research
                  </li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-theme-blue p-4 rounded">
                  <p className="text-theme-blue font-semibold text-sm">
                    📅 Application Deadline: December 15, 2024
                  </p>
                  <p className="text-gray-600 text-xs mt-1">
                    Early applications get priority consideration for scholarships
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-200">
              <Link
                href="/admissions"
                onClick={handleClose}
                className="flex-1 bg-theme-blue hover:bg-theme-orange text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-theme-orange"
              >
                Apply Now
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={handleClose}
                className="flex-1 sm:flex-initial bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Maybe Later
              </button>
            </div>

            {/* Don't show again option */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-theme-blue focus:ring-theme-orange"
                  onChange={(e) => {
                    if (e.target.checked) {
                      localStorage.setItem('uw-welcome-modal-dismissed', 'true');
                    }
                  }}
                />
                Don't show this again
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;