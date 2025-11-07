"use client";

import InnerPageLayout from "../../components/InnerPageLayout";
import { FaBook, FaFlask, FaRunning, FaBed, FaWifi, FaCoffee, FaLaptop, FaMosque } from "react-icons/fa";
import Image from "next/image";

export default function Facilities() {
    const facilities = [
        {
            icon: FaBook,
            title: "Central Library",
            description: "State-of-the-art library with over 50,000 books, digital resources, and quiet study areas.",
            features: ["Digital Library", "Reading Halls", "Research Databases", "24/7 Access"],
        },
        {
            icon: FaFlask,
            title: "Research Laboratories",
            description: "Modern laboratories equipped with latest technology for research and practical learning.",
            features: ["Computer Labs", "Engineering Labs", "Science Labs", "Research Centers"],
        },
        {
            icon: FaRunning,
            title: "Sports Complex",
            description: "Comprehensive sports facilities for physical fitness and recreational activities.",
            features: ["Indoor Gymnasium", "Cricket Ground", "Football Field", "Badminton Courts"],
        },
        {
            icon: FaBed,
            title: "Hostel Accommodation",
            description: "Separate hostel facilities for male and female students with modern amenities.",
            features: ["Furnished Rooms", "24/7 Security", "Mess Facilities", "Recreation Rooms"],
        },
        {
            icon: FaWifi,
            title: "IT Infrastructure",
            description: "Campus-wide high-speed internet and modern IT facilities.",
            features: ["WiFi Coverage", "Computer Labs", "Smart Classrooms", "IT Support"],
        },
        {
            icon: FaCoffee,
            title: "Cafeteria",
            description: "Multiple cafeterias offering hygienic and affordable food options.",
            features: ["Student Cafeteria", "Faculty Lounge", "Food Court", "Coffee Shop"],
        },
        {
            icon: FaMosque,
            title: "Prayer Facilities",
            description: "Separate prayer areas for male and female students.",
            features: ["Main Mosque", "Prayer Rooms", "Ablution Areas", "Islamic Center"],
        },
        {
            icon: FaLaptop,
            title: "Auditoriums & Seminar Halls",
            description: "Modern venues for conferences, seminars, and events.",
            features: ["Main Auditorium", "Seminar Halls", "Conference Rooms", "Smart Boards"],
        },
    ];

    const images = [
        {
            src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
            alt: "Library",
            title: "Central Library",
        },
        {
            src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
            alt: "Laboratory",
            title: "Research Labs",
        },
        {
            src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
            alt: "Sports",
            title: "Sports Complex",
        },
        {
            src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
            alt: "Cafeteria",
            title: "Cafeteria",
        },
    ];

    return (
        <InnerPageLayout section="about">
            <div className="space-y-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-theme-blue mb-3">Facilities</h1>
                    <p className="text-xl text-gray-600">World-class infrastructure and facilities for an enriching learning experience</p>
                </div>

                {/* Introduction */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border-l-4 border-theme-blue shadow-lg">
                    <h2 className="text-3xl font-bold text-theme-blue mb-4">Campus Facilities</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        The University of Wah provides world-class infrastructure and facilities to ensure a conducive learning environment. 
                        Our state-of-the-art facilities support academic excellence, research innovation, and student development across all disciplines.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-6 hover:border-theme-orange"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-theme-blue to-blue-600 text-white p-4 rounded-xl shadow-md">
                                    <facility.icon className="text-3xl" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-theme-blue mb-2">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        {facility.description}
                                    </p>
                                    <div className="space-y-2">
                                        {facility.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-theme-orange rounded-full"></span>
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Gallery */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-2xl font-bold text-theme-blue mb-6">Facility Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={500}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gradient-to-r from-theme-blue to-blue-700 text-white rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">Accessibility & Support</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <p className="text-blue-100">Security & Surveillance</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">100%</div>
                            <p className="text-blue-100">WiFi Coverage</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <p className="text-blue-100">Modern Facilities</p>
                        </div>
                    </div>
                    <p className="mt-6 text-blue-100 text-center">
                        All facilities are wheelchair accessible and designed to support students with special needs.
                    </p>
                </div>

                {/* Contact for Tours */}
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-theme-orange">
                    <h3 className="text-xl font-bold text-theme-blue mb-2">Schedule a Campus Tour</h3>
                    <p className="text-gray-700 mb-4">
                        Interested in visiting our campus? Contact our admissions office to schedule a guided tour and see our facilities firsthand.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/contact"
                            className="bg-theme-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                        >
                            Contact Admissions
                        </a>
                        <a
                            href="/admissions"
                            className="bg-theme-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
