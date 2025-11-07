export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO format: YYYY-MM-DD
  category: string;
  type: 'news' | 'announcement';
  image: string;
  author?: string;
  featured?: boolean;
}

export const newsArticlesData: NewsArticle[] = [
  {
    id: "admissions-fall-2025",
    title: "Admissions Open for Fall 2025",
    excerpt: "University of Wah announces admissions for undergraduate and postgraduate programs for Fall 2025 semester.",
    content: "The University of Wah is pleased to announce that admissions are now open for Fall 2025 semester. We invite aspiring students to apply for our undergraduate and postgraduate programs across various disciplines including Computer Science, Engineering, Management Sciences, Basic Sciences, and Social Sciences. Applications are being accepted online through our admission portal.",
    date: "2025-11-08",
    category: "Admissions",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    author: "Admissions Office",
    featured: true,
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
  {
    id: "scholarship-announcement",
    title: "Merit Scholarships for Spring 2026",
    excerpt: "University announces merit-based scholarships for deserving students in Spring 2026 semester.",
    content: "The University of Wah is offering merit-based scholarships covering up to 100% tuition fee for the Spring 2026 semester. Students with outstanding academic performance (CGPA 3.5 and above) are eligible to apply. Need-based financial assistance is also available. Application deadline: November 30, 2025.",
    date: "2025-10-18",
    category: "Scholarships",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80",
    author: "Financial Aid Office",
    featured: true,
  },
  {
    id: "library-extended-hours",
    title: "Library Extended Hours During Exams",
    excerpt: "Central Library announces extended operating hours to facilitate students during examination period.",
    content: "To support students during the upcoming examination period, the Central Library will extend its operating hours. From November 25 to December 20, 2025, the library will remain open until midnight on weekdays and from 9 AM to 8 PM on weekends. All study areas and resources will be available.",
    date: "2025-10-15",
    category: "Facilities",
    type: "announcement",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    author: "Library Administration",
    featured: false,
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
    id: "research-grant-received",
    title: "University Receives Major Research Grant",
    excerpt: "UOW secures PKR 50 million research grant for renewable energy project.",
    content: "The University of Wah has been awarded a prestigious research grant worth PKR 50 million by the Higher Education Commission for conducting groundbreaking research in renewable energy technologies. This project will span three years and involve collaboration with international research institutions.",
    date: "2025-10-12",
    category: "Research",
    type: "news",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    author: "Research Office",
    featured: true,
  },
];

// Helper function to get all news sorted by date (newest first)
export function getAllNews(): NewsArticle[] {
  return [...newsArticlesData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Helper function to get featured news
export function getFeaturedNews(): NewsArticle[] {
  return newsArticlesData.filter(article => article.featured);
}

// Helper function to get news by category
export function getNewsByCategory(category: string): NewsArticle[] {
  return newsArticlesData.filter(article => article.category === category);
}

// Helper function to get news by type
export function getNewsByType(type: 'news' | 'announcement'): NewsArticle[] {
  return newsArticlesData.filter(article => article.type === type);
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
export function getNewsCategories(): string[] {
  const categories = newsArticlesData.map(article => article.category);
  return [...new Set(categories)];
}

// Get news by ID
export function getNewsById(id: string): NewsArticle | undefined {
  return newsArticlesData.find(article => article.id === id);
}
