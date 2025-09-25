"use client";
import InnerPageLayout from "../../components/InnerPageLayout";
import { FaFileAlt, FaGraduationCap, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Requirements() {
  const requirements = [
    {
      title: "Undergraduate Programs",
      icon: FaGraduationCap,
      items: [
        "Intermediate (12 years) with minimum 60% marks",
        "Valid NTS/University entry test score",
        "Original academic transcripts",
        "Copy of CNIC/B-Form",
        "Recent passport-size photographs"
      ]
    },
    {
      title: "Graduate Programs",
      icon: FaFileAlt,
      items: [
        "Bachelor's degree with minimum CGPA 2.5/4.0",
        "GRE/GAT General test score (if required)",
        "Two academic reference letters",
        "Statement of Purpose",
        "Research proposal (for research programs)"
      ]
    }
  ];

  return (
    <InnerPageLayout section="admissions">
      {/* Header */}
      <div className="bg-gradient-to-r from-theme-blue to-theme-orange p-8 text-white">
        <div className="flex items-center gap-4">
          <FaFileAlt className="text-4xl" />
          <div>
            <h1 className="text-3xl font-bold">Admission Requirements</h1>
            <p className="text-blue-100">Complete eligibility criteria for all programs</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* General Requirements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-theme-blue mb-4">General Requirements</h2>
          <div className="bg-blue-50 border-l-4 border-theme-blue p-4 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-theme-blue mt-1" />
              <div>
                <p className="text-gray-700">
                  All applicants must submit complete application forms with required documents. 
                  International students may need additional documentation including visa status and English proficiency scores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program-specific Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <Icon className="text-2xl text-theme-orange" />
                    <h3 className="text-xl font-bold">{req.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notes */}
        <div className="bg-orange-50 border-l-4 border-theme-orange p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="text-theme-orange mt-1" />
            <div>
              <h3 className="text-lg font-bold text-theme-orange mb-2">Important Notes</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• All documents must be attested by relevant authorities</li>
                <li>• International transcripts require HEC equivalence</li>
                <li>• Application fee is non-refundable</li>
                <li>• Requirements may vary by program - check specific program pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}