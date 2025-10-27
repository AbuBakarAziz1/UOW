"use client";

import InnerPageLayout from "../../components/InnerPageLayout";
import { FaCheckCircle, FaBullseye, FaCertificate, FaUsers } from "react-icons/fa";

export default function QualityPolicy() {
    const objectives = [
        {
            icon: FaBullseye,
            title: "Academic Excellence",
            description: "To provide quality education through continuous improvement of curriculum, teaching methodologies, and learning resources.",
        },
        {
            icon: FaUsers,
            title: "Stakeholder Satisfaction",
            description: "To ensure satisfaction of all stakeholders including students, faculty, staff, employers, and society at large.",
        },
        {
            icon: FaCertificate,
            title: "Quality Assurance",
            description: "To maintain and enhance quality standards through regular assessment, monitoring, and evaluation of all academic and administrative processes.",
        },
        {
            icon: FaCheckCircle,
            title: "Continuous Improvement",
            description: "To foster a culture of continuous improvement and innovation in all aspects of university operations.",
        },
    ];

    const commitments = [
        "Adopting and implementing the mechanism of continual quality improvement to enhance the standards of teaching, learning and research",
        "Developing progressive curricula and offering conducive learning environment for the development of valued human resource",
        "Fulfilling social responsibilities towards national development",
        "Managing intellectual property rights effectively",
        "Meeting all the applicable regulatory necessities including data security and privacy laws",
        
    ];

    const certifications = [
        {
            title: "ISO 9001:2015",
            description: "Quality Management System Certification",
            status: "Certified",
        },
        {
            title: "ISO 21001:2018",
            description: "Educational Organizations Management System",
            status: "In Progress",
        },
        {
            title: "HEC Recognition",
            description: "Higher Education Commission Approved",
            status: "Certified",
        },
        {
            title: "PEC Accreditation",
            description: "Pakistan Engineering Council Accredited Programs",
            status: "Certified",
        },
    ];

    return (
        <InnerPageLayout section="about">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Policy Statement */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        <span className="text-theme-blue">Quality </span>{" "}
                        <span className="text-red-600">Policy</span>
                    </h2>
                    <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-6 md:p-10 shadow-lg border-l-4 border-theme-blue">
                        <p className="text-gray-700 text-lg text-justify leading-relaxed mb-6">
                            The University of Wah is committed to achieving and maintaining excellence in education, research, and service. We strive to provide high-quality academic programs that meet the needs of students, employers, and society. Our quality management system ensures continuous improvement of all processes and activities.
                        </p>
                        <div className="mb-6 px-4">
                            <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                {commitments.map((commitment, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <FaCheckCircle className="text-theme-orange text-lg group-hover:scale-110 transition-transform" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed">
                                            {commitment}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-gray-700 text-lg text-justify leading-relaxed">
                            Our focus is to pursue excellence through creativity, diversity, process approach, equity, ethical conduct and adaptation to change for playing a catalytic role to achieve national, regional and global harmony.
                        </p>
                    </div>
                </div>

                {/* Quality Objectives */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                        <span className="text-theme-blue">Quality</span>{" "}
                        <span className="text-red-600">Objectives</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {objectives.map((objective, index) => {
                            const IconComponent = objective.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-theme-orange"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-theme-blue to-theme-orange p-3 rounded-lg flex-shrink-0">
                                            <IconComponent className="text-2xl text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-theme-blue mb-2">
                                                {objective.title}
                                            </h3>

                                            <p className="text-gray-700 leading-relaxed">
                                                {objective.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Commitments */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                        <span className="text-theme-blue">Our</span>{" "}
                        <span className="text-red-600">Commitments</span>
                    </h2>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {commitments.map((commitment, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <FaCheckCircle className="text-theme-orange text-lg group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-gray-700 leading-relaxed">
                                        {commitment}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Certifications & Accreditations */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                        <span className="text-theme-blue">Certifications &</span>{" "}
                        <span className="text-red-600">Accreditations</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="bg-gradient-to-br from-theme-blue to-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaCertificate className="text-2xl text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-theme-blue mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${cert.status === "Certified"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {cert.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </InnerPageLayout>
    );
}
