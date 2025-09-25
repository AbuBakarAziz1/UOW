"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaChevronRight } from "react-icons/fa";
interface BreadcrumbProps {
    customItems?: Array<{
        label: string;
        href?: string;
    }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ customItems }) => {
    const pathname = usePathname();

    // Generate breadcrumb items from pathname if no custom items provided
    const generateBreadcrumbs = (): Array<{ label: string; href?: string }> => {
        if (customItems) return customItems;

        const pathSegments = pathname.split("/").filter(segment => segment !== "");
        const breadcrumbs: Array<{ label: string; href?: string }> = [{ label: "Home", href: "/" }];

        // Label mappings for better readability
        const labelMap: { [key: string]: string } = {
            admissions: "Admissions",
            academics: "Academics",
            research: "Research",
            about: "About Us",
            news: "News & Events",
            facilities: "Facilities",
            contact: "Contact",
            requirements: "Requirements",
            application: "Apply Online",
            deadlines: "Important Dates",
            scholarships: "Scholarships",
            undergraduate: "Undergraduate Programs",
            graduate: "Graduate Programs",
            departments: "Departments",
            faculty: "Faculty",
            calendar: "Academic Calendar",
            centers: "Research Centers",
            publications: "Publications",
            opportunities: "Opportunities",
            funding: "Research Funding",
            history: "University History",
            mission: "Mission & Vision",
            leadership: "Leadership",
            campus: "Campus Life",
            events: "Events",
            announcements: "Announcements",
            press: "Press Releases",
            labs: "Computer Labs",
            library: "Library",
            sports: "Sports Complex",
            hostel: "Hostels",
            transport: "Transportation",
            cafeteria: "Cafeteria"
        };

        let currentPath = "";
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const isLast = index === pathSegments.length - 1;

            breadcrumbs.push({
                label: labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
                ...(isLast ? {} : { href: currentPath })
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    if (pathname === "/") return null; // Don't show breadcrumb on home page
    
    return (
        <div className="w-full ">
            <div className="max-w-7xl mx-auto mt-6 px-4 py-2">
                <nav className="flex items-center space-x-1 text-sm">
                    {breadcrumbs.map((item, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        const isFirst = index === 0;

                        return (
                            <React.Fragment key={index}>
                                {/* Separator */}
                                {index > 0 && (
                                    <FaChevronRight className="text-gray-400 text-xs mx-2" />
                                )}

                                {/* Breadcrumb Item */}
                                <div className="flex items-center">
                                    {isFirst && (
                                        <FaHome className="text-theme-blue mr-2 text-base" />
                                    )}

                                    {item.href && !isLast ? (
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-1 px-2 py-2 transition-all duration-300  transform hover:scale-101"
                                        >
                                            <span className="text-gray-900 group-hover:text-theme-blue font-medium transition-colors duration-300">
                                                {item.label}
                                            </span>
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => window.location.reload()} // 👈 reloads the current page
                                            className="flex items-center gap-1 px-2 py-2 text-gray-700 font-bold text-sm transition-all duration-300 transform hover:scale-101"
                                        >
                                            {item.label}
                                            {isLast && (
                                                <div className="ml-1 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                                            )}
                                        </button>
                                    )}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </nav>

            </div>
        </div>
    );
};

export default Breadcrumb;