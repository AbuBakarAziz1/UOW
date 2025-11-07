export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO format: YYYY-MM-DD
  category: string;
  type: 'news' | 'announcement' | 'event'; // NEW: Type field
  image: string;
  author?: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "admissions-fall-2025",
    title: "Admissions Open for Fall 2025",
    excerpt: "University of Wah announces admissions for undergraduate and postgraduate programs for Fall 2025 semester.",
    content: "The University of Wah is pleased to announce that admissions are now open for Fall 2025 semester. We invite aspiring students to apply for our undergraduate and postgraduate programs across various disciplines including Computer Science, Engineering, Management Sciences, Basic Sciences, and Social Sciences. Applications are being accepted online through our admission portal.",
    date: "2025-11-05",
    category: "Admissions",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    author: "Admissions Office",
    featured: true,
  },
  {
    id: "university-closed-sep-22",
    title: "University Closure from 22nd September Onward",
    excerpt: "University of Wah will remain closed from 22nd September due to administrative reasons.",
    content: "The University administration has decided to keep the campus closed from 22nd September onward. All classes and examinations scheduled during this period will be rescheduled. Students and faculty will be notified about the reopening date through official channels.",
    date: "2025-09-20",
    category: "Announcement",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    author: "Administration",
    featured: false,
  },
  {
    id: "university-closed-sep-18",
    title: "Campus Closed on 18th September",
    excerpt: "University will remain closed on 18th September 2025.",
    content: "The University of Wah will remain closed on 18th September 2025 on account of a public holiday. All academic and administrative activities will resume from the next working day. Students are advised to check their schedules accordingly.",
    date: "2025-09-17",
    category: "Holiday",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    author: "Administration",
    featured: false,
  },
  {
    id: "research-symposium-2025",
    title: "Annual Research Symposium 2025",
    excerpt: "Join us for the Annual Research Symposium showcasing innovative research projects by our faculty and students.",
    content: "The Department of Research is organizing the Annual Research Symposium 2025 on November 15-16, 2025. The event will feature presentations from faculty members and students across all departments. Research papers will be published in our conference proceedings. Registration is now open for participants.",
    date: "2025-11-01",
    category: "Events",
    type: "event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    author: "Research Department",
    featured: true,
  },
  {
    id: "sports-week-2025",
    title: "Inter-Department Sports Week Kicks Off",
    excerpt: "Annual sports week featuring cricket, football, basketball, and other athletic competitions.",
    content: "The University Sports Committee is organizing the Inter-Department Sports Week from November 10-15, 2025. Students from all departments are encouraged to participate in various sports including cricket, football, basketball, badminton, and athletics. Registration forms are available at the sports office.",
    date: "2025-10-28",
    category: "Sports",
    type: "event",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    author: "Sports Committee",
    featured: false,
  },
  {
    id: "cs-department-workshop",
    title: "AI & Machine Learning Workshop",
    excerpt: "Department of Computer Science organizing a 3-day workshop on Artificial Intelligence and Machine Learning.",
    content: "The Department of Computer Science is conducting a comprehensive 3-day workshop on Artificial Intelligence and Machine Learning from November 20-22, 2025. Industry experts and academia will deliver talks and hands-on sessions. The workshop is open to all CS and related discipline students. Limited seats available - register now!",
    date: "2025-10-25",
    category: "Workshop",
    type: "event",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    author: "Department of Computer Science",
    featured: true,
  },
  {
    id: "convocation-2025",
    title: "13th Convocation Ceremony Announced",
    excerpt: "University of Wah to hold its 13th Convocation on December 15, 2025.",
    content: "The University of Wah is pleased to announce its 13th Convocation ceremony scheduled for December 15, 2025. Graduating students from all programs will receive their degrees. Chief Guest details will be announced soon. Graduates are requested to complete their clearance formalities before November 30, 2025.",
    date: "2025-10-20",
    category: "Convocation",
    type: "event",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    author: "University Administration",
    featured: false,
  },
  {
    id: "career-fair-2025",
    title: "Career Fair 2025: Top Companies on Campus",
    excerpt: "Annual Career Fair brings leading companies to campus for recruitment and internship opportunities.",
    content: "The Career Development Center is organizing the Annual Career Fair 2025 on November 12, 2025. Over 30 leading companies from IT, Engineering, and Management sectors will participate. Students can drop their CVs and participate in on-campus interviews. Professional attire is mandatory.",
    date: "2025-10-15",
    category: "Career",
    type: "event",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    author: "Career Development Center",
    featured: true,
  },
  {
    id: "library-extended-hours",
    title: "Library Extended Hours During Exams",
    excerpt: "Central Library announces extended operating hours to facilitate students during examination period.",
    content: "To support students during the upcoming examination period, the Central Library will extend its operating hours. From November 25 to December 20, 2025, the library will remain open until midnight on weekdays and from 9 AM to 8 PM on weekends. All study areas and resources will be available.",
    date: "2025-10-10",
    category: "Facilities",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    author: "Library Administration",
    featured: false,
  },
  {
    id: "scholarship-announcement",
    title: "Merit Scholarships for Spring 2026",
    excerpt: "University announces merit-based scholarships for deserving students in Spring 2026 semester.",
    content: "The University of Wah is offering merit-based scholarships covering up to 100% tuition fee for the Spring 2026 semester. Students with outstanding academic performance (CGPA 3.5 and above) are eligible to apply. Need-based financial assistance is also available. Application deadline: November 30, 2025.",
    date: "2025-10-05",
    category: "Scholarships",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80",
    author: "Financial Aid Office",
    featured: false,
  },
  {
    id: "exam-schedule-winter-2025",
    title: "Final Examination Schedule Released",
    excerpt: "Winter 2025 final examination schedule announced for all programs.",
    content: "The Controller of Examinations has released the final examination schedule for Winter 2025 semester. Examinations will commence from December 10, 2025. Students are advised to check the detailed schedule on the university portal and ensure their registration is complete.",
    date: "2025-11-06",
    category: "Examinations",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    author: "Controller of Examinations",
    featured: false,
  },
  {
    id: "hackathon-2025",
    title: "UOW Hackathon 2025: Code, Create, Compete",
    excerpt: "48-hour coding marathon with exciting prizes and internship opportunities.",
    content: "The IT Society is organizing UOW Hackathon 2025 on November 23-24. Teams of 3-4 students will compete to build innovative solutions. Total prize money of PKR 150,000 and internship opportunities with partner companies. Registration open till November 15, 2025.",
    date: "2025-11-03",
    category: "Competition",
    type: "event",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    author: "IT Society",
    featured: true,
  },
  {
    id: "cultural-festival-2025",
    title: "Annual Cultural Festival 'Jashn-e-Wah' Announced",
    excerpt: "Three-day cultural extravaganza celebrating diversity and talent.",
    content: "The Cultural Society presents Jashn-e-Wah 2025 from December 5-7. The festival will feature music performances, traditional dances, food stalls, art exhibitions, and drama competitions. Students from all departments are encouraged to participate and showcase their talents.",
    date: "2025-11-02",
    category: "Cultural",
    type: "event",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    author: "Cultural Society",
    featured: false,
  },
  {
    id: "hec-ranking-2025",
    title: "UOW Ranks Among Top Universities in HEC Rankings",
    excerpt: "University of Wah achieves significant improvement in latest HEC rankings.",
    content: "The Higher Education Commission (HEC) has released its latest university rankings, and the University of Wah has secured an impressive position among Pakistan's top universities. This achievement reflects our commitment to academic excellence, research output, and quality education.",
    date: "2025-10-30",
    category: "Achievement",
    type: "news",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    author: "Public Relations Office",
    featured: true,
  },
  {
    id: "faculty-development-program",
    title: "Faculty Development Workshop Series",
    excerpt: "Professional development workshops for faculty members on modern teaching methodologies.",
    content: "The Office of Academic Affairs is conducting a series of faculty development workshops throughout November 2025. Topics include blended learning, assessment techniques, and research methodology. All faculty members are encouraged to participate.",
    date: "2025-10-28",
    category: "Faculty Development",
    type: "event",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    author: "Academic Affairs",
    featured: false,
  },
  {
    id: "new-lab-inauguration",
    title: "State-of-the-Art AI Lab Inaugurated",
    excerpt: "New Artificial Intelligence lab equipped with latest hardware and software facilities.",
    content: "The Vice Chancellor inaugurated the new Artificial Intelligence Lab at the Department of Computer Science. The lab features high-performance computing systems, GPU clusters, and latest AI development tools. This facility will support advanced research and student projects in AI and machine learning.",
    date: "2025-10-22",
    category: "Infrastructure",
    type: "news",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    author: "IT Department",
    featured: false,
  },
];

// Helper function to get all news sorted by date (newest first)
export function getAllNews(): NewsArticle[] {
  return [...newsArticles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Helper function to get news and announcements only
export function getNewsAndAnnouncements(): NewsArticle[] {
  return newsArticles
    .filter(article => article.type === 'news' || article.type === 'announcement')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Helper function to get events only
export function getEvents(): NewsArticle[] {
  return newsArticles
    .filter(article => article.type === 'event')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Helper function to get featured news
export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter(article => article.featured).slice(0, 3);
}

// Helper function to get news by category
export function getNewsByCategory(category: string): NewsArticle[] {
  return newsArticles.filter(article => article.category === category);
}

// Helper function to get latest news (limit 5 for homepage)
export function getLatestNews(limit: number = 5): NewsArticle[] {
  return getAllNews().slice(0, limit);
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Get all unique categories
export function getCategories(): string[] {
  const categories = newsArticles.map(article => article.category);
  return [...new Set(categories)];
}
