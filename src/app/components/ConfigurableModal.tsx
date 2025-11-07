"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes, FaArrowRight, FaBullhorn, FaGraduationCap, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { ModalConfig } from "../lib/modalConfig";

interface ConfigurableModalProps {
  config: ModalConfig;
  isOpen: boolean;
  onClose: () => void;
  onDismissPermanently: () => void;
}

const ConfigurableModal: React.FC<ConfigurableModalProps> = ({ config, isOpen, onClose, onDismissPermanently }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(config.autoCloseSeconds || 10);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 100);
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

  // Auto-close countdown
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTemporaryClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused]);

  const handleTemporaryClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const handlePermanentClose = () => {
    setIsVisible(false);
    setTimeout(() => onDismissPermanently(), 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleTemporaryClose();
    }
  };

  if (!isOpen) return null;

  // Get icon based on modal type
  const getIcon = () => {
    switch (config.type) {
      case 'admissions':
        return <FaBullhorn className="text-sm" />;
      case 'convocation':
        return <FaGraduationCap className="text-sm" />;
      case 'event':
        return <FaCalendarAlt className="text-sm" />;
      default:
        return <FaInfoCircle className="text-sm" />;
    }
  };

  // Get large icon for left side
  const getLargeIcon = () => {
    switch (config.type) {
      case 'admissions':
        return <FaBullhorn className="text-5xl" />;
      case 'convocation':
        return <FaGraduationCap className="text-5xl" />;
      case 'event':
        return <FaCalendarAlt className="text-5xl" />;
      default:
        return <FaInfoCircle className="text-5xl" />;
    }
  };

  // Get color scheme based on modal type
  const getColorScheme = () => {
    switch (config.type) {
      case 'admissions':
        return {
          gradient: 'from-blue-600 to-blue-800',
          button: 'bg-theme-orange hover:bg-orange-700',
          accent: 'text-blue-600'
        };
      case 'convocation':
        return {
          gradient: 'from-purple-600 to-purple-900',
          button: 'bg-yellow-500 hover:bg-yellow-600',
          accent: 'text-purple-600'
        };
      case 'event':
        return {
          gradient: 'from-orange-600 to-red-700',
          button: 'bg-theme-blue hover:bg-blue-700',
          accent: 'text-orange-600'
        };
      default:
        return {
          gradient: 'from-gray-600 to-gray-800',
          button: 'bg-theme-blue hover:bg-blue-700',
          accent: 'text-gray-600'
        };
    }
  };

  const colors = getColorScheme();

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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Auto-close Timer */}
        <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <span className="w-2 h-2 bg-theme-orange rounded-full animate-pulse"></span>
          Auto-close in {timeLeft}s
          {isPaused && <span className="text-theme-orange ml-1">(Paused)</span>}
        </div>

        {/* Close Button */}
        <button
          onClick={handleTemporaryClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Image/Gradient Section */}
          <div className={`relative md:w-1/2 min-h-[250px] md:min-h-[500px] bg-gradient-to-br ${colors.gradient} flex items-center justify-center overflow-hidden`}>
            {/* Background Image (if provided) */}
            {config.backgroundImage && (
              <>
                <div className="absolute inset-0">
                  <Image
                    src={config.backgroundImage}
                    alt={config.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
              </>
            )}
            
            {/* Icon and Title Overlay */}
            <div className="relative z-10 text-center text-white px-6">
              <div className="mb-4 flex justify-center drop-shadow-2xl">
                {getLargeIcon()}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-2xl">
                {config.title}
              </h2>
              {config.subtitle && (
                <p className="text-xl md:text-2xl font-semibold drop-shadow-2xl">
                  {config.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-gray-50 to-white">
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {/* Modal Title */}
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.gradient} bg-gradient-to-r text-white text-sm font-bold shadow-md`}>
                  {getIcon()}
                  <span className="uppercase tracking-wider">{config.type}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {config.title}
                </h3>
                {config.subtitle && (
                  <p className={`text-xl md:text-2xl font-semibold ${colors.accent}`}>
                    {config.subtitle}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {config.description}
                </p>
              </div>

              {/* Call to Action */}
              {config.link && (
                <div className="space-y-3 pt-4">
                  <Link
                    href={config.link.url}
                    onClick={handleTemporaryClose}
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 ${colors.button} text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full`}
                  >
                    {config.link.text}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button
                    onClick={handlePermanentClose}
                    className="w-full text-center text-sm text-gray-500 hover:text-red-600 font-medium transition-colors py-2"
                  >
                    Don't show this again
                  </button>
                </div>
              )}
            </div>

            {/* Footer Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-theme-orange rounded-full animate-pulse"></div>
                <span className="italic">Hover to pause • Auto-closes in {timeLeft}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurableModal;
