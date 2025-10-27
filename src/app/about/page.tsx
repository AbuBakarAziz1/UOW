"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import Link from "next/link";
import Image from "next/image";
import {
  FaGraduationCap,
  FaUniversity,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function About() {
  // Content sourced and adapted from the official UW "At a Glance" page
  const lead = `The University of Wah (UW) is a private-sector higher education institution founded with the vision of achieving excellence in unbiased dissemination of quality education to all. Chartered in 2009, by Provincial Assembly of the Punjab, the University imparts knowledge in the fields of Engineering, Basic, Social, Computer, Management Sciences and Engineering Technology by inculcating universal Islamic values of truth, goodness and service to mankind on one hand and facilitation of active research environment on the other. The University is located in the exquisite, secure and pollution free environment of Wah Cantonment, 30 km from Islamabad. Boasting 100% literacy rate, Wah and adjoining Taxila have a culture steeped in history and are embellished with ancient artifacts as temples, shrines and archeological sites memorabilia of days past.`;

  const gallery = [
    {
      src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance1.jpg",
      alt: "Quaid Campus",
    },
    {
      src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance4.jpg",
      alt: "VC Secretariat",
    },
    {
      src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance5.jpg",
      alt: "Admin Block",
    },
    {
      src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance6.jpg",
      alt: "Directorates",
    },
  ];

  const colleges = [
    { label: "Mashal Degree College (MDC)", href: "http://mdc.uow.edu.pk/", image: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance3.jpg" },
    { label: "Wah Engineering College (WEC)", href: "http://www.wecuw.edu.pk/", image: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance2.jpg" },
  ];


  return (
    <InnerPageLayout section="about">
      {/* Hero */}
      <div className="relative bg-gray-50">
        <div className="relative h-36 md:h-48 lg:h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance1.jpg')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 to-orange-400/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">University of Wah</h1>
              <p className="mt-2 text-md md:text-base max-w-2xl italic text-orange-200">Quality Education for all</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Text */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">

            <span className="text-theme-blue"> University of Wah</span>{" "}
            <span className="text-red-600">at a Glance</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-normal text-justify">{lead}</p>

          <div className="prose max-w-none text-gray-700">
            <p className="text-normal text-justify mb-2">
              The University is offering 4-Years Bachelors, 2 years MPhil/MS and 3 years PhD Programs in the afore-mentioned disciplines. Mashal Degree College is its nursery of female students. UW is one of the few universities of Pakistan where female representation (students and faculty) exceeds 50%. Wah Engineering College offers BSc Engineering programs in the fields of Civil, Chemical, Electrical, Mechanical and Mechatronics Engineering and BS Engineering Technology programs in the fields of Chemical, Civil, Electrical, Mechanical, Mechatronics and Petroleum. The college also offers MS in Chemical, Construction Engineering & Management, Electrical, Mechanical and Mechatronics and PhD in Electrical and Mechanical Engineering.
            </p>
          </div>
        </div>

        {/* Constituent Colleges */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
            <span className="text-theme-blue">Constituent</span>{" "}
            <span className="text-red-600">Campuses</span>

          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colleges.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group h-64"
              >
                <img
                  src={c.image}
                  alt={c.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {c.label}
                    <FaExternalLinkAlt className="text-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-200 text-sm">Click to visit the official website</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <div className="prose max-w-none text-gray-700">

            <p className="text-normal text-justify mb-2">
              University of Wah is an upcoming research-intensive institution with high impact factor publications from its faculty. UW published three research journals namely UW Journal of Science and Technology (UWJST), UW Journal of Social Sciences (UWJSS) and UW Journal of Management Sciences (UWJMS). UWJST and UWJSS have also been placed in the HEC recognized “Y” Category. They are peer reviewed journals with quality publications and provide a quality platform to the researchers for publishing their research work.
            </p>

            <p className="text-normal text-justify mb-2">
              The University management has recently taken numerous steps to improve the overall learning experience for students including extensive infrastructure developments, laboratory enhancement, and extension of sports facilities and induction of PERN-II for its networked environment. The University has also successfully conducted online classes during COVID’19.
            </p>

            <p className="text-normal text-justify mb-2">
              University of Wah provides high standard student’s services which include well equipped classrooms and digital library. Hostels for male and female students, sports fields, transport, ATM/Banking, photocopying, and related facilities are conveniently located. A well-managed and functional Day Care Centre has also been established to facilitate faculty members. Counseling and Placement Directorate (CPD) of the University provides counseling at all stages of a student’s career planning and hosts a strong recruitment program, whereby industrialist and employers are invited to campus to recruit fresh graduates.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
            <span className="text-theme-blue">Campus &</span>{" "}
            <span className="text-red-600">Facilities</span>
             
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((g) => (
              <div key={g.src} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group h-64">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-semibold text-white text-center">{g.alt}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="prose max-w-none text-gray-700">
            <p className="text-normal text-justify mb-2">
              University of Wah shares the vision of Higher Education Commission (HEC) on academic integrity and institutional quality. UW has adopted the recently announced HEC Undergraduate Education Policy 2020. The University’s Quality Assurance and Enhancement Cell (QA&EC) aims to provide guidance and assistance to the university proponents in technical and academic aspects for continuous improvement of quality. UW is amongst the few universities in the country to achieve ISO 9001:2015 Certification and will soon acquire ISO 21001:2018 Educational Organizational Management System (EOMS), the latest International Standard exclusively for the Educational Institutions. Additionally, the University is open to external / third party evaluations and has volunteered for and successfully undergone visits by the HEC assessment teams, which include the ‘Institutional Performance Evaluation Process’ (IPEP) and ‘PM’s Directive for Quality Assurance in Higher Education’. The members regularly attend workshops, seminars and conferences organized by HEC to establish and sustain a transparent and creative academic environment consistent with mission of the University as well as HEC.
            </p>

            <p className="text-normal text-justify mb-2">
              The University programs have been continually accredited by the relevant Accreditation Councils and National Accreditation agencies such as National Business Education Accreditation Council (NBEAC), National Computing Education Accreditation Council (NCEAC), National Council for Teachers’ Education (NACTE) and Pakistan Engineering Council (PEC).
            </p>

            <p className="text-normal text-justify mb-2">
              The University of Wah has manifested remarkable progress in early years of its inception. Our graduates are committed to making inroads into unchartered areas of knowledge in emerging and traditional disciplines. The University has engaged highly qualified and experienced faculty, with an ever-growing 5000 students-base, over 250 dedicated faculty members and an efficient management, it is poised to emerge as an institution responsive to technological change, higher education and research needs of the country by providing enabling environments.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-100 via-sky-100 to-orange-100 rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-sky-900 via-sky-700 to-red-600 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-theme-blue/10 p-2 rounded-full">
                    <FaMapMarkerAlt className="text-xl text-theme-blue" />
                  </div>
                  <span className="text-gray-700">Quaid Avenue, Wah Cantt-47040</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-theme-blue/10 p-2 rounded-full">
                    <FaPhone className="text-xl text-theme-blue" />
                  </div>
                  <span className="text-gray-700">051-9157000, 051-905525256-7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-theme-blue/10 p-2 rounded-full">
                    <FaEnvelope className="text-xl text-theme-blue" />
                  </div>
                  <span className="text-gray-700">info@uow.edu.pk</span>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <h4 className="font-semibold mb-4 text-lg text-gray-800">Follow Us on</h4>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/UOW.Official/"
                      className="bg-theme-blue/10 hover:bg-theme-blue hover:text-white text-sky-900 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                      aria-label="Facebook">
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a href="https://twitter.com/UOWOfficial"
                      className="bg-theme-blue/10 hover:bg-theme-blue hover:text-white text-sky-900 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                      aria-label="Twitter">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href="https://www.instagram.com/uow.official/"
                      className="bg-theme-orange/10 hover:bg-theme-orange hover:text-white text-orange-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                      aria-label="Instagram">
                      <FaInstagram className="text-xl" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC4WdxeIJsll0OvFWm_4-F9g"
                      className="bg-red-100 hover:bg-red-600 hover:text-white text-red-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                      aria-label="YouTube">
                      <FaYoutube className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}