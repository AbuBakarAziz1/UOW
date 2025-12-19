"use client";

import { useParams } from "next/navigation";
import InnerPageLayout from "../../../components/InnerPageLayout";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaArrowLeft, FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";
import { getLeaderById, getDeanById } from "@/lib/leadershipData";

export default function LeadershipProfile() {
    const params = useParams();
    const leaderId = params.id as string;

    // Check both leaders and deans
    const leader = getLeaderById(leaderId) || getDeanById(leaderId);

    if (!leader) {
        return (
            <InnerPageLayout section="about">
                <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-red-600 mb-4">404 Not Found</h1>
                        <p className="text-gray-600 mb-6">The leadership profile you're looking for doesn't exist.</p>
                        <Link
                            href="/about/leadership"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-theme-blue text-white rounded-lg hover:bg-theme-orange transition-colors duration-300"
                        >
                            <FaArrowLeft /> Back to Leadership
                        </Link>
                    </div>
                </div>
            </InnerPageLayout>
        );
    }

    return (
        <InnerPageLayout section="about">
            {/* Profile Header Section */}
            <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Left - Image */}
                    <div className="lg:col-span-2">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl p-1 border-1 border-gray-500 border-dashed">
                            <Image
                                src={leader.image}
                                alt={leader.name}
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                    </div>

                    {/* Right - Info */}
                    <div className="lg:col-span-3 flex flex-col justify-start">
                        {/* Name at Top */}
                        <h1 className="text-3xl md:text-3xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-blue-800 to-sky-600 bg-clip-text text-transparent italic">
                                {leader.name}
                            </span>
                        </h1>

                        {/* Title */}
                        <h2 className="text-1xl md:text-2xl font-semibold text-red-600 mb-3 italic">
                            {leader.title}
                        </h2>

                        {/* University Name */}
                        <h3 className="text-lg md:text-xl text-gray-600 mb-3 italic">
                            University of Wah
                        </h3>

                        {/* Decorative Border Line */}
                        <div className="w-24 h-1 bg-gradient-to-r from-theme-blue via-theme-orange to-red-600 rounded-full mb-6"></div>

                        {/* Qualifications */}
                        {/* {leader.qualifications && (
                            <div className="mb-8">
                                <h4 className="text-lg font-bold text-theme-blue mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-theme-orange rounded-full"></span>
                                    Qualifications & Achievements
                                </h4>
                                <ul className="space-y-3">
                                    {leader.qualifications.map((qual, index) => (
                                        <li key={index} className="text-gray-700 flex items-start gap-3 group">
                                            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 bg-theme-blue rounded-full group-hover:bg-theme-orange transition-colors"></span>
                                            <span className="leading-relaxed">{qual}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )} */}

                        {/* Contact Info */}
                        {(leader.email || leader.phone) && (
                            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border-l-4 border-theme-blue">
                                <h4 className="text-lg font-bold text-theme-blue mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-theme-orange rounded-full"></span>
                                    Contact Information
                                </h4>
                                <div className="space-y-3">
                                    {leader.email && (
                                        <a href={`mailto:${leader.email}`} className="flex items-center gap-3 text-gray-700 hover:text-theme-blue transition-colors group">
                                            <div className="bg-white p-2 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                                <FaEnvelope className="text-theme-orange text-lg" />
                                            </div>
                                            <span className="font-medium">{leader.email}</span>
                                        </a>
                                    )}
                                    {leader.phone && (
                                        <a href={`tel:${leader.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-theme-blue transition-colors group">
                                            <div className="bg-white p-2 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                                                <FaPhone className="text-theme-orange text-lg" />
                                            </div>
                                            <span className="font-medium">{leader.phone}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Message Card */}
            <div className="max-w-7xl mx-auto px-6 pb-8">
                <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl shadow-lg p-8 md:p-12">
                    {/* Message Icon at Center */}
                    <div className="flex justify-center mb-8">
                        <div >
                            <FaQuoteLeft className="text-6xl italic text-theme-blue" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        <span className="text-theme-blue">Message from the</span>{" "}
                        <span className="text-red-600">{leader.title}</span>
                    </h2>

                    <div className="prose max-w-none">
                        {leader.message.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-gray-700 text-justify mb-6 leading-relaxed text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t">
                        <p className="text-gray-600 italic">
                            Best regards,<br />
                            <span className="font-semibold text-theme-blue">{leader.name}</span><br />
                            <span className="text-sm text-gray-500">{leader.title}</span>
                        </p>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
