import React from "react";
import { FaUserGraduate, FaFlask, FaUniversity, FaArrowRight } from "react-icons/fa";

const OverlayCards = () => {
  const cards = [
    {
      icon: FaUserGraduate,
      title: "Academic Excellence",
      description: "World-class programs designed to prepare you for success in your chosen field.",
      link: "/academics",
      bgColor: "bg-theme-blue",
      buttonBg: "bg-theme-orange",
      buttonHover: "hover:bg-theme-blue",
      ringColor: "focus:bg-theme-blue"
    },
    {
      icon: FaFlask,
      title: "Research Innovation",
      description: "Cutting-edge research opportunities to contribute to global advancements.",
      link: "/research",
      bgColor: "bg-theme-orange",
      buttonBg: "bg-red-500",
      buttonHover: "hover:bg-orange-500",
      ringColor: "focus:ring-red-600"
    },
    {
      icon: FaUniversity,
      title: "Campus Life",
      description: "Vibrant community with diverse activities and modern facilities.",
      link: "/about",
      bgColor: "bg-red-600",
      buttonBg: "bg-theme-blue",
      buttonHover: "hover:bg-orange-500",
      ringColor: "focus:ring-blue-900"
    }
  ];

  return (
    <div className="relative -mt-2 md:-mt-5 flex flex-col md:flex-row justify-center px-2 md:px-4 z-20 gap-0">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const buttonText = index === 0 ? "Learn More" : index === 1 ? "Explore" : "Discover";
        
        return (
          <div
            key={index}
            className={`${card.bgColor} text-white px-3 sm:px-4 md:px-6 py-4 md:pt-10 md:pb-3 shadow-lg max-w-md w-full flex flex-col
              relative overflow-hidden group
              transform transition-all duration-500 ease-out
              hover:scale-105 hover:shadow-2xl hover:z-10`}
          >
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:left-full transition-all duration-1000 ease-in-out"></div>
            </div>

            {/* Radial Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center flex-grow">
              {/* Icon with Bounce and Rotate */}
              <span className="mb-3 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg
                transform transition-all duration-500
                group-hover:scale-110  group-hover:drop-shadow-2xl">
                <Icon />
              </span>

              {/* Title with Scale */}
              <h3 className="text-xs sm:text-sm md:text-xl font-bold mb-2
                transition-all duration-300
                group-hover:scale-105 group-hover:tracking-wide">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-center mb-3 flex-grow
                transition-all duration-300
                group-hover:text-white/90">
                {card.description}
              </p>
            </div>

            {/* Button Container */}
            <div className="relative z-10 flex justify-end">
              <button
                className={`inline-flex items-center gap-2 px-5 py-1.5 rounded-full ${card.buttonBg} text-white text-xs font-bold shadow
                  transition-all duration-300 ease-out
                  ${card.buttonHover} hover:gap-3 hover:px-6 hover:shadow-lg
                  focus:outline-none focus:ring-2 ${card.ringColor} focus:ring-offset-2
                  relative overflow-hidden
                  group/btn`}
              >
                {/* Button Background Slide Effect */}
                <span className={`absolute inset-0 ${card.buttonHover.replace('hover:', '')} transform scale-x-0 origin-left transition-transform duration-300 group-hover/btn:scale-x-100`}></span>
                
                {/* Button Text */}
                <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5">
                  {buttonText}
                </span>
                
                {/* Arrow with Movement */}
                <FaArrowRight className="relative z-10 text-xs
                  transition-all duration-300
                  group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
              </button>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/0 rounded-tr-full
              transition-all duration-500
              group-hover:bg-white/10 group-hover:w-32 group-hover:h-32"></div>

            {/* Top Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/0 rounded-bl-full
              transition-all duration-500 origin-top-right
              group-hover:bg-white/10 group-hover:w-24 group-hover:h-24"></div>
          </div>
        );
      })}
    </div>
  );
};

export default OverlayCards;