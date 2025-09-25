"use client";
import InnerPageLayout from "../../components/InnerPageLayout";
import { FaCalendarAlt, FaGraduationCap, FaExclamationCircle } from "react-icons/fa";

export default function ApplicationPage() {
  return (
    <InnerPageLayout section="admissions">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white">
        <div className="flex items-center gap-4">
          <FaCalendarAlt className="text-4xl" />
          <div>
            <h1 className="text-3xl font-bold">Apply Online</h1>
            <p className="text-green-100">Submit your application for University of Wah</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Application Steps */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-theme-blue mb-6">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Create Account", desc: "Register with your email" },
              { step: 2, title: "Fill Application", desc: "Complete all required fields" },
              { step: 3, title: "Submit Documents", desc: "Upload required documents" }
            ].map((item) => (
              <div key={item.step} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-theme-orange text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-theme-blue mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Placeholder */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
          <FaGraduationCap className="text-6xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-600 mb-4">Online Application Portal</h3>
          <p className="text-gray-500 mb-6">
            The application portal will be available here. Students can create accounts, 
            fill applications, and track their admission status.
          </p>
          <button className="bg-theme-blue text-white px-8 py-3 rounded-full font-bold hover:bg-theme-orange transition-colors duration-300">
            Coming Soon
          </button>
        </div>

        {/* Important Information */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <FaExclamationCircle className="text-yellow-600 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Before You Apply</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Review admission requirements carefully</li>
                <li>• Prepare all required documents in advance</li>
                <li>• Check application deadlines for your program</li>
                <li>• Have your academic transcripts ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}