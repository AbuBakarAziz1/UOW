export interface Leader {
    id: string;
    name: string;
    title: string;
    image: string;
    message: string;
    qualifications?: string[];
    email?: string;
    phone?: string;
}

export const leaders: Leader[] = [
    {
        id: "chancellor",
        name: "Sardar Saleem Haider Khan",
        title: "Chancellor",
        image: "/theme/images/directors/Chancellor.jpg",
        message: `It gives me immense pleasure to welcome you to the University of Wah (UW). The University of Wah is a private sector institution chartered by the Provincial Assembly of Punjab in 2009. The University is committed to providing quality education and fostering research excellence.

The University offers undergraduate, graduate, and doctoral programs in various disciplines including Engineering, Computer Science, Management Sciences, and Basic Sciences. Our faculty members are highly qualified and dedicated to nurturing the intellectual growth of our students.

We believe in creating an environment that promotes critical thinking, innovation, and ethical values. Our state-of-the-art facilities and infrastructure provide students with the best learning experience.

I encourage all students to make the most of the opportunities available at UW and strive for excellence in their academic and professional pursuits.

Best wishes for your success!`,
        qualifications: [
            "Hilal-i-Imtiaz (Military)",
            "Former Chairman Pakistan Ordnance Factories (POF)",
            "Distinguished Military Career",
        ],
    },
    {
        id: "chairman-bog",
        name: "Lt Gen Tahir Hameed Shah HI(M)",
        title: "Chairman Board of Governors",
        image: "/theme/images/directors/ViceChancellor.jpg",
        message: `I am honored to serve as the Chairman of the Board of Governors at the University of Wah. Our institution stands as a beacon of quality education and research in Pakistan.

The Board of Governors is committed to ensuring that UW maintains the highest standards of academic excellence and governance. We continuously work to improve our infrastructure, academic programs, and research capabilities.

Our vision is to develop UW as a world-class institution that produces graduates who are not only academically sound but also possess strong ethical values and leadership qualities.

I am confident that with the dedication of our faculty, staff, and students, UW will continue to grow and contribute significantly to the development of our nation.

Wishing you all the best in your academic journey!`,
        qualifications: [
            "Hilal-i-Imtiaz (Military)",
            "Former Lieutenant General, Pakistan Army",
            "Extensive Leadership Experience",
        ],
    },
    {
        id: "vice-chancellor",
        name: "Prof. Dr. Jameel-Un Nabi",
        title: "Vice Chancellor",
        image: "/theme/images/directors/ViceChancellor.jpg",
        message: `Welcome to the University of Wah! As the Vice Chancellor, I am delighted to share with you the exciting opportunities that await you at our institution.

The University of Wah is dedicated to providing a transformative educational experience that prepares students for success in an increasingly complex and interconnected world. Our commitment to academic excellence, research innovation, and community engagement sets us apart.

We offer a diverse range of programs designed to meet the evolving needs of industry and society. Our faculty members are distinguished scholars and practitioners who bring real-world experience into the classroom.

At UW, we believe in holistic development. Beyond academics, we encourage students to participate in extracurricular activities, sports, and community service. Our campus provides a vibrant and inclusive environment where students can grow personally and professionally.

I invite you to explore the opportunities at UW and become part of our dynamic community. Together, we will build a brighter future!`,
        qualifications: [
            "PhD in Physics",
            "Sitara-i-Imtiaz (Pride of Performance)",
            "Renowned Researcher in Nuclear Physics",
            "Former Professor, GC University",
        ],

    },
];

