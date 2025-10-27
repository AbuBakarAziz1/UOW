export interface Course {
  code: string;
  title: string;
  preRequisite: string;
  creditHours: string;
}

export interface Semester {
  semesterNumber: number;
  courses: Course[];
  totalCredits: string;
}

export interface ProgramObjective {
  code: string;
  description: string;
}

export interface Program {
  id: string;
  name: string;
  departmentId: string;
  departmentName: string;
  faculty: string;
  image: string;
  objectives: ProgramObjective[];
  duration: string;
  eligibilityCriteria: string[];
  deficiency?: string;
  totalCreditHours: string;
  semesters: Semester[];
}

export const programs: Program[] = [
  {
    id: "bs-cyber-security",
    name: "BS Cyber Security",
    departmentId: "computer-science",
    departmentName: "Department of Computer Science",
    faculty: "Faculty of Computer Science",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    objectives: [
      {
        code: "PO-01",
        description: "Apply knowledge of Cyber Security and practices to design and develop effective solutions for complex computing problems."
      },
      {
        code: "PO-02",
        description: "Demonstrate strong moral and ethical values to become an effective professional in Cyber Security."
      },
      {
        code: "PO-03",
        description: "Demonstrate enhancement in knowledge of Cyber Security and interpersonal skills for sustainable career development and professional growth."
      }
    ],
    duration: "4-years (8 Semesters)",
    eligibilityCriteria: [
      "At least 50% marks in Intermediate (HSSC) examination with Mathematics or equivalent qualification with Mathematics, certified by IBCC.",
      "At least 50% marks in Intermediate (HSSC) examination with Pre-Medical or equivalent qualification, certified by IBCC."
    ],
    deficiency: "Students with pre-medical, must have to pass deficiency courses of Mathematics of 6 credit hours in first two semesters.",
    totalCreditHours: "130",
    semesters: [
      {
        semesterNumber: 1,
        totalCredits: "18 (15+3)",
        courses: [
          { code: "CS-111", title: "Programming Fundamentals", preRequisite: "-", creditHours: "3+1" },
          { code: "GE-181", title: "Application of information and communication technologies", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-153", title: "Discrete Structures", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-161", title: "Islamic Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "GE-143", title: "Functional English", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-125", title: "Applied Physics", preRequisite: "-", creditHours: "2+1" }
        ]
      },
      {
        semesterNumber: 2,
        totalCredits: "17 (14+3)",
        courses: [
          { code: "CS-112", title: "Object Oriented Programming", preRequisite: "CS-111", creditHours: "3+1" },
          { code: "CS-151", title: "Database Systems", preRequisite: "-", creditHours: "3+1" },
          { code: "STS-202", title: "Probability and Statistics", preRequisite: "-", creditHours: "3+0" },
          { code: "CS-121", title: "Digital Logic and Design", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-144", title: "Expository Writing", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 3,
        totalCredits: "18 (14+4)",
        courses: [
          { code: "CS-201", title: "Data Structures", preRequisite: "CS-112", creditHours: "3+1" },
          { code: "CS-251", title: "Introduction to Information Security", preRequisite: "-", creditHours: "2+1" },
          { code: "CS-202", title: "Artificial Intelligence", preRequisite: "-", creditHours: "2+1" },
          { code: "CS-241", title: "Computer Networks", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-154", title: "Calculus and Analytical Geometry (QR-II)", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 4,
        totalCredits: "18 (15+3)",
        courses: [
          { code: "CS-221", title: "Comp. Organization & Assembly Language", preRequisite: "CS-121", creditHours: "2+1" },
          { code: "CYS-251", title: "Cyber Security (CYS Domain Core I)", preRequisite: "-", creditHours: "2+1" },
          { code: "CYS-271", title: "Information Assurance (CYS Domain Core II)", preRequisite: "-", creditHours: "2+1" },
          { code: "CS-231", title: "Software Engineering", preRequisite: "-", creditHours: "3+0" },
          { code: "MTH-147", title: "Multivariable Calculus", preRequisite: "-", creditHours: "3+0" },
          { code: "MTH-163", title: "Linear Algebra", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 5,
        totalCredits: "18 (15+3)",
        courses: [
          { code: "CYS-301", title: "Network Security", preRequisite: "CS-241", creditHours: "2+1" },
          { code: "CYS-311", title: "Cryptography", preRequisite: "-", creditHours: "2+1" },
          { code: "CS-311", title: "Operating Systems", preRequisite: "CS-221", creditHours: "2+1" },
          { code: "CS-XXX", title: "Computing Elective-I", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-162", title: "Pakistan Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "MGT-XXX", title: "Management Elective", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 6,
        totalCredits: "18 (12+6)",
        courses: [
          { code: "CYS-321", title: "Digital Forensics", preRequisite: "-", creditHours: "2+1" },
          { code: "CYS-331", title: "Ethical Hacking", preRequisite: "CYS-251", creditHours: "2+1" },
          { code: "CS-XXX", title: "Computing Elective-II", preRequisite: "-", creditHours: "3+0" },
          { code: "XXX-XXX", title: "University Elective-I", preRequisite: "-", creditHours: "3+0" },
          { code: "CS-391", title: "Technical Report Writing", preRequisite: "-", creditHours: "0+3" }
        ]
      },
      {
        semesterNumber: 7,
        totalCredits: "18 (12+6)",
        courses: [
          { code: "CYS-411", title: "Malware Analysis", preRequisite: "-", creditHours: "2+1" },
          { code: "CYS-421", title: "Web Application Security", preRequisite: "-", creditHours: "2+1" },
          { code: "CS-XXX", title: "Computing Elective-III", preRequisite: "-", creditHours: "3+0" },
          { code: "XXX-XXX", title: "University Elective-II", preRequisite: "-", creditHours: "3+0" },
          { code: "CS-491", title: "Final Year Project-I", preRequisite: "CS-391", creditHours: "0+3" }
        ]
      },
      {
        semesterNumber: 8,
        totalCredits: "15 (6+9)",
        courses: [
          { code: "CYS-431", title: "Cyber Security Management", preRequisite: "-", creditHours: "3+0" },
          { code: "XXX-XXX", title: "University Elective-III", preRequisite: "-", creditHours: "3+0" },
          { code: "CS-492", title: "Final Year Project-II", preRequisite: "CS-491", creditHours: "0+6" },
          { code: "CS-499", title: "Professional Practices", preRequisite: "-", creditHours: "0+3" }
        ]
      }
    ]
  },
  {
    id: "bs-computer-science",
    name: "BS Computer Science",
    departmentId: "computer-science",
    departmentName: "Department of Computer Science",
    faculty: "Faculty of Computer Science",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    objectives: [
      {
        code: "PO-01",
        description: "Apply knowledge of computing fundamentals and computing specialization to the solution of complex computing problems."
      },
      {
        code: "PO-02",
        description: "Design, implement and evaluate computer-based systems, processes, components or programs to meet desired needs within realistic constraints."
      },
      {
        code: "PO-03",
        description: "Function effectively as a member or leader of a team engaged in computing activities."
      }
    ],
    duration: "4-years (8 Semesters)",
    eligibilityCriteria: [
      "At least 50% marks in Intermediate (HSSC) examination with Mathematics or equivalent qualification with Mathematics, certified by IBCC.",
      "At least 50% marks in Intermediate (HSSC) examination with Pre-Medical or equivalent qualification, certified by IBCC."
    ],
    deficiency: "Students with pre-medical, must have to pass deficiency courses of Mathematics of 6 credit hours in first two semesters.",
    totalCreditHours: "133",
    semesters: [
      {
        semesterNumber: 1,
        totalCredits: "18 (15+3)",
        courses: [
          { code: "CS-111", title: "Programming Fundamentals", preRequisite: "-", creditHours: "3+1" },
          { code: "GE-181", title: "Application of ICT", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-153", title: "Discrete Structures", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-161", title: "Islamic Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "GE-143", title: "Functional English", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-125", title: "Applied Physics", preRequisite: "-", creditHours: "2+1" }
        ]
      },
      {
        semesterNumber: 2,
        totalCredits: "17 (14+3)",
        courses: [
          { code: "CS-112", title: "Object Oriented Programming", preRequisite: "CS-111", creditHours: "3+1" },
          { code: "CS-151", title: "Database Systems", preRequisite: "-", creditHours: "3+1" },
          { code: "STS-202", title: "Probability and Statistics", preRequisite: "-", creditHours: "3+0" },
          { code: "CS-121", title: "Digital Logic and Design", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-144", title: "Expository Writing", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 3,
        totalCredits: "18 (14+4)",
        courses: [
          { code: "CS-201", title: "Data Structures", preRequisite: "CS-112", creditHours: "3+1" },
          { code: "CS-251", title: "Information Security", preRequisite: "-", creditHours: "2+1" },
          { code: "CS-202", title: "Artificial Intelligence", preRequisite: "-", creditHours: "2+1" },
          { code: "CS-241", title: "Computer Networks", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-154", title: "Calculus and Analytical Geometry", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 4,
        totalCredits: "18 (15+3)",
        courses: [
          { code: "CS-221", title: "Computer Organization & Assembly Language", preRequisite: "CS-121", creditHours: "2+1" },
          { code: "CS-211", title: "Design and Analysis of Algorithms", preRequisite: "CS-201", creditHours: "3+0" },
          { code: "CS-231", title: "Software Engineering", preRequisite: "-", creditHours: "3+0" },
          { code: "MTH-147", title: "Multivariable Calculus", preRequisite: "-", creditHours: "3+0" },
          { code: "MTH-163", title: "Linear Algebra", preRequisite: "-", creditHours: "3+0" }
        ]
      }
    ]
  },
  {
    id: "bs-artificial-intelligence",
    name: "BS Artificial Intelligence",
    departmentId: "artificial-intelligence",
    departmentName: "Department of Artificial Intelligence",
    faculty: "Faculty of Computer Science",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    objectives: [
      {
        code: "PO-01",
        description: "Apply knowledge of AI fundamentals and machine learning to solve complex real-world problems."
      },
      {
        code: "PO-02",
        description: "Design and implement intelligent systems using state-of-the-art AI techniques and tools."
      },
      {
        code: "PO-03",
        description: "Demonstrate ethical and professional responsibility in the development and deployment of AI systems."
      }
    ],
    duration: "4-years (8 Semesters)",
    eligibilityCriteria: [
      "At least 50% marks in Intermediate (HSSC) examination with Mathematics or equivalent qualification with Mathematics, certified by IBCC.",
      "At least 50% marks in Intermediate (HSSC) examination with Pre-Medical or equivalent qualification, certified by IBCC."
    ],
    deficiency: "Students with pre-medical, must have to pass deficiency courses of Mathematics of 6 credit hours in first two semesters.",
    totalCreditHours: "132",
    semesters: [
      {
        semesterNumber: 1,
        totalCredits: "18 (15+3)",
        courses: [
          { code: "CS-111", title: "Programming Fundamentals", preRequisite: "-", creditHours: "3+1" },
          { code: "GE-181", title: "Application of ICT", preRequisite: "-", creditHours: "2+1" },
          { code: "MTH-101", title: "Calculus I", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-161", title: "Islamic Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "GE-143", title: "Functional English", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-125", title: "Applied Physics", preRequisite: "-", creditHours: "2+1" }
        ]
      },
      {
        semesterNumber: 2,
        totalCredits: "17 (14+3)",
        courses: [
          { code: "CS-112", title: "Object Oriented Programming", preRequisite: "CS-111", creditHours: "3+1" },
          { code: "MTH-163", title: "Linear Algebra", preRequisite: "-", creditHours: "3+0" },
          { code: "STS-202", title: "Probability and Statistics", preRequisite: "-", creditHours: "3+0" },
          { code: "CS-121", title: "Digital Logic and Design", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-144", title: "Expository Writing", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 3,
        totalCredits: "18 (14+4)",
        courses: [
          { code: "CS-201", title: "Data Structures", preRequisite: "CS-112", creditHours: "3+1" },
          { code: "AI-201", title: "Introduction to Artificial Intelligence", preRequisite: "-", creditHours: "3+1" },
          { code: "MTH-201", title: "Differential Equations", preRequisite: "MTH-101", creditHours: "3+0" },
          { code: "GE-153", title: "Discrete Structures", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 4,
        totalCredits: "18 (12+6)",
        courses: [
          { code: "AI-211", title: "Machine Learning", preRequisite: "AI-201", creditHours: "3+1" },
          { code: "CS-211", title: "Design and Analysis of Algorithms", preRequisite: "CS-201", creditHours: "3+0" },
          { code: "AI-221", title: "Neural Networks and Deep Learning", preRequisite: "-", creditHours: "2+1" },
          { code: "GE-162", title: "Pakistan Studies", preRequisite: "-", creditHours: "2+0" }
        ]
      }
    ]
  },
  {
    id: "bs-mathematics",
    name: "BS Mathematics",
    departmentId: "mathematics",
    departmentName: "Department of Mathematics",
    faculty: "Faculty of Basic Sciences",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop",
    objectives: [
      {
        code: "PO-01",
        description: "Apply mathematical reasoning and techniques to solve theoretical and applied problems."
      },
      {
        code: "PO-02",
        description: "Demonstrate proficiency in core areas of pure and applied mathematics."
      },
      {
        code: "PO-03",
        description: "Communicate mathematical ideas effectively both orally and in writing."
      }
    ],
    duration: "4-years (8 Semesters)",
    eligibilityCriteria: [
      "At least 50% marks in Intermediate (HSSC) examination with Mathematics or equivalent qualification, certified by IBCC."
    ],
    totalCreditHours: "130",
    semesters: [
      {
        semesterNumber: 1,
        totalCredits: "17 (17+0)",
        courses: [
          { code: "MTH-101", title: "Calculus I", preRequisite: "-", creditHours: "3+0" },
          { code: "MTH-111", title: "Set Theory", preRequisite: "-", creditHours: "3+0" },
          { code: "PHY-101", title: "Mechanics", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-161", title: "Islamic Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "GE-143", title: "Functional English", preRequisite: "-", creditHours: "3+0" },
          { code: "CS-101", title: "Introduction to Computing", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 2,
        totalCredits: "17 (17+0)",
        courses: [
          { code: "MTH-102", title: "Calculus II", preRequisite: "MTH-101", creditHours: "3+0" },
          { code: "MTH-163", title: "Linear Algebra", preRequisite: "-", creditHours: "3+0" },
          { code: "PHY-102", title: "Electricity and Magnetism", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-162", title: "Pakistan Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "GE-144", title: "Expository Writing", preRequisite: "-", creditHours: "3+0" },
          { code: "STS-101", title: "Introduction to Statistics", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 3,
        totalCredits: "18 (18+0)",
        courses: [
          { code: "MTH-201", title: "Differential Equations", preRequisite: "MTH-102", creditHours: "3+0" },
          { code: "MTH-211", title: "Real Analysis I", preRequisite: "MTH-102", creditHours: "3+0" },
          { code: "MTH-221", title: "Abstract Algebra I", preRequisite: "-", creditHours: "3+0" },
          { code: "MTH-231", title: "Number Theory", preRequisite: "-", creditHours: "3+0" },
          { code: "MTH-241", title: "Vector and Tensor Analysis", preRequisite: "MTH-163", creditHours: "3+0" },
          { code: "GE-XXX", title: "University Elective-I", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 4,
        totalCredits: "18 (18+0)",
        courses: [
          { code: "MTH-212", title: "Real Analysis II", preRequisite: "MTH-211", creditHours: "3+0" },
          { code: "MTH-222", title: "Abstract Algebra II", preRequisite: "MTH-221", creditHours: "3+0" },
          { code: "MTH-251", title: "Complex Analysis", preRequisite: "MTH-211", creditHours: "3+0" },
          { code: "MTH-261", title: "Numerical Analysis", preRequisite: "MTH-201", creditHours: "3+0" },
          { code: "MTH-271", title: "Geometry", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-XXX", title: "University Elective-II", preRequisite: "-", creditHours: "3+0" }
        ]
      }
    ]
  },
  {
    id: "bs-chemistry",
    name: "BS Chemistry",
    departmentId: "chemistry",
    departmentName: "Department of Chemistry",
    faculty: "Faculty of Basic Sciences",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1200&h=600&fit=crop",
    objectives: [
      {
        code: "PO-01",
        description: "Apply fundamental concepts and principles of chemistry to solve problems in various branches of chemistry."
      },
      {
        code: "PO-02",
        description: "Demonstrate proficiency in laboratory techniques and scientific methodology."
      },
      {
        code: "PO-03",
        description: "Communicate scientific information effectively and work collaboratively in teams."
      }
    ],
    duration: "4-years (8 Semesters)",
    eligibilityCriteria: [
      "At least 50% marks in Intermediate (HSSC) examination with Chemistry or equivalent qualification, certified by IBCC."
    ],
    totalCreditHours: "130",
    semesters: [
      {
        semesterNumber: 1,
        totalCredits: "17 (11+6)",
        courses: [
          { code: "CHEM-101", title: "General Chemistry-I", preRequisite: "-", creditHours: "3+0" },
          { code: "CHEM-111", title: "General Chemistry Lab-I", preRequisite: "-", creditHours: "0+3" },
          { code: "MTH-101", title: "Calculus I", preRequisite: "-", creditHours: "3+0" },
          { code: "PHY-101", title: "Mechanics", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-161", title: "Islamic Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "GE-143", title: "Functional English", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 2,
        totalCredits: "17 (11+6)",
        courses: [
          { code: "CHEM-102", title: "General Chemistry-II", preRequisite: "CHEM-101", creditHours: "3+0" },
          { code: "CHEM-112", title: "General Chemistry Lab-II", preRequisite: "CHEM-111", creditHours: "0+3" },
          { code: "MTH-102", title: "Calculus II", preRequisite: "MTH-101", creditHours: "3+0" },
          { code: "PHY-102", title: "Electricity and Magnetism", preRequisite: "-", creditHours: "3+0" },
          { code: "GE-162", title: "Pakistan Studies", preRequisite: "-", creditHours: "2+0" },
          { code: "GE-144", title: "Expository Writing", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 3,
        totalCredits: "18 (12+6)",
        courses: [
          { code: "CHEM-201", title: "Organic Chemistry-I", preRequisite: "CHEM-102", creditHours: "3+0" },
          { code: "CHEM-211", title: "Organic Chemistry Lab-I", preRequisite: "-", creditHours: "0+3" },
          { code: "CHEM-221", title: "Physical Chemistry-I", preRequisite: "CHEM-102", creditHours: "3+0" },
          { code: "CHEM-231", title: "Analytical Chemistry", preRequisite: "CHEM-102", creditHours: "3+0" },
          { code: "CHEM-241", title: "Analytical Chemistry Lab", preRequisite: "-", creditHours: "0+3" },
          { code: "MTH-163", title: "Linear Algebra", preRequisite: "-", creditHours: "3+0" }
        ]
      },
      {
        semesterNumber: 4,
        totalCredits: "18 (12+6)",
        courses: [
          { code: "CHEM-202", title: "Organic Chemistry-II", preRequisite: "CHEM-201", creditHours: "3+0" },
          { code: "CHEM-212", title: "Organic Chemistry Lab-II", preRequisite: "CHEM-211", creditHours: "0+3" },
          { code: "CHEM-222", title: "Physical Chemistry-II", preRequisite: "CHEM-221", creditHours: "3+0" },
          { code: "CHEM-251", title: "Inorganic Chemistry-I", preRequisite: "CHEM-102", creditHours: "3+0" },
          { code: "CHEM-261", title: "Inorganic Chemistry Lab", preRequisite: "-", creditHours: "0+3" },
          { code: "GE-XXX", title: "University Elective", preRequisite: "-", creditHours: "3+0" }
        ]
      }
    ]
  }
];

export function getProgramById(id: string): Program | undefined {
  return programs.find(prog => prog.id === id);
}

export function getAllProgramIds(): string[] {
  return programs.map(prog => prog.id);
}

export function getProgramsByDepartment(departmentId: string): Program[] {
  return programs.filter(prog => prog.departmentId === departmentId);
}
