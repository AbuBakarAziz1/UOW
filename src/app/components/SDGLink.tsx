"use client";
import React from "react";
import Link from "next/link";

// SDG Colors mapping (official UN SDG colors)
const sdgColors: { [key: string]: { bg: string; text: string; border: string } } = {
  "goal1": { bg: "bg-red-600", text: "text-white", border: "border-red-600" },
  "goal2": { bg: "bg-yellow-500", text: "text-black", border: "border-yellow-500" },
  "goal3": { bg: "bg-green-600", text: "text-white", border: "border-green-600" },
  "goal4": { bg: "bg-red-700", text: "text-white", border: "border-red-700" },
  "goal5": { bg: "bg-orange-500", text: "text-white", border: "border-orange-500" },
  "goal6": { bg: "bg-blue-400", text: "text-white", border: "border-blue-400" },
  "goal7": { bg: "bg-yellow-600", text: "text-white", border: "border-yellow-600" },
  "goal8": { bg: "bg-red-800", text: "text-white", border: "border-red-800" },
  "goal9": { bg: "bg-orange-600", text: "text-white", border: "border-orange-600" },
  "goal10": { bg: "bg-pink-500", text: "text-white", border: "border-pink-500" },
  "goal11": { bg: "bg-orange-400", text: "text-white", border: "border-orange-400" },
  "goal12": { bg: "bg-yellow-700", text: "text-white", border: "border-yellow-700" },
  "goal13": { bg: "bg-green-700", text: "text-white", border: "border-green-700" },
  "goal14": { bg: "bg-blue-600", text: "text-white", border: "border-blue-600" },
  "goal15": { bg: "bg-green-800", text: "text-white", border: "border-green-800" },
  "goal16": { bg: "bg-blue-800", text: "text-white", border: "border-blue-800" },
  "goal17": { bg: "bg-blue-900", text: "text-white", border: "border-blue-900" },

};

interface SDGLinkProps {
  title: string;
  href: string;
  showBadge?: boolean;
}

const SDGLink: React.FC<SDGLinkProps> = ({ title, href, showBadge = true }) => {
  // Extract goal number from title
  const goalMatch = title.match(/Goal (\d+):/);
  const goalNumber = goalMatch ? goalMatch[1] : null;
  const goalKey = goalNumber ? `goal${goalNumber}` : null;
  
  const colors = goalKey ? sdgColors[goalKey] : null;
  
  return (
    <Link
      href={href}
      className="flex items-center group hover:text-theme-orange transition-all duration-200 py-2 text-sm"
    >
      {showBadge && colors && goalNumber ? (
        <div className={`
          flex items-center justify-center w-12 h-6 rounded-md mr-3 text-xs font-bold transition-all duration-200
          ${colors.bg} ${colors.text} ${colors.border} border-2
          group-hover:scale-110 group-hover:shadow-lg
        `}>
          SDG-{goalNumber}
        </div>
      ) : (
        <div className="w-2 h-2 bg-theme-blue rounded-full mr-3 group-hover:bg-theme-orange transition-colors duration-200"></div>
      )}
      <span className="group-hover:translate-x-1 transition-transform duration-200 leading-relaxed">
        {title}
      </span>
    </Link>
  );
};

export default SDGLink;