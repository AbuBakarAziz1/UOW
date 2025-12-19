"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useMemo } from "react";
import InnerPageLayout from "../../components/InnerPageLayout";
import { getDepartmentById } from "../../../lib/departmentsData";
import { getProgramsByDepartment } from "../../../lib/programsData";
import { FaGraduationCap, FaClock, FaCheckCircle, FaUniversity } from "react-icons/fa";
import Link from "next/link";

export default function DepartmentPage() {
    const params = useParams();
    const id = params?.id as string;
    const department = useMemo(() => getDepartmentById(id), [id]);
    const detailedPrograms = useMemo(() => getProgramsByDepartment(id), [id]);

    if (!department) {
        return (
            <InnerPageLayout section="academics">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Department Not Found</h1>
                    <p className="text-gray-600">The department you are looking for does not exist.</p>
                </div>
            </InnerPageLayout>
        );
    }

    const departmentNameParts = department.name.split(" ");
    const firstPart = departmentNameParts.slice(0, 2).join(" ");
    const secondPart = departmentNameParts.slice(2).join(" ");

    return (
        <InnerPageLayout section="academics">
            {/* Hero Image Header */}
            <div className="relative w-full h-[300px] md:h-[350px]">
                <Image
                    src={department.image}
                    alt={department.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

                {/* Department Header on Image */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:pb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="text-theme-orange font-bold text-sm md:text-base uppercase tracking-widest mb-2 drop-shadow-lg">
                                    {department.faculty}
                                </p>
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold drop-shadow-2xl">
                                    <span className="text-white">{firstPart}</span>{" "}
                                    <span className="text-red-600">{secondPart}</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Card - Subtle Overlap */}
            <div className="max-w-7xl mx-auto px-3 relative">
                <div className="bg-white rounded-xl shadow-2xl -mt-4 md:-mt-6 border-t-2 border-orange-400 relative z-10">
                    <div className="px-6 py-4 md:px-8 md:py-4 lg:px-8 lg:py-4">

                        {/* Description */}
                        <section className="mb-6">
                            <h2 className="text-2xl text-theme-blue font-bold mb-4">{department.name}</h2>
                            <div className="transition-shadow duration-300">
                                {department.description.map((para, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 text-md leading-relaxed text-justify mb-3 last:mb-0"
                                    >
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </section>

                        {/* Programs Offered */}
                        <section className="mb-6" aria-labelledby="programs-heading">
                            <h2 id="programs-heading" className="text-2xl font-bold mb-4">
                                <span className="text-theme-blue">Programs</span>{" "}
                                <span className="text-red-600">Offered</span>
                            </h2>

                            {/* Programs Table */}
                            <div className="bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-xl shadow-lg overflow-hidden">
                                <table className="w-full border-collapse">
                                    <thead className="bg-gradient-to-r from-sky-800 to-sky-700 text-white">
                                        <tr>
                                            <th scope="col" className="text-left p-4 font-bold text-base">
                                                Program
                                            </th>
                                            <th scope="col" className="text-left p-4 font-bold text-base">
                                                Duration
                                            </th>
                                            <th scope="col" className="text-left p-4 font-bold text-base">
                                                Entry Requirements
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {department.programs.map((program, index) => {
                                            const requirements = program.entryRequirements.split('OR');
                                            const programDetail = detailedPrograms.find(p => p.name === program.name);
                                            
                                            return (
                                                <tr
                                                    key={`${program.name}-${index}`}
                                                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300 group`}
                                                >
                                                    <td className="p-5 font-semibold text-theme-blue group-hover:text-theme-orange transition-colors duration-300">
                                                        {programDetail ? (
                                                            <Link href={`/departments/${id}/${programDetail.id}`} className="hover:underline flex items-center gap-2">
                                                                {program.name}
                                                                <span className="text-xs">→</span>
                                                            </Link>
                                                        ) : (
                                                            program.name
                                                        )}
                                                    </td>
                                                    <td className="p-5 text-gray-700">
                                                        {program.duration}
                                                    </td>
                                                    <td className="p-5 text-gray-700 leading-relaxed">
                                                        {requirements.map((req, i) => (
                                                            <div key={i}>
                                                                <div className="flex items-start mb-1">
                                                                    <span className="flex-1 text-justify">
                                                                        {req.trim()}
                                                                    </span>
                                                                </div>
                                                                {i < requirements.length - 1 && (
                                                                    <div className="flex justify-center my-2">
                                                                        <span className="bg-gradient-to-r from-theme-orange to-red-600 text-white px-3 py-0.5 rounded-full text-xs font-bold">
                                                                            OR
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Admission Information */}
                        <section className="bg-gradient-to-r from-blue-100 via-sky-100 to-orange-100 rounded-2xl p-6 mb-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="text-theme-blue">Admission</span>{" "}
                                <span className="text-red-600">Information</span>
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                                For detailed admission requirements, fee structure, and application procedures, please visit our Admissions Office or contact the department directly. We offer merit-based and need-based scholarships to eligible students.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/admissions/apply"
                                    className="bg-theme-orange hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                >
                                    Apply Now
                                </a>
                                <a
                                    href="/contact"
                                    className="bg-theme-blue hover:bg-sky-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                                >
                                    Contact Department
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-6" />
        </InnerPageLayout>
    );
}
