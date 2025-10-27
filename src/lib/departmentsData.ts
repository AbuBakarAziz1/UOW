export interface Program {
  name: string;
  duration: string;
  entryRequirements: string;
}

export interface Department {
  id: string;
  name: string;
  faculty: string;
  image: string;
  description: string[];
  programs: Program[];
}

export const departments: Department[] = [
  // Faculty of Basic Sciences
  {
    id: "biosciences",
    name: "Department of Biosciences",
    faculty: "Faculty of Basic Sciences",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=600&fit=crop",
    description: [
      "The Department of Biosciences at the University of Wah is committed to excellence in teaching and research in the biological sciences. Our department offers a comprehensive curriculum that covers various aspects of modern biology, including molecular biology, genetics, microbiology, and biotechnology.",
      "Our state-of-the-art laboratories and experienced faculty members provide students with hands-on experience and mentorship to excel in their academic and professional careers. We emphasize both theoretical knowledge and practical skills to prepare our students for the challenges of the 21st century."
    ],
    programs: [
      {
        name: "BS Biosciences",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc with at least 2nd division or equivalent"
      },
      {
        name: "MS Biosciences",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/BSc (Hons) in relevant field with minimum CGPA 2.5/4.0"
      },
      {
        name: "PhD Biosciences",
        duration: "3-5 Years",
        entryRequirements: "MS/MPhil in relevant field with minimum CGPA 3.0/4.0"
      }
    ]
  },
  {
    id: "chemistry",
    name: "Department of Chemistry",
    faculty: "Faculty of Basic Sciences",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1200&h=600&fit=crop",
    description: [
      "The Department of Chemistry offers comprehensive programs in chemical sciences, focusing on both theoretical foundations and practical applications. Our curriculum encompasses organic, inorganic, physical, and analytical chemistry.",
      "With modern laboratories and research facilities, we provide students with opportunities to engage in cutting-edge research and develop strong analytical and problem-solving skills essential for careers in chemistry and related fields."
    ],
    programs: [
      {
        name: "BS Chemistry",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Medical/Pre-Engineering with at least 2nd division"
      },
      {
        name: "MS Chemistry",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/BSc (Hons) in Chemistry with minimum CGPA 2.5/4.0"
      },
      {
        name: "PhD Chemistry",
        duration: "3-5 Years",
        entryRequirements: "MS/MPhil in Chemistry with minimum CGPA 3.0/4.0"
      }
    ]
  },
  {
    id: "mathematics",
    name: "Department of Mathematics",
    faculty: "Faculty of Basic Sciences",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop",
    description: [
      "The Department of Mathematics is dedicated to advancing mathematical knowledge and its applications. Our programs emphasize both pure and applied mathematics, providing students with strong analytical and computational skills.",
      "Our faculty members are actively engaged in research across various areas of mathematics, and we encourage students to participate in research projects and mathematical competitions."
    ],
    programs: [
      {
        name: "BS Mathematics",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering/ICS with at least 2nd division"
      },
      {
        name: "MS Mathematics",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/BSc (Hons) in Mathematics with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "physics",
    name: "Department of Physics",
    faculty: "Faculty of Basic Sciences",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1200&h=600&fit=crop",
    description: [
      "The Department of Physics offers comprehensive programs in theoretical and experimental physics. Our curriculum covers classical mechanics, quantum mechanics, electromagnetism, thermodynamics, and modern physics.",
      "We maintain well-equipped laboratories for experiments in various branches of physics and encourage students to develop research skills and critical thinking abilities."
    ],
    programs: [
      {
        name: "BS Physics",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering with at least 2nd division"
      },
      {
        name: "MS Physics",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/BSc (Hons) in Physics with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "statistics",
    name: "Department of Statistics",
    faculty: "Faculty of Basic Sciences",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    description: [
      "The Department of Statistics provides comprehensive training in statistical theory, methods, and applications. Our programs equip students with skills in data analysis, statistical computing, and research methodology.",
      "With the growing importance of data science and analytics, our graduates are well-prepared for careers in research, industry, and academia."
    ],
    programs: [
      {
        name: "BS Statistics",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering/ICS with at least 2nd division"
      },
      {
        name: "MS Statistics",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/BSc (Hons) in Statistics/Mathematics with minimum CGPA 2.5/4.0"
      }
    ]
  },

  // Faculty of Computer Science
  {
    id: "computer-science",
    name: "Department of Computer Science",
    faculty: "Faculty of Computer Science",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    description: [
      "The Department of Computer Science is at the forefront of technological education and research. Our programs cover software engineering, algorithms, data structures, computer networks, database systems, and emerging technologies.",
      "We emphasize hands-on learning through programming projects, internships, and industry collaborations to ensure our graduates are job-ready and equipped with the latest technical skills."
    ],
    programs: [
      {
        name: "BS Computer Science",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "At least 50% marks in Intermediate (HSSC) examination with Mathematics OR equivalent qualification with Mathematics, certified by IBCC. OR At least 50% marks in Intermediate (HSSC) examination with Pre-Medical or equivalent qualification, certified by IBCC."
      },
      {
        name: "BS Artificial Intelligence",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "At least 50% marks in Intermediate (HSSC) examination with Mathematics OR equivalent qualification with Mathematics, certified by IBCC. OR At least 50% marks in Intermediate (HSSC) examination with Pre-Medical or equivalent qualification, certified by IBCC."
      },
      {
        name: "BS Cyber Security",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "At least 50% marks in Intermediate (HSSC) examination with Mathematics OR equivalent qualification with Mathematics, certified by IBCC. OR At least 50% marks in Intermediate (HSSC) examination with Pre-Medical or equivalent qualification, certified by IBCC."
      },
      {
        name: "MS Computer Science",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS(HONS)/MSc in relevant discipline with minimum CGPA 2.50/4.00 OR equivalent (55%), UW Entry Test or GAT-General (Minimum 50% Marks) OR GRE-General (Minimum 50 Percentile)"
      },
      {
        name: "Ph.D. Computer Science",
        duration: "3 Years (6 Semesters)",
        entryRequirements: "MS/MPhil Degree in relevant discipline, UW Entry Test (with 70% marks) OR GAT-Subject/GRE-Subject (with 60% Marks/Percentile) and Interview, Minimum CGPA 3.00/4.00"
      }
    ]
  },
  {
    id: "artificial-intelligence",
    name: "Department of Artificial Intelligence",
    faculty: "Faculty of Computer Science",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    description: [
      "The Department of Artificial Intelligence offers cutting-edge programs in AI, machine learning, deep learning, and data science. Our curriculum is designed to meet the growing demand for AI professionals in various industries.",
      "Students gain expertise in neural networks, natural language processing, computer vision, and intelligent systems through both theoretical coursework and practical projects."
    ],
    programs: [
      {
        name: "BS Artificial Intelligence",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering/ICS with at least 2nd division"
      },
      {
        name: "MS Artificial Intelligence",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS in CS/AI/DS/SE with minimum CGPA 2.5/4.0"
      }
    ]
  },

  // Faculty of Management Sciences
  {
    id: "business-administration",
    name: "Department of Business Administration",
    faculty: "Faculty of Management Sciences",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=600&fit=crop",
    description: [
      "The Department of Business Administration offers comprehensive business education focusing on management, marketing, finance, and entrepreneurship. Our programs develop leadership skills and business acumen.",
      "We combine theoretical knowledge with practical exposure through case studies, internships, and industry visits to prepare students for successful careers in the corporate world."
    ],
    programs: [
      {
        name: "BBA (Hons)",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc/FA/ICS with at least 2nd division or equivalent"
      },
      {
        name: "MBA",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "Bachelor's degree (16 years) with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "management-sciences",
    name: "Department of Management Sciences",
    faculty: "Faculty of Management Sciences",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    description: [
      "The Department of Management Sciences focuses on developing managerial and analytical skills required in modern organizations. Our programs cover strategic management, operations management, and organizational behavior.",
      "Students are trained to become effective decision-makers and leaders through a blend of theoretical concepts and practical applications."
    ],
    programs: [
      {
        name: "BS Management Sciences",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc/FA/ICS with at least 2nd division or equivalent"
      },
      {
        name: "MS Management Sciences",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BBA/BS in relevant field with minimum CGPA 2.5/4.0"
      }
    ]
  },

  // Faculty of Social Sciences & Humanities
  {
    id: "education",
    name: "Department of Education",
    faculty: "Faculty of Social Sciences & Humanities",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    description: [
      "The Department of Education is committed to preparing competent and dedicated educators who can contribute to the educational development of Pakistan. Our programs emphasize both pedagogical theory and teaching practice.",
      "We focus on developing critical thinking, instructional skills, and educational leadership to produce teachers and educational administrators who can make a positive impact on society."
    ],
    programs: [
      {
        name: "BS Education",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc/FA with at least 2nd division or equivalent"
      },
      {
        name: "M.Ed",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/BA in Education or B.Ed with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "english",
    name: "Department of English",
    faculty: "Faculty of Social Sciences & Humanities",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop",
    description: [
      "The Department of English offers programs in English language and literature, focusing on developing communication skills, critical analysis, and literary appreciation. Our curriculum covers British, American, and postcolonial literature.",
      "Students develop strong writing and analytical skills that are valuable across various professions, including education, media, publishing, and corporate communication."
    ],
    programs: [
      {
        name: "BS English",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc/FA with at least 2nd division or equivalent"
      },
      {
        name: "MS English",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/MA in English with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "islamic-studies",
    name: "Department of Islamic Studies",
    faculty: "Faculty of Social Sciences & Humanities",
    image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1200&h=600&fit=crop",
    description: [
      "The Department of Islamic Studies provides comprehensive education in Islamic theology, jurisprudence, history, and culture. Our programs aim to develop Islamic scholars with deep understanding of religious texts and contemporary issues.",
      "We emphasize both traditional Islamic scholarship and modern academic approaches to Islamic studies."
    ],
    programs: [
      {
        name: "BS Islamic Studies",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc/FA with at least 2nd division or equivalent"
      },
      {
        name: "MS Islamic Studies",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/MA in Islamic Studies with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "psychology",
    name: "Department of Psychology",
    faculty: "Faculty of Social Sciences & Humanities",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=1200&h=600&fit=crop",
    description: [
      "The Department of Psychology offers programs that explore human behavior, cognition, and mental processes. Our curriculum covers clinical psychology, developmental psychology, social psychology, and research methods.",
      "Students gain practical experience through internships at hospitals, schools, and counseling centers, preparing them for careers in mental health, research, and human resources."
    ],
    programs: [
      {
        name: "BS Psychology",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc/FA with at least 2nd division or equivalent"
      },
      {
        name: "MS Psychology",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS in Psychology with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "sociology",
    name: "Department of Sociology",
    faculty: "Faculty of Social Sciences & Humanities",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=600&fit=crop",
    description: [
      "The Department of Sociology examines social structures, relationships, and institutions. Our programs focus on understanding social issues, cultural diversity, and social change in contemporary Pakistan and globally.",
      "Students develop research skills and critical thinking abilities to analyze social phenomena and contribute to social development and policy-making."
    ],
    programs: [
      {
        name: "BS Sociology",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc/FA with at least 2nd division or equivalent"
      },
      {
        name: "MS Sociology",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS/MA in Sociology with minimum CGPA 2.5/4.0"
      }
    ]
  },

  // Faculty of Engineering
  {
    id: "chemical-engineering",
    name: "Department of Chemical Engineering",
    faculty: "Faculty of Engineering",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=600&fit=crop",
    description: [
      "The Department of Chemical Engineering offers programs that combine chemistry, physics, mathematics, and engineering principles. Our curriculum covers process design, thermodynamics, reaction engineering, and process control.",
      "Students gain hands-on experience in our modern laboratories and are prepared for careers in petrochemical, pharmaceutical, food processing, and environmental industries."
    ],
    programs: [
      {
        name: "BS Chemical Engineering",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering with at least 60% marks"
      },
      {
        name: "MS Chemical Engineering",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS in Chemical Engineering with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "civil-engineering",
    name: "Department of Civil Engineering",
    faculty: "Faculty of Engineering",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop",
    description: [
      "The Department of Civil Engineering focuses on the design, construction, and maintenance of infrastructure. Our programs cover structural engineering, transportation engineering, water resources, and geotechnical engineering.",
      "With state-of-the-art laboratories and experienced faculty, we prepare students to become professional engineers capable of addressing infrastructure challenges."
    ],
    programs: [
      {
        name: "BS Civil Engineering",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering with at least 60% marks"
      },
      {
        name: "MS Civil Engineering",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS in Civil Engineering with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "electrical-engineering",
    name: "Department of Electrical Engineering",
    faculty: "Faculty of Engineering",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    description: [
      "The Department of Electrical Engineering offers comprehensive programs in power systems, electronics, telecommunications, and control systems. Our curriculum combines theoretical knowledge with practical skills.",
      "Students have access to modern laboratories and equipment to gain hands-on experience in various areas of electrical engineering."
    ],
    programs: [
      {
        name: "BS Electrical Engineering",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering with at least 60% marks"
      },
      {
        name: "MS Electrical Engineering",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS in Electrical Engineering with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "mechanical-engineering",
    name: "Department of Mechanical Engineering",
    faculty: "Faculty of Engineering",
    image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=1200&h=600&fit=crop",
    description: [
      "The Department of Mechanical Engineering provides education in mechanics, thermodynamics, materials science, and manufacturing. Our programs prepare students for diverse careers in automotive, aerospace, energy, and manufacturing sectors.",
      "We emphasize both theoretical understanding and practical application through laboratory work, projects, and industrial training."
    ],
    programs: [
      {
        name: "BS Mechanical Engineering",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering with at least 60% marks"
      },
      {
        name: "MS Mechanical Engineering",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS in Mechanical Engineering with minimum CGPA 2.5/4.0"
      }
    ]
  },
  {
    id: "mechatronics",
    name: "Department of Mechatronics Engineering",
    faculty: "Faculty of Engineering",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop",
    description: [
      "The Department of Mechatronics Engineering offers an interdisciplinary program combining mechanical engineering, electronics, computer science, and control engineering. Our curriculum focuses on robotics, automation, and intelligent systems.",
      "Students learn to design and develop smart systems and automated solutions for modern industries through hands-on projects and research."
    ],
    programs: [
      {
        name: "BS Mechatronics Engineering",
        duration: "4 Years (8 Semesters)",
        entryRequirements: "FSc Pre-Engineering with at least 60% marks"
      },
      {
        name: "MS Mechatronics Engineering",
        duration: "2 Years (4 Semesters)",
        entryRequirements: "BS in Mechatronics/Mechanical/Electrical with minimum CGPA 2.5/4.0"
      }
    ]
  }
];

export function getDepartmentById(id: string): Department | undefined {
  return departments.find(dept => dept.id === id);
}

export function getAllDepartmentIds(): string[] {
  return departments.map(dept => dept.id);
}

export function getAllDepartments(): Department[] {
  return departments;
}

export function getDepartmentsByFaculty(faculty: string): Department[] {
  return departments.filter(dept => dept.faculty === faculty);
}
