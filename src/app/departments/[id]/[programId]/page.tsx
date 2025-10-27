"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useMemo } from "react";
import InnerPageLayout from "../../../components/InnerPageLayout";
import { getProgramById } from "../../../../lib/programsData";
import { getDepartmentById } from "../../../../lib/departmentsData";
import { FaGraduationCap, FaClock, FaCheckCircle, FaBook } from "react-icons/fa";
import Link from "next/link";
import type { ProgramObjective, Semester, Course } from "@/lib/programsData";

export default function ProgramPage() {
    const params = useParams();
    const programId = params?.programId as string;
    const departmentId = params?.id as string;
    const program = useMemo(() => getProgramById(programId), [programId]);
    const department = useMemo(() => getDepartmentById(departmentId), [departmentId]);

    if (!program || !department) {
        return (
            <InnerPageLayout section="academics">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Program Not Found</h1>
                    <p className="text-gray-600">The program you are looking for does not exist.</p>
                    <div className="mt-4 text-sm text-gray-500">
                        <p>Department ID: {departmentId || 'Not found'}</p>
                        <p>Program ID: {programId || 'Not found'}</p>
                    </div>
                    <Link 
                        href="/departments"
                        className="mt-6 inline-block bg-theme-blue text-white px-6 py-2 rounded-lg hover:bg-theme-orange transition-colors"
                    >
                        Back to Departments
                    </Link>
                </div>
            </InnerPageLayout>
        );
    }

    const programNameParts = program.name.split(" ");
    const firstPart = programNameParts.slice(0, 1).join(" ");
    const secondPart = programNameParts.slice(1).join(" ");

    return (
        <InnerPageLayout section="academics">
            {/* Hero Image Header */}
            <div className="relative w-full h-[300px] md:h-[350px]">
                <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

                {/* Program Header on Image */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:pb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="text-theme-orange font-bold text-sm md:text-base uppercase tracking-widest mb-2 drop-shadow-lg">
                                    {program.departmentName}
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
                    <div className="p-8 md:p-12 lg:p-8">

                        {/* Program Overview */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="text-theme-blue">Program</span>{" "}
                                <span className="text-red-600">Overview</span>
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border-l-4 border-theme-blue">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FaClock className="text-2xl text-theme-orange" />
                                        <h3 className="font-bold text-gray-800">Duration</h3>
                                    </div>
                                    <p className="text-gray-700 font-semibold">{program.duration}</p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border-l-4 border-theme-blue">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FaBook className="text-2xl text-theme-orange" />
                                        <h3 className="font-bold text-gray-800">Total Credit Hours</h3>
                                    </div>
                                    <p className="text-gray-700 font-semibold">{program.totalCreditHours} CH</p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border-l-4 border-theme-blue">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FaGraduationCap className="text-2xl text-theme-orange" />
                                        <h3 className="font-bold text-gray-800">Faculty</h3>
                                    </div>
                                    <p className="text-gray-700 font-semibold">{program.faculty}</p>
                                </div>
                            </div>
                        </section>

                        {/* Program Objectives */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="text-theme-blue">Program</span>{" "}
                                <span className="text-red-600">Objectives (POs)</span>
                            </h2>
                            <div className="space-y-4">
                                {program.objectives.map((obj: ProgramObjective, index: number) => (
                                    <div key={index} className="bg-gradient-to-r from-blue-50 via-sky-50 to-orange-50 rounded-xl p-6 border-l-4 border-theme-orange hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="bg-theme-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                                                    {obj.code.split('-')[1]}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-theme-blue mb-2">{obj.code}</h3>
                                                <p className="text-gray-700 leading-relaxed text-justify">{obj.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Eligibility Criteria */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="text-theme-blue">Eligibility</span>{" "}
                                <span className="text-red-600">Criteria</span>
                            </h2>
                            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 border-l-4 border-theme-blue">
                                <p className="text-gray-700 font-semibold mb-4">
                                    The minimum requirements for admission in this bachelor degree program is any of following:
                                </p>
                                <div className="space-y-3">
                                    {program.eligibilityCriteria.map((criteria: string, index: number) => (
                                        <div key={index}>
                                            <div className="flex items-start gap-3">
                                                <span className="flex-shrink-0 mt-1">
                                                    <FaCheckCircle className="text-theme-orange" />
                                                </span>
                                                <p className="text-gray-700 leading-relaxed">{criteria}</p>
                                            </div>
                                            {index < program.eligibilityCriteria.length - 1 && (
                                                <div className="flex justify-center my-3">
                                                    <span className="bg-gradient-to-r from-theme-orange to-red-600 text-white px-3 py-0.5 rounded-full text-xs font-bold">
                                                        OR
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {program.deficiency && (
                                    <div className="mt-4 pt-4 border-t border-orange-200">
                                        <p className="text-sm text-gray-600">
                                            <span className="font-bold text-red-600">Deficiency:</span> {program.deficiency}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Course Structure */}
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="text-theme-blue">Course</span>{" "}
                                <span className="text-red-600">Structure</span>
                            </h2>
                            
                            <div className="space-y-6">
                                {program.semesters.map((semester: Semester) => (
                                    <div key={semester.semesterNumber} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-theme-orange transition-colors duration-300">
                                        <div className="bg-gradient-to-r from-sky-800 to-sky-700 text-white p-4 flex items-center justify-between">
                                            <h3 className="text-xl font-bold">Semester {semester.semesterNumber}</h3>
                                            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
                                                Total: {semester.totalCredits} CH
                                            </span>
                                        </div>
                                        
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th scope="col" className="text-left p-4 font-bold text-sm text-gray-700">Course Code</th>
                                                        <th scope="col" className="text-left p-4 font-bold text-sm text-gray-700">Course Title</th>
                                                        <th scope="col" className="text-left p-4 font-bold text-sm text-gray-700">Pre-Requisite</th>
                                                        <th scope="col" className="text-left p-4 font-bold text-sm text-gray-700">Credit Hours<br/>(Th + Lab)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {semester.courses.map((course: Course, index: number) => (
                                                        <tr 
                                                            key={index}
                                                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300`}
                                                        >
                                                            <td className="p-4 font-semibold text-theme-blue">{course.code}</td>
                                                            <td className="p-4 text-gray-700">{course.title}</td>
                                                            <td className="p-4 text-gray-600 text-center">{course.preRequisite}</td>
                                                            <td className="p-4 text-gray-700 text-center font-semibold">{course.creditHours}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Admission Information */}
                        <section className="bg-gradient-to-r from-blue-100 via-sky-100 to-orange-100 rounded-2xl p-6 mb-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="text-theme-blue">Ready to</span>{" "}
                                <span className="text-red-600">Apply?</span>
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                                For detailed admission requirements, fee structure, and application procedures, please visit our Admissions Office or contact the department directly. We offer merit-based and need-based scholarships to eligible students.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/admissions/apply"
                                    className="bg-theme-orange hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href={`/departments/${program.departmentId}`}
                                    className="bg-theme-blue hover:bg-sky-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                                >
                                    View Department
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-12" />
        </InnerPageLayout>
    );
}
