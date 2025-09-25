"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaGraduationCap, 
  FaFileAlt, 
  FaCalendarAlt, 
  FaUsers, 
  FaInfoCircle,
  FaFlask,
  FaNewspaper,
  FaEnvelope,
  FaChevronRight,
  FaBook,
  FaLaptop,
  FaFutbol,
  FaBed,
  FaBus,
  FaUtensils,
  FaUserTie,
  FaAward,
  FaBuilding
} from "react-icons/fa";

// Navigation structure with icons
const navigationData = {
  admissions: {
    title: "Admissions",
    icon: FaGraduationCap,
    links: [
      { href: "/admissions", label: "Overview", icon: FaInfoCircle },
      { href: "/admissions/requirements", label: "Requirements", icon: FaFileAlt },
      { href: "/admissions/application", label: "Apply Online", icon: FaCalendarAlt },
      { href: "/admissions/deadlines", label: "Important Dates", icon: FaCalendarAlt },
      { href: "/admissions/scholarships", label: "Scholarships", icon: FaAward },
      { href: "/admissions/contact", label: "Contact", icon: FaEnvelope }
    ]
  },
  academics: {
    title: "Academics",
    icon: FaBook,
    links: [
      { href: "/academics", label: "Programs", icon: FaBook },
      { href: "/academics/undergraduate", label: "Undergraduate", icon: FaGraduationCap },
      { href: "/academics/graduate", label: "Graduate", icon: FaUserTie },
      { href: "/academics/departments", label: "Departments", icon: FaBuilding },
      { href: "/academics/faculty", label: "Faculty", icon: FaUsers },
      { href: "/academics/calendar", label: "Academic Calendar", icon: FaCalendarAlt }
    ]
  },
  research: {
    title: "Research",
    icon: FaFlask,
    links: [
      { href: "/research", label: "Research Overview", icon: FaInfoCircle },
      { href: "/research/centers", label: "Research Centers", icon: FaBuilding },
      { href: "/research/publications", label: "Publications", icon: FaFileAlt },
      { href: "/research/opportunities", label: "Opportunities", icon: FaUsers },
      { href: "/research/funding", label: "Funding", icon: FaAward }
    ]
  },
  about: {
    title: "About",
    icon: FaInfoCircle,
    links: [
      { href: "/about", label: "University Overview", icon: FaInfoCircle },
      { href: "/about/history", label: "History", icon: FaBook },
      { href: "/about/mission", label: "Mission & Vision", icon: FaAward },
      { href: "/about/leadership", label: "Leadership", icon: FaUserTie },
      { href: "/about/campus", label: "Campus Life", icon: FaBuilding },
      { href: "/about/facilities", label: "Facilities", icon: FaLaptop }
    ]
  },
  news: {
    title: "News & Events",
    icon: FaNewspaper,
    links: [
      { href: "/news", label: "Latest News", icon: FaNewspaper },
      { href: "/news/events", label: "Upcoming Events", icon: FaCalendarAlt },
      { href: "/news/announcements", label: "Announcements", icon: FaInfoCircle },
      { href: "/news/press", label: "Press Releases", icon: FaFileAlt }
    ]
  },
  facilities: {
    title: "Facilities",
    icon: FaBuilding,
    links: [
      { href: "/facilities", label: "Overview", icon: FaInfoCircle },
      { href: "/facilities/labs", label: "Computer Labs", icon: FaLaptop },
      { href: "/facilities/library", label: "Library", icon: FaBook },
      { href: "/facilities/sports", label: "Sports Complex", icon: FaFutbol },
      { href: "/facilities/hostel", label: "Hostels", icon: FaBed },
      { href: "/facilities/transport", label: "Transportation", icon: FaBus },
      { href: "/facilities/cafeteria", label: "Cafeteria", icon: FaUtensils }
    ]
  }
};

interface SidebarProps {
  section?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ section }) => {
  const pathname = usePathname();
  
  // Determine section from pathname if not provided
  const currentSection = section || pathname.split("/")[1];
  const sectionData = navigationData[currentSection as keyof typeof navigationData];
  
  if (!sectionData) return null;
  
  const SectionIcon = sectionData.icon;

  return (
    <div className="w-full lg:w-80 bg-theme-blue rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-theme-blue to-theme-orange p-5 text-white">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <SectionIcon className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{sectionData.title}</h3>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="p-3 mb-4">
        <nav className="space-y-1">
          {sectionData.links.map((link, index) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md
                  ${isActive 
                    ? 'bg-theme-orange text-white shadow-lg' 
                    : 'bg-white hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 text-gray-700 hover:text-theme-blue border border-gray-100 hover:border-theme-orange/30'
                  }
                `}
              >
                <div className={`
                  p-2 rounded-lg transition-colors duration-300
                  ${isActive 
                    ? 'bg-white/20' 
                    : 'bg-theme-orange/10 group-hover:bg-theme-orange/20'
                  }
                `}>
                  <LinkIcon className={`
                    text-sm
                    ${isActive ? 'text-white' : 'text-theme-orange'}
                  `} />
                </div>
                
                <div className="flex-1">
                  <span className="font-semibold text-sm">{link.label}</span>
                </div>
                
                <FaChevronRight className={`
                  text-xs transition-transform duration-300 
                  ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-theme-orange group-hover:translate-x-1'}
                `} />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="px-3 pb-3">

          <Link
            href="/contact"
            className="mt-3 w-full inline-flex items-center justify-center text-white text-xs font-bold  transition-all duration-300 transform hover:scale-105"
          >
            <FaEnvelope className="text-xs mr-1" /> info@uow.edu.pk
          </Link>
      </div>
    </div>
  );
};

export default Sidebar;