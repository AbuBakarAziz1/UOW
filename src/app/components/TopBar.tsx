"use client";
import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";


export default function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-theme-orange text-white text-xs shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 py-1">
                {/* Left: Social Links */}
                <div className="flex items-center space-x-3">
                    <SocialLinks />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-4 text-nowrap">
                    <Link
                        href="/merit"
                        className="bg-orange-300 text-white px-2 py-1 rounded font-bold animate-pulse shadow-sm hover:shadow-md transition transform hover:scale-103"
                    >
                        Admission Open
                    </Link>
                    |
                    <Link
                        href="https://alumni.uow.edu.pk"
                        target="_blank"
                        className="hover:text-theme-blue transition font-bold hover-lift-reappear"
                    >
                        Alumni
                    </Link>
                    |
                    <Link
                        href="https://radio.uow.edu.pk"
                        target="_blank"
                        className="hover:text-theme-blue transition font-bold hover-lift-reappear"
                    >
                        UW FM Radio
                    </Link>
                    |
                    <Link
                        href="https://career.uow.edu.pk"
                        target="_blank"
                        className="hover:text-theme-blue transition font-bold hover-lift-reappear"
                    >
                        Careers
                    </Link>
                    |
                    <Link
                        href="/"
                        className="hover:text-theme-blue transition font-bold hover-lift-reappear"
                    >
                        Download
                    </Link>
                    |
                    <Link
                        href="/"
                        className="hover:text-theme-blue transition font-bold hover-lift-reappear"
                    >
                        Events
                    </Link>
                    |
                    <Link
                        href="/"
                        className="hover:text-theme-blue transition font-bold hover-lift-reappear"
                        aria-label="Search"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            <path d="M505 442.7L405.3 343c28.5-35.5 45.7-80.8 45.7-129.3C451 96.5 354.5 0 236 0S21 96.5 21 213.7 117.5 427.4 236 427.4c48.5 0 93.8-17.2 129.3-45.7l99.7 99.7c6.2 6.2 16.4 6.2 22.6 0l17.4-17.4c6.2-6.2 6.2-16.4 0-22.6zM236 362.4c-81.5 0-147.4-66-147.4-147.4S154.5 67.6 236 67.6 383.4 133.6 383.4 215 317.5 362.4 236 362.4z" />
                        </svg>
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <Link
                        href="/merit"
                        className="bg-orange-300 text-white px-2 py-1 rounded font-bold animate-pulse shadow-sm"
                    >
                        Admission
                    </Link>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 text-white rounded-md hover:bg-orange-400 transition"
                    >
                        {menuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-500 px-1 py-2 animate-slide-down">
                    <Link
                        href="https://alumni.uow.edu.pk"
                        target="_blank"
                        className="block font-bold text-white border-b border-white p-1 italic tracking-widest hover:bg-theme-orange transition"
                    >
                        Alumni
                    </Link>
                    <Link
                        href="https://radio.uow.edu.pk"
                        target="_blank"
                        className="block font-bold text-white border-b border-white p-1 italic tracking-widest hover:bg-theme-orange transition"
                    >
                        UW FM Radio
                    </Link>
                    <Link
                        href="https://career.uow.edu.pk"
                        target="_blank"
                        className="block font-bold text-white border-b border-white p-1 italic tracking-widest hover:bg-theme-orange transition"
                    >
                        Careers
                    </Link>
                    <Link href="/" className="block font-bold text-white border-b border-white p-1 italic tracking-widest hover:bg-theme-orange transition">
                        Download
                    </Link>
                    <Link href="/" className="block font-bold text-white border-b border-white p-1 italic tracking-widest hover:bg-theme-orange transition">
                        Events
                    </Link>
                    <Link href="/" className="block font-bold text-white border-b border-white p-1 italic tracking-widest hover:bg-theme-orange transition">
                        Search
                    </Link>
                </div>
            )}
        </div>
    );
}