export const deans: Leader[] = [
    {
        id: "dean-basic-sciences",
        name: "Prof. Dr. Uzma Ghazanfar",
        title: "Dean Basic Sciences",
        image: "/theme/images/directors/ViceChancellor.jpg",
        message: `Welcome to the Faculty of Basic Sciences at the University of Wah. Our faculty is committed to providing quality education in fundamental sciences including Mathematics, Physics, Chemistry, Biology, and Statistics.

We focus on developing strong analytical and research skills in our students, preparing them for careers in academia, industry, and research. Our state-of-the-art laboratories and experienced faculty ensure an excellent learning environment.

The Faculty of Basic Sciences serves as the foundation for advanced studies in engineering, technology, and pure sciences. We encourage our students to engage in research projects and contribute to scientific knowledge.

I invite you to explore the exciting opportunities available in our faculty and join us in the pursuit of scientific excellence.`,
        qualifications: [
            "PhD in [Specialization]",
            "Research Publications in International Journals",
            "Extensive Teaching Experience",
        ],
    },
    {
        id: "dean-computer-science",
        name: "Prof. Dr. Syed Waqas Hassan",
        title: "Dean Computer Science",
        image: "/theme/images/directors/ViceChancellor.jpg",
        message: `Welcome to the Faculty of Computer Science at the University of Wah. In this rapidly evolving digital age, our faculty is at the forefront of computer science education and research.

We offer comprehensive programs in Computer Science, Artificial Intelligence, Cyber Security, and Software Engineering. Our curriculum is designed to meet international standards and industry requirements.

Our faculty members are active researchers contributing to cutting-edge areas such as machine learning, data science, cloud computing, and cybersecurity. We maintain strong industry partnerships to ensure our graduates are job-ready.

Join us to embark on an exciting journey in the world of technology and innovation!`,
        qualifications: [
            "PhD in Computer Science",
            "Industry Experience",
            "Research in AI and Machine Learning",
        ],
    },
    {
        id: "dean-engineering",
        name: "Prof. Dr. Adnan Tariq",
        title: "Dean Engineering",
        image: "/theme/images/directors/ViceChancellor.jpg",
        message: `The Faculty of Engineering at the University of Wah is dedicated to producing competent engineers who can address the technological challenges of the 21st century.

Our programs in Civil, Electrical, Mechanical, Chemical, and Mechatronics Engineering are accredited by the Pakistan Engineering Council (PEC) and follow international standards.

We emphasize hands-on learning through well-equipped laboratories, workshops, and industry collaborations. Our students gain practical experience through internships and final year projects with leading industries.

I encourage prospective students to join our faculty and be part of building Pakistan's technological future.`,
        qualifications: [
            "PhD in Engineering",
            "PEC Registered Engineer",
            "Industry and Academic Experience",
        ],
    },
    {
        id: "dean-management",
        name: "Prof. Dr. Khurram Shahzad",
        title: "Dean Management Sciences",
        image: "/theme/images/directors/ViceChancellor.jpg",
        message: `Welcome to the Faculty of Management Sciences at the University of Wah. Our faculty is committed to developing future business leaders and entrepreneurs.

We offer programs in Business Administration, Marketing, Finance, and Human Resource Management. Our curriculum combines theoretical knowledge with practical business skills through case studies, projects, and industry interactions.

Our faculty members bring a wealth of experience from both academia and industry. We focus on developing critical thinking, leadership, and ethical decision-making skills in our students.

The Faculty of Management Sciences provides excellent opportunities for networking, internships, and career development. Join us to build a successful career in the dynamic world of business!`,
        qualifications: [
            "PhD in Management/Business Administration",
            "NBEAC Accredited Programs",
            "Corporate Experience",
        ],
    },
    {
        id: "dean-humanities",
        name: "Prof. Dr. Asim Karim",
        title: "Dean Social Sciences & Humanities",
        image: "/theme/images/directors/ViceChancellor.jpg",
        message: `The Faculty of Social Sciences and Humanities at the University of Wah offers diverse programs that explore human society, culture, and behavior.

Our faculty includes departments of English, Education, Psychology, and Islamic Studies. We focus on developing critical thinking, communication skills, and cultural awareness.

We believe that social sciences and humanities play a crucial role in understanding and addressing societal challenges. Our programs prepare students for careers in education, social work, media, and public service.

Our research focuses on contemporary issues relevant to Pakistani society while maintaining global perspectives. I invite you to join our intellectually vibrant community and contribute to social development.`,
        qualifications: [
            "PhD in Social Sciences/Humanities",
            "Research Publications",
            "Academic Leadership Experience",
        ],
    },
];

export function getLeaderById(id: string): Leader | undefined {
    return leaders.find((leader) => leader.id === id);
}

export function getDeanById(id: string): Leader | undefined {
    return deans.find((dean) => dean.id === id);
}

export function getAllLeaderIds(): string[] {
    return leaders.map((leader) => leader.id);
}

export function getAllDeanIds(): string[] {
    return deans.map((dean) => dean.id);
}
