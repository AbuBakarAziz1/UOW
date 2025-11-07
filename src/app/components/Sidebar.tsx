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
import { leaders, deans } from "@/lib/leadershipData";
import { getDepartmentById, getAllDepartments } from "@/lib/departmentsData";
import { getProgramsByDepartment } from "@/lib/programsData";

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
      // { href: "/about/history", label: "History", icon: FaBook },
      { href: "/about/quality-policy", label: "Quality Policy", icon: FaAward },
      { href: "/about/mission-vision", label: "Mission & Vision", icon: FaAward },
      { href: "/about/leadership", label: "Leadership", icon: FaUserTie },
      { href: "/about/campus", label: "Campus Life", icon: FaBuilding },
      { href: "/about/facilities", label: "Facilities", icon: FaLaptop }
    ]
  },
  news: {
    title: "News & Events",
    icon: FaNewspaper,
    links: [
      { href: "/news", label: "News & Announcements", icon: FaNewspaper },
      { href: "/events", label: "Events", icon: FaCalendarAlt }
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
  
  // Check if we're on a leadership profile page
  const isLeadershipProfile = pathname.startsWith("/about/leadership/") && pathname !== "/about/leadership";
  
  // Check if we're on a department page or program page
  // Program page: /departments/[id]/[programId]
  // Department page: /departments/[id]
  const pathParts = pathname.split('/');
  const isDepartmentPage = pathname.startsWith("/departments/") && pathParts.length === 3 && pathname !== "/departments";
  const isProgramPage = pathname.startsWith("/departments/") && pathParts.length === 4;
  const isDepartmentsListPage = pathname === "/departments";
  
  // Extract IDs from path
  const departmentId = isDepartmentPage || isProgramPage ? pathParts[2] : null;
  const department = departmentId ? getDepartmentById(departmentId) : null;
  
  // Determine section from pathname if not provided
  const currentSection = section || pathname.split("/")[1];
  const sectionData = navigationData[currentSection as keyof typeof navigationData];
  
  if (!sectionData) return null;
  
  const SectionIcon = sectionData.icon;

  // If on department page, show department sidebar
  if ((isDepartmentPage || isProgramPage) && department) {
    const detailedPrograms = getProgramsByDepartment(departmentId || '');
    const currentProgramId = isProgramPage ? pathParts[3] : null;
    
    return (
      <div className="w-full lg:w-80 bg-theme-blue rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-theme-blue to-theme-orange p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <FaBuilding className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{department.name}</h3>
              <p className="text-xs text-white/80 mt-1">{department.faculty}</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-3 mb-4">
          {/* Department Overview */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider px-4 py-2">
              Department
            </h4>
            <nav className="space-y-1">
              <Link
                href={`/departments/${department.id}`}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                  !isProgramPage 
                    ? 'bg-theme-orange text-white shadow-lg' 
                    : 'bg-white hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 text-gray-700 hover:text-theme-blue border border-gray-100 hover:border-theme-orange/30'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors duration-300 ${
                  !isProgramPage ? 'bg-white/20' : 'bg-theme-orange/10 group-hover:bg-theme-orange/20'
                }`}>
                  <FaInfoCircle className={`text-sm ${!isProgramPage ? 'text-white' : 'text-theme-orange'}`} />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-xs leading-tight">Overview</span>
                </div>
                <FaChevronRight className={`text-xs ${!isProgramPage ? 'text-white' : 'text-gray-400 group-hover:text-theme-orange group-hover:translate-x-1'} transition-transform duration-300`} />
              </Link>
            </nav>
          </div>

          {/* Programs Section */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider px-4 py-2">
              Programs Offered
            </h4>
            <nav className="space-y-1">
              {department.programs.map((program, index) => {
                const programDetail = detailedPrograms.find(p => p.name === program.name);
                const isActive = isProgramPage && programDetail && currentProgramId === programDetail.id;
                
                return (
                  <div key={index}>
                    {programDetail ? (
                      <Link
                        href={`/departments/${department.id}/${programDetail.id}`}
                        className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                          isActive
                            ? 'bg-theme-orange text-white shadow-lg'
                            : 'bg-white hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 text-gray-700 hover:text-theme-blue border border-gray-100 hover:border-theme-orange/30'
                        }`}
                      >
                        <div className={`p-2 rounded-lg transition-colors duration-300 ${
                          isActive ? 'bg-white/20' : 'bg-theme-orange/10 group-hover:bg-theme-orange/20'
                        }`}>
                          <FaGraduationCap className={`text-sm ${isActive ? 'text-white' : 'text-theme-orange'}`} />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-xs leading-tight block">{program.name}</span>
                          <span className="text-[10px] opacity-70">{program.duration}</span>
                        </div>
                        <FaChevronRight className={`text-xs transition-transform duration-300 ${
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-theme-orange group-hover:translate-x-1'
                        }`} />
                      </Link>
                    ) : (
                      <div className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md bg-white hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 text-gray-700 hover:text-theme-blue border border-gray-100 hover:border-theme-orange/30">
                        <div className="p-2 rounded-lg transition-colors duration-300 bg-theme-orange/10 group-hover:bg-theme-orange/20">
                          <FaGraduationCap className="text-sm text-theme-orange" />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-xs leading-tight block">{program.name}</span>
                          <span className="text-[10px] text-gray-500">{program.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Faculty Profile Menu */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider px-4 py-2">
              Faculty Profile
            </h4>
            <nav className="space-y-1">
              <Link
                href={`/departments/${department.id}#faculty`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md bg-white hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 text-gray-700 hover:text-theme-blue border border-gray-100 hover:border-theme-orange/30"
              >
                <div className="p-2 rounded-lg transition-colors duration-300 bg-theme-orange/10 group-hover:bg-theme-orange/20">
                  <FaUsers className="text-sm text-theme-orange" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-xs leading-tight">Faculty Members</span>
                </div>
                <FaChevronRight className="text-xs text-gray-400 group-hover:text-theme-orange group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </nav>
          </div>

          {/* Faculty Leadership - Link to Dean */}
          <div>
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider px-4 py-2">
              Faculty Leadership
            </h4>
            <nav className="space-y-1">
              {(() => {
                // Find the corresponding dean based on faculty
                let deanId = '';
                if (department.faculty.includes('Basic Sciences')) deanId = 'dean-basic-sciences';
                else if (department.faculty.includes('Computer Science')) deanId = 'dean-computer-science';
                else if (department.faculty.includes('Engineering')) deanId = 'dean-engineering';
                else if (department.faculty.includes('Management')) deanId = 'dean-management';
                else if (department.faculty.includes('Social Sciences')) deanId = 'dean-humanities';
                
                const dean = deans.find(d => d.id === deanId);
                
                if (dean) {
                  return (
                    <Link
                      href={`/about/leadership/${dean.id}`}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md bg-white hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 text-gray-700 hover:text-theme-blue border border-gray-100 hover:border-theme-orange/30"
                    >
                      <div className="p-2 rounded-lg transition-colors duration-300 bg-theme-orange/10 group-hover:bg-theme-orange/20">
                        <FaUserTie className="text-sm text-theme-orange" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-xs leading-tight block">{dean.title.replace('Dean, Faculty of ', 'Dean')}</span>
                        <span className="text-[10px] text-gray-500">{dean.name}</span>
                      </div>
                      <FaChevronRight className="text-xs text-gray-400 group-hover:text-theme-orange group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  );
                }
                return null;
              })()}
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 pb-3">
          <Link
            href="/admissions/apply"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-theme-orange text-white text-xs font-bold rounded-lg hover:bg-white hover:text-theme-blue transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>
    );
  }

  // If on departments list page, show all departments sidebar
  if (isDepartmentsListPage) {
    const allDepartments = getAllDepartments();
    const facultyGroups = {
      'Faculty of Basic Sciences': allDepartments.filter(d => d.faculty === 'Faculty of Basic Sciences'),
      'Faculty of Computer Science': allDepartments.filter(d => d.faculty === 'Faculty of Computer Science'),
      'Faculty of Management Sciences': allDepartments.filter(d => d.faculty === 'Faculty of Management Sciences'),
      'Faculty of Social Sciences & Humanities': allDepartments.filter(d => d.faculty === 'Faculty of Social Sciences & Humanities'),
      'Faculty of Engineering': allDepartments.filter(d => d.faculty === 'Faculty of Engineering'),
    };

    return (
      <div className="w-full lg:w-80 bg-theme-blue rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-theme-blue to-theme-orange p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <FaBuilding className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">All Departments</h3>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-3 mb-4 max-h-[600px] overflow-y-auto">
          {Object.entries(facultyGroups).map(([faculty, depts]) => {
            if (depts.length === 0) return null;
            return (
              <div key={faculty} className="mb-6">
                <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider px-4 py-2">
                  {faculty.replace('Faculty of ', '')}
                </h4>
                <nav className="space-y-1">
                  {depts.map((dept) => (
                    <Link
                      key={dept.id}
                      href={`/departments/${dept.id}`}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md bg-white hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 text-gray-700 hover:text-theme-blue border border-gray-100 hover:border-theme-orange/30"
                    >
                      <div className="p-2 rounded-lg transition-colors duration-300 bg-theme-orange/10 group-hover:bg-theme-orange/20">
                        <FaBuilding className="text-sm text-theme-orange" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-xs leading-tight">{dept.name.replace('Department of ', '')}</span>
                      </div>
                      <FaChevronRight className="text-xs text-gray-400 group-hover:text-theme-orange group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  ))}
                </nav>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-3 pb-3">
          <Link
            href="/admissions/apply"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-theme-orange text-white text-xs font-bold rounded-lg hover:bg-white hover:text-theme-blue transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>
    );
  }

  // If on leadership profile page, show leadership sidebar
  if (isLeadershipProfile) {
    return (
      <div className="w-full lg:w-80 bg-theme-blue rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-theme-blue to-theme-orange p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <FaUserTie className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Leadership</h3>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-3 mb-4">
          {/* Administration Section */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider px-4 py-2">
              Administration
            </h4>
            <nav className="space-y-1">
              {leaders.map((leader) => {
                const isActive = pathname === `/about/leadership/${leader.id}`;
                
                return (
                  <Link
                    key={leader.id}
                    href={`/about/leadership/${leader.id}`}
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
                      <FaUserTie className={`
                        text-sm
                        ${isActive ? 'text-white' : 'text-theme-orange'}
                      `} />
                    </div>
                    
                    <div className="flex-1">
                      <span className="font-semibold text-xs leading-tight">{leader.title}</span>
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

          {/* Deans Section */}
          <div>
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider px-4 py-2">
              Deans of Faculties
            </h4>
            <nav className="space-y-1">
              {deans.map((dean) => {
                const isActive = pathname === `/about/leadership/${dean.id}`;
                
                return (
                  <Link
                    key={dean.id}
                    href={`/about/leadership/${dean.id}`}
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
                      <FaUserTie className={`
                        text-sm
                        ${isActive ? 'text-white' : 'text-theme-orange'}
                      `} />
                    </div>
                    
                    <div className="flex-1">
                      <span className="font-semibold text-xs leading-tight">{dean.title.replace('Dean, Faculty of ', '')}</span>
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
        </div>

        {/* Footer */}
        <div className="px-3 pb-3">
          <Link
            href="/about/leadership"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-theme-orange text-white text-xs font-bold rounded-lg hover:bg-white hover:text-theme-blue transition-all duration-300 transform hover:scale-105"
          >
            View All Leaders
          </Link>
        </div>
      </div>
    );
  }

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
          {sectionData.links.map((link) => {
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