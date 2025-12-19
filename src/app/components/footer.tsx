"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function footer() {
    return (
        <>

            {/* Footer */}
            <footer className="bg-gray-900 border-t-2 border-orange-600 relative overflow-hidden layer-overlay" style={{ backgroundImage: 'url(/theme/images/footerBackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply -z-10"></div>
                <div className="mx-auto container px-4 pt-6 pb-4 sm:px-6 lg:px-8 lg:pt-12 ">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-300 sm:justify-start">
                                <Image src="/theme/images/uwfooterLogo.png"
                                    alt="Logo"
                                    width={240}
                                    height={60}
                                    className="h-10"
                                />
                            </div>

                            <p
                                className="mt-4 max-w-md text-center text-sm leading-relaxed text-gray-400 sm:max-w-xs sm:text-left"
                            >
                                The University of Wah (UW) is a private-sector higher education institution founded with the vision of achieving excellence in unbiased dissemination of quality education to all.
                            </p>

                            <div className="text-center sm:text-left">
                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end text-gray-400 hover:text-white transition"
                                            href="mailto:info@uow.edu.pk"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5 shrink-0 text-theme-orange shadow-sm"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span className="flex-1">info@uow.edu.pk</span>
                                        </a>
                                    </li>


                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end text-gray-400 hover:text-white transition"
                                            href="tel:+92519157000"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5 shrink-0 text-theme-orange shadow-sm"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            <span className="flex-1">051-9157000, 051-905525256-7</span>
                                        </a>
                                    </li>


                                    <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-theme-orange shadow-sm"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <a
                                            href="https://maps.google.com/?q=Quaid+Avenue,+Wah+Cantt-47040"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-gray-400 hover:text-white transition not-italic"
                                        >
                                            University of Wah, Quaid Avenue, Wah Cantt, Pakistan
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 pt-8">
                            <div className="text-center sm:text-left">
                                <h4 className="relative inline-block text-md font-medium text-white uppercase after:content-[''] after:block after:w-1/4 after:h-0.5 after:bg-orange-400 after:mt-2">
                                    Constituent Campus
                                </h4>

                                <ul className="mt-8 space-y-4 text-xs">
                                    <li className="relative group">
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="https://mdc.uow.edu.pk"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Mashal Degree College (MDC)
                                        </a>
                                        {/* Tooltip preview on hover or focus */}
                                        <div className="absolute left-1/2 z-50 invisible group-hover:visible group-focus-within:visible group-hover:flex group-focus-within:flex flex-col items-center w-80 -translate-x-1/2 mt-2">
                                            <div className="bg-gray-900 border border-theme-orange rounded-lg shadow-lg p-4 text-xs text-gray-300">
                                                <div className="font-bold mb-2">Mashal Degree College (MDC)</div>
                                                <div className="mb-2">Preview of <span className="text-theme-orange">mdc.uow.edu.pk</span></div>
                                                {/* <iframe
                                                    src="https://mdc.uow.edu.pk"
                                                    title="MDC Preview"
                                                    className="w-full h-32 rounded border border-gray-200 mb-2"
                                                /> */}
                                                <a
                                                    href="https://mdc.uow.edu.pk"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-theme-orange underline text-xs"
                                                >
                                                    Open mdc.uow.edu.pk
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="relative group">
                                        <a
                                            className="transition text-gray-300 hover:text-theme-orange"
                                            href="https://www.wecuw.edu.pk/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Wah Engineering College (WEC)
                                        </a>
                                        {/* Tooltip preview on hover or focus */}
                                        <div className="absolute left-1/2 z-50 invisible group-hover:visible group-focus-within:visible group-hover:flex group-focus-within:flex flex-col items-center w-80 -translate-x-1/2 mt-2">
                                            <div className="bg-gray-900 border border-theme-orange rounded-lg shadow-lg p-4 text-xs text-gray-300">
                                                <div className="font-bold mb-2">Wah Engineering College (WEC)</div>
                                                <div className="mb-2">Preview of <span className="text-theme-orange">wec.uow.edu.pk</span></div>

                                                <a
                                                    href="https://www.wecuw.edu.pk/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-theme-orange underline text-xs"
                                                >
                                                    Open wecuw.edu.pk
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                            <div className="text-center sm:text-left">
                                <h4 className="relative inline-block text-md font-medium text-white uppercase after:content-[''] after:block after:w-1/4 after:h-0.5 after:bg-orange-400 after:mt-2">Regulatory Bodies</h4>
                                <ul className="mt-8 space-y-4 text-xs">
                                    <li>
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="#"
                                        >
                                            Government of Punjab (GOP)
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="#"
                                        >
                                            Higher Education Commission (HEC)
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="#"
                                        >
                                            Punjab Higher Education Commission (PHEC)
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <h4 className="relative inline-block text-md font-medium text-white uppercase after:content-[''] after:block after:w-1/4 after:h-0.5 after:bg-orange-400 after:mt-2">Policies</h4>
                                <ul className="mt-8 space-y-4 text-xs">
                                    <li>
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="https://drive.google.com/open?id=1wzw1dDLXoilT6Lr86bBfXr0SncJbHSWn" target="_blank" rel="noopener noreferrer"
                                        >
                                            Harassment at Workplace
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="https://drive.google.com/file/d/1zHIMvBuK7mdslmcOLM0VaQS9p4Xp67-K/view" target="_blank" rel="noopener noreferrer"
                                        >
                                            Drugs and Tobacco Control
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="https://drive.google.com/file/d/11q8HQuQmOi6I1AO-Mo41NTnoUn2BtxkM/view" target="_blank" rel="noopener noreferrer"
                                        >
                                            Anti-Plagiarism
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-300 transition hover:text-theme-orange"
                                            href="https://drive.google.com/file/d/1pJBXmiADRbRi_q9q0SQ6fQCwP-IDcJD7/view" target="_blank" rel="noopener noreferrer"
                                        >
                                            Students with Disabilities
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <h4 className="relative inline-block text-md font-medium text-white uppercase after:content-[''] after:block after:w-1/4 after:h-0.5 after:bg-orange-400 after:mt-2">Quick Links</h4>

                                <ul className="mt-8 space-y-4 text-xs">
                                    <li>
                                        <a
                                            className="text-gray-400 transition hover:text-theme-orange"
                                            href="#"
                                        >
                                            AVICENNA (In Campus)
                                        </a>
                                    </li>
                                    <li className="mb-6">
                                        <a
                                            className="transition text-gray-400 hover:text-theme-orange"
                                            href="#"
                                        >
                                            AVICENNA (Off Campus)
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-400 transition hover:text-theme-orange"
                                            href="#"
                                        >
                                            UW MIS (In Campus)
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="transition text-gray-400 hover:text-theme-orange"
                                            href="#"
                                        >
                                            UW MIS (Off Campus)
                                        </a>
                                    </li>

                                </ul>
                            </div>


                        </div>
                    </div>


                    <div className="mt-6 pt-10 border-gray-800 mb-4">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                                <li>
                                    <a href="#" className="transition hover:opacity-75 text-gray-400 hover:text-theme-orange">
                                        Terms & Conditions
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75 text-gray-400 hover:text-theme-orange">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75 text-gray-400 hover:text-theme-orange">
                                        Disclaimer
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75 text-gray-400 hover:text-theme-orange">
                                        Copyright Notice
                                    </a>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm sm:order-first sm:mt-0 text-gray-400">
                                &copy; {new Date().getFullYear()} <Link href="/" className="text-blue-500 hover:text-blue-400">University of Wah.</Link> All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full py-6">
                    <h4
                        className="
                        text-5xl font-extrabold 
                        bg-[url('/theme/images/footerBackground.jpg')]
                        bg-cover bg-repeat-x 
                        bg-clip-text text-transparent 
                        animate-scrollBg
                        "
                    >
                        University of Wah
                    </h4>
                </div>
            </footer>

            <div className="flex flex-col items-center text-center bg-gray-900 layer-overlay">
                <div className="container pt-0">
                    {/* Social media icons */}
                    <div className="mb-1 flex justify-center space-x-2">
                        {[
                            // Facebook
                            "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
                            // X (Twitter new logo or GitHub X depending)
                            "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
                            // Google
                            "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
                            // Instagram
                            "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
                            // LinkedIn
                            "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z",
                        ].map((d, i) => (
                            <a
                                key={i}
                                href="#!"
                                className="rounded-full p-3 transition text-gray-400 hover:text-theme-orange"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                    className="h-4 w-4"
                                >
                                    <path d={d} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}