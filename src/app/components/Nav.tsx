"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiChevronRight, FiFileText } from "react-icons/fi";
import SDGLink from "./SDGLink";

interface SubMenuItem {
  title: string;
  href: string;
}

interface DropdownItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

interface MegaColumn {
  title: string;
  items: SubMenuItem[];
}

interface MenuItem {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
  mega?: boolean;
  columns?: MegaColumn[];
}

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About UW",
    href: "#",
    dropdown: [
      // {
      //   title: "Overview",
      //   href: "/about",
      //   submenu: [
      //     { title: "Mission & Vision", href: "/about/mission" },
      //     { title: "History", href: "/about/history" },
      //     { title: "Leadership", href: "/about/leadership" },
      //   ],
      // },
      {
        title: "UW at a Glance",
        href: "/about",
      },
      {
        title: "Quality Policy",
        href: "/about/quality-policy",
      },
      {
        title: "Vision & Mission",
        href: "/about/mission-vision",
      },
      {
        title: "Organizational Structure",
        href: "/about",
      },
      {
        title: "Administration",
        href: "/about/administration",
        submenu: [
          { title: "Chancellor", href: "/about/leadership/chancellor" },
          { title: "Vice Chancellor", href: "/about/leadership/vice-chancellor" },
          { title: "Chairman Board of Governors", href: "/about/leadership/board" },
        ],
      },
      {
        title: "Deans",
        href: "/about/administration",
        submenu: [
          { title: "Basic Sciences", href: "/about/leadership/dean-basic-sciences" },
          { title: "Computer Science", href: "/about/leadership/dean-computer-science" },
          { title: "Engineering", href: "/about/leadership/dean-engineering" },
          { title: "Management", href: "/about/leadership/dean-management" },
          { title: "Social Sciences & Humanities", href: "/about/leadership/dean-humanities" }
        ],
      },
      {
        title: "Picture Gallery",
        href: "/about/gallery",
      },
      {
        title: "Video Gallery",
        href: "/about/gallery",
      },
      {
        title: "The UW Act 2009",
        href: "/about",
      },
      {
        title: "How to Reach UW",
        href: "/about",
      },
      {
        title: "Tender Notices",
        href: "/tender-notices",
      },
      
      // {
      //   title: "Campus Life",
      //   href: "/about/campus-life",
      //   submenu: [
      //     { title: "Student Life", href: "/about/student-life" },
      //     { title: "Facilities", href: "/about/facilities" },
      //   ],
      // },
    ],
  },
  {
    title: "Admissions",
    href: "#",
    dropdown: [
      { title: "Undergraduate", href: "/admissions/undergraduate" },
      { title: "Graduate", href: "/admissions/graduate" },
      { title: "International Students", href: "/admissions/international" },
      { title: "Scholarships", href: "/admissions/scholarships" },
      { title: "How to Apply", href: "/admissions/apply" },
    ],
  },
  {
    title: "Academics",
    href: "#",
    dropdown: [
      {
        title: "Faculty of Basic Sciences", 
        href: "/faculties/basic-sciences", 
        submenu: [
          { title: "Department of Biosciences", href: "/departments/biosciences" },
          { title: "Department of Chemistry", href: "/departments/chemistry" },
          { title: "Department of Mathematics", href: "/departments/mathematics" },
          { title: "Department of Physics", href: "/departments/physics" },
          { title: "Department of Statistics", href: "/departments/statistics" },
        ],
      },
      {
        title: "Faculty of Computer Science", 
        href: "/faculties/computer-science", 
        submenu: [
          { title: "Department of Computer Science", href: "/departments/computer-science" },
          { title: "Department of Artificial Intelligence", href: "/departments/artificial-intelligence" },
        ],
      },
      {
        title: "Faculty of Management Sciences", 
        href: "/faculties/management-sciences", 
        submenu: [
          { title: "Department of Business Administration", href: "/departments/business-administration" },
          { title: "Department of Management Sciences", href: "/departments/management-sciences" },
        ],
      },
      {
        title: "Faculty of Social Sciences & Humanities", 
        href: "/faculties/social-sciences-humanities", 
        submenu: [
          { title: "Department of Education", href: "/departments/education" },
          { title: "Department of English", href: "/departments/english" },
          { title: "Department of Islamic Studies", href: "/departments/islamic-studies" },
          { title: "Department of Psychology", href: "/departments/psychology" },
          { title: "Department of Sociology", href: "/departments/sociology" }
        ],
      },
      {
        title: "Faculty of Engineering", 
        href: "/faculties/engineering", 
        submenu: [
          { title: "Department of Chemical Engineering", href: "/departments/chemical-engineering" },
          { title: "Department of Civil Engineering", href: "/departments/civil-engineering" },
          { title: "Department of Electrical Engineering", href: "/departments/electrical-engineering" },
          { title: "Department of Mechanical Engineering", href: "/departments/mechanical-engineering" },
          { title: "Department of Mechatronics Engineering", href: "/departments/mechatronics" }
        ],
      },
      
    ],
  },
  {
    title: "Research",
    href: "#",
    dropdown: [
      { title: "Research Centers", href: "/research/centers" },
      { title: "Publications", href: "/research/publications" },
      { title: "Projects", href: "/research/projects" },
      { title: "Collaboration", href: "/research/collaboration" },
    ],
  },
  {
    title: "SDGs@ UW",
    href: "#",
    mega: true,
    columns: [
      {
        title: "Goals 1-6: People",
        items: [
          { title: "Goal 1: No Poverty", href: "/sdgs/goal1" },
          { title: "Goal 2: Zero Hunger", href: "/sdgs/goal2" },
          { title: "Goal 3: Good Health and Well-being", href: "/sdgs/goal3" },
          { title: "Goal 4: Quality Education", href: "/sdgs/goal4" },
          { title: "Goal 5: Gender Equality", href: "/sdgs/goal5" },
          { title: "Goal 6: Clean Water and Sanitation", href: "/sdgs/goal6" },
        ],
      },
      {
        title: "Goals 7-12: Prosperity",
        items: [
          { title: "Goal 7: Affordable and Clean Energy", href: "/sdgs/goal7" },
          { title: "Goal 8: Decent Work and Economic Growth", href: "/sdgs/goal8" },
          { title: "Goal 9: Industry, Innovation and Infrastructure", href: "/sdgs/goal9" },
          { title: "Goal 10: Reduced Inequalities", href: "/sdgs/goal10" },
          { title: "Goal 11: Sustainable Cities and Communities", href: "/sdgs/goal11" },
          { title: "Goal 12: Responsible Consumption and Production", href: "/sdgs/goal12" },
        ],
      },
      {
        title: "Goals 13-17: Planet & Partnership",
        items: [
          { title: "Goal 13: Climate Action", href: "/sdgs/goal13" },
          { title: "Goal 14: Life Below Water", href: "/sdgs/goal14" },
          { title: "Goal 15: Life on Land", href: "/sdgs/goal15" },
          { title: "Goal 16: Peace, Justice and Strong Institutions", href: "/sdgs/goal16" },
          { title: "Goal 17: Partnerships for the Goals", href: "/sdgs/goal17" },
          { title: "Annual Reports", href: "/sdgs/reports" },
        ],
      },
    ],
  },
  {
    title: "Student Life",
    href: "#",
    mega: true,
    columns: [
      {
        title: "Campus Facilities",
        items: [
          { title: "Student Housing", href: "/student-life/housing" },
          { title: "Dining Services", href: "/student-life/dining" },
          { title: "Sports Complex", href: "/student-life/sports" },
          { title: "Library Services", href: "/student-life/library" },
          { title: "Medical Center", href: "/student-life/medical" },
        ],
      },
      {
        title: "Activities & Organizations",
        items: [
          { title: "Student Clubs", href: "/student-life/clubs" },
          { title: "Sports Teams", href: "/student-life/teams" },
          { title: "Cultural Events", href: "/student-life/culture" },
          { title: "Leadership Programs", href: "/student-life/leadership" },
          { title: "Volunteer Opportunities", href: "/student-life/volunteer" },
        ],
      },
      {
        title: "Support Services",
        items: [
          { title: "Academic Support", href: "/student-life/academic" },
          { title: "Career Services", href: "/student-life/career" },
          { title: "Counseling Services", href: "/student-life/counseling" },
          { title: "Financial Aid", href: "/student-life/financial" },
          { title: "International Students", href: "/student-life/international" },
        ],
      },
    ],
  },
  {
    title: "News & Events",
    href: "#",
    dropdown: [
      { title: "Latest News", href: "/news/latest" },
      { title: "Upcoming Events", href: "/events/upcoming" },
      { title: "Event Calendar", href: "/events/calendar" },
      { title: "Press Releases", href: "/news/press" },
      { title: "Newsletter", href: "/news/newsletter" },
    ],
  },
  {
    title: "More",
    href: "#",
    mega: true,
    columns: [
      {
        title: "Campus Facilities",
        items: [
          { title: "Student Housing", href: "/student-life/housing" },
          { title: "Dining Services", href: "/student-life/dining" },
          { title: "Sports Complex", href: "/student-life/sports" },
          { title: "Library Services", href: "/student-life/library" },
          { title: "Medical Center", href: "/student-life/medical" },
        ],
      },
      {
        title: "Activities & Organizations",
        items: [
          { title: "Student Clubs", href: "/student-life/clubs" },
          { title: "Sports Teams", href: "/student-life/teams" },
          { title: "Cultural Events", href: "/student-life/culture" },
          { title: "Leadership Programs", href: "/student-life/leadership" },
          { title: "Volunteer Opportunities", href: "/student-life/volunteer" },
        ],
      },
      {
        title: "Support Services",
        items: [
          { title: "Academic Support", href: "/student-life/academic" },
          { title: "Career Services", href: "/student-life/career" },
          { title: "Counseling Services", href: "/student-life/counseling" },
          { title: "Financial Aid", href: "/student-life/financial" },
          { title: "International Students", href: "/student-life/international" },
        ],
      },
    ],
  },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const timeoutRef = useRef<number | null>(null);

  const megaRefs = useRef<Record<string, HTMLDivElement | null>>(
    {} as Record<string, HTMLDivElement | null>
  );

  // stable setter for refs (avoids TS complaining about inline ref)
  const setMegaRef = useCallback(
    (key: string) => (el: HTMLDivElement | null) => {
      megaRefs.current[key] = el;
    },
    []
  );

  const closeDelay = 250;

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, closeDelay);
  };

  // ensure mega menu stays inside viewport — adjust position when active
  useEffect(() => {
    if (!activeDropdown) return;

    const menu = megaRefs.current[activeDropdown];
    if (!menu) return;

    // reset transform to ensure clean calculations
    menu.style.transform = "translateX(0) translateY(0)";

    const rect = menu.getBoundingClientRect();
    let shiftX = 0;
    const margin = 10; 

    // if menu overflows left side, shift it right
    if (rect.left < margin) {
      shiftX = margin - rect.left;
    }

    // apply transform to adjust position
    menu.style.transform = `translateX(${shiftX}px) translateY(0)`;
  }, [activeDropdown]);

  return (
    <nav className="bg-theme-blue text-white shadow-lg sticky top-0 z-50 border-y border-white">
      <div className="container mx-auto px-3 py-1">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/theme/images/uwlogo.png"
              alt="University Of Wah"
              width={240}
              height={80}
              className="w-60 h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-4 ml-auto">
            {menuItems.map((item, i) => (
              <li key={i} className="relative">
                <div
                  className="flex items-center gap-1 px-1 py-1 font-bold cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-theme-orange after:transition-all after:duration-300 hover:after:w-full transition-colors duration-200 hover:text-theme-orange"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.href} className="text-sm whitespace-nowrap">
                    {item.title}
                  </Link>
                  {(item.dropdown || item.mega) && (
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.title ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Regular Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute mt-2 w-72 bg-white text-gray-800 shadow-xl rounded-lg z-50 transform-gpu transition-all duration-300 ease-out origin-top ${
                      activeDropdown === item.title
                        ? "opacity-100 visible translate-y-0 scale-y-100"
                        : "opacity-0 invisible -translate-y-3 scale-y-95"
                    }`}
                    style={{
                      transformOrigin: "top center",
                      right: "0",
                      left: "auto",
                    }}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((sub, j) => (
                      <div key={j} className="relative group/sub">
                        <Link
                          href={sub.href}
                          className="flex justify-between items-center px-5 py-2 border-b-1 border-orange-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-orange-200 hover:text-theme-blue transition-all duration-200 rounded-sm group"
                        >
                          <span className="font-medium">{sub.title}</span>
                          {sub.submenu && (
                            <FiChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          )}
                        </Link>

                        {/* Submenu */}
                        {sub.submenu && (
                          <div className="absolute left-full top-0 ml-1 w-72  bg-white shadow-xl rounded-lg z-60 transform-gpu transition-all duration-300 ease-out origin-top-right opacity-0 invisible scale-95 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:scale-100">
                            {sub.submenu.map((child, k) => (
                              <Link
                                key={k}
                                href={child.href}
                                className="block px-4 py-2 border-b border-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-blue-200 hover:text-theme-blue transition-all duration-200 rounded-md text-sm"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Mega Menu */}
                {item.mega && (
                  <div
                    ref={setMegaRef(item.title)}
                    className={`absolute mt-2 bg-white text-gray-800 shadow-xl rounded-lg py-8 px-8 z-50 transform-gpu transition-all duration-400 ease-out origin-top ${
                      activeDropdown === item.title
                        ? "opacity-100 visible translate-y-0 scale-y-100"
                        : "opacity-0 invisible -translate-y-4 scale-y-95"
                    }`}
                    style={{
                      top: "100%",
                      right: "0",
                      left: "auto",
                      maxWidth: "95vw",
                      width: "max-content",
                      minWidth: "800px",
                    }}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full">
                      {item.columns?.map((col, x) => (
                        <div key={x} className="min-w-0">
                          <h4 className="font-bold text-theme-blue mb-4 text-lg border-b-2 border-theme-orange pb-2 relative">
                            {col.title}
                            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-theme-orange"></div>
                          </h4>
                          <ul className="space-y-3">
                            {col.items.map((m, y) => (
                              <li key={y}>
                                {/* Use SDGLink for SDG goals, regular Link for other items */}
                                {item.title === "SDGs@ UW" && m.title.includes("Goal") ? (
                                  <SDGLink title={m.title} href={m.href} />
                                ) : item.title === "SDGs@ UW" && m.title.includes("Annual Reports") ? (
                                  <Link
                                    href={m.href}
                                    className="flex items-center group hover:text-theme-orange transition-all duration-200 py-2 text-sm"
                                  >
                                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-sky-900 to-orange-400 rounded-lg mr-3 transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                                      <FiFileText className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                      {m.title}
                                    </span>
                                  </Link>
                                ) : (
                                  <Link
                                    href={m.href}
                                    className="flex items-center group hover:text-theme-orange transition-all duration-200 py-2 text-sm"
                                  >
                                    <div className="w-2 h-2 bg-theme-blue rounded-full mr-3 group-hover:bg-theme-orange transition-colors duration-200"></div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                      {m.title}
                                    </span>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors duration-200 "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
                className="transition-all duration-200"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-auto transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-white text-gray-800 rounded-lg shadow-lg py-4">
            {menuItems.map((item, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <Link
                  href={item.href === "#" ? "#" : item.href}
                  className="block px-4 py-3 font-bold hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 hover:text-theme-blue transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 bg-gray-50">
                    {item.dropdown.map((sub, j) => (
                      <div key={j}>
                        <Link
                          href={sub.href === "#" ? "#" : sub.href}
                          className="block px-4 py-2 hover:text-theme-blue transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                        {sub.submenu && (
                          <div className="pl-6">
                            {sub.submenu.map((child, k) => (
                              <Link
                                key={k}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-theme-orange transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {item.mega && (
                  <div className="pl-6 bg-gray-50">
                    {item.columns?.map((col, x) => (
                      <div key={x} className="mb-4">
                        <h4 className="font-bold text-theme-blue mb-2 text-sm border-b border-gray-300 pb-1">
                          {col.title}
                        </h4>
                        {col.items.map((m, y) => (
                          <div key={y} onClick={() => setMobileMenuOpen(false)}>
                            {item.title === "SDGs@ UW" && m.title.includes("Goal") ? (
                              <div className="px-2 py-1">
                                <SDGLink title={m.title} href={m.href} />
                              </div>
                            ) : item.title === "SDGs@ UW" && m.title.includes("Annual Reports") ? (
                              <Link
                                href={m.href}
                                className="flex items-center px-4 py-1 text-sm hover:text-theme-orange transition-colors duration-200"
                              >
                                <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-theme-blue to-theme-orange rounded-md mr-3">
                                  <FiFileText className="w-3 h-3 text-white" />
                                </div>
                                {m.title}
                              </Link>
                            ) : (
                              <Link
                                href={m.href}
                                className="block px-4 py-1 text-sm hover:text-theme-orange transition-colors duration-200"
                              >
                                {m.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}