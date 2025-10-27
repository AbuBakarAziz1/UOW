"use client";

import InnerPageLayout from "../../components/InnerPageLayout";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function MissionVision() {
    return (
        <InnerPageLayout section="about">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Vision Section */}
                <div className="mb-4">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">
                        <span className="text-theme-blue">Vision &</span> <span className="text-red-600"> Mission</span>
                    </h2>
                </div>

                <div className="mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-8 md:p-12 shadow-lg border-l-4 border-theme-blue">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-gradient-to-br from-theme-blue to-sky-600 p-4 rounded-full">
                                <FaEye className="text-2xl text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                <span className="text-theme-blue">Vision</span>
                            </h2>
                        </div>
                        <p className="text-gray-700 text-lg md:text-xl text-justify leading-relaxed font-medium">
                            To be amongst the leading universities, producing academically competent, socially responsible and ethically strong graduates to play a constructive role in the progress and development nationally and globally.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mb-8">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 md:p-12 shadow-lg border-l-4 border-theme-orange">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-gradient-to-br from-theme-orange to-red-600 p-4 rounded-full">
                                <FaBullseye className="text-2xl text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                <span className="text-red-600">Mission</span>
                            </h2>
                        </div>
                        <p className="text-gray-700 text-lg md:text-xl text-justify leading-relaxed font-medium">
                            To provide a conducive academic and research environment for free exchange of ideas and developing positive personality traits among the students to transform them into a qualified, responsive and effective human capital for the society.
                        </p>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
