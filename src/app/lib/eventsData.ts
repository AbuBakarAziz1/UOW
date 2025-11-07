export interface Event {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO format: YYYY-MM-DD
  category: string;
  image: string;
  author?: string;
  featured?: boolean;
  location?: string;
}

export const eventsData: Event[] = [
  {
    id: "research-symposium-2025",
    title: "Annual Research Symposium 2025",
    excerpt: "Join us for the Annual Research Symposium showcasing innovative research projects by our faculty and students.",
    content: "The Department of Research is organizing the Annual Research Symposium 2025 on November 15-16, 2025. The event will feature presentations from faculty members and students across all departments. Research papers will be published in our conference proceedings. Registration is now open for participants.",
    date: "2025-11-15",
    category: "Research",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    author: "Research Department",
    featured: true,
    location: "Main Auditorium",
  },
  {
    id: "sports-week-2025",
    title: "Inter-Department Sports Week Kicks Off",
    excerpt: "Annual sports week featuring cricket, football, basketball, and other athletic competitions.",
    content: "The University Sports Committee is organizing the Inter-Department Sports Week from November 10-15, 2025. Students from all departments are encouraged to participate in various sports including cricket, football, basketball, badminton, and athletics. Registration forms are available at the sports office.",
    date: "2025-11-10",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    author: "Sports Committee",
    featured: false,
    location: "Sports Complex",
  },
  {
    id: "cs-department-workshop",
    title: "AI & Machine Learning Workshop",
    excerpt: "Department of Computer Science organizing a 3-day workshop on Artificial Intelligence and Machine Learning.",
    content: "The Department of Computer Science is conducting a comprehensive 3-day workshop on Artificial Intelligence and Machine Learning from November 20-22, 2025. Industry experts and academia will deliver talks and hands-on sessions. The workshop is open to all CS and related discipline students. Limited seats available - register now!",
    date: "2025-11-20",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    author: "Department of Computer Science",
    featured: true,
    location: "CS Lab 3",
  },
  {
    id: "convocation-2025",
    title: "13th Convocation Ceremony Announced",
    excerpt: "University of Wah to hold its 13th Convocation on December 15, 2025.",
    content: "The University of Wah is pleased to announce its 13th Convocation ceremony scheduled for December 15, 2025. Graduating students from all programs will receive their degrees. Chief Guest details will be announced soon. Graduates are requested to complete their clearance formalities before November 30, 2025.",
    date: "2025-12-15",
    category: "Convocation",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    author: "University Administration",
    featured: true,
    location: "Main Ground",
  },
  {
    id: "career-fair-2025",
    title: "Career Fair 2025: Top Companies on Campus",
    excerpt: "Annual Career Fair brings leading companies to campus for recruitment and internship opportunities.",
    content: "The Career Development Center is organizing the Annual Career Fair 2025 on November 12, 2025. Over 30 leading companies from IT, Engineering, and Management sectors will participate. Students can drop their CVs and participate in on-campus interviews. Professional attire is mandatory.",
    date: "2025-11-12",
    category: "Career",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    author: "Career Development Center",
    featured: true,
    location: "Convention Hall",
  },
  {
    id: "hackathon-2025",
    title: "UOW Hackathon 2025: Code, Create, Compete",
    excerpt: "48-hour coding marathon with exciting prizes and internship opportunities.",
    content: "The IT Society is organizing UOW Hackathon 2025 on November 23-24. Teams of 3-4 students will compete to build innovative solutions. Total prize money of PKR 150,000 and internship opportunities with partner companies. Registration open till November 15, 2025.",
    date: "2025-11-23",
    category: "Competition",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    author: "IT Society",
    featured: true,
    location: "CS Department",
  },
  {
    id: "cultural-festival-2025",
    title: "Annual Cultural Festival 'Jashn-e-Wah' Announced",
    excerpt: "Three-day cultural extravaganza celebrating diversity and talent.",
    content: "The Cultural Society presents Jashn-e-Wah 2025 from December 5-7. The festival will feature music performances, traditional dances, food stalls, art exhibitions, and drama competitions. Students from all departments are encouraged to participate and showcase their talents.",
    date: "2025-12-05",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    author: "Cultural Society",
    featured: false,
    location: "Open Air Theatre",
  },
  {
    id: "faculty-development-program",
    title: "Faculty Development Workshop Series",
    excerpt: "Professional development workshops for faculty members on modern teaching methodologies.",
    content: "The Office of Academic Affairs is conducting a series of faculty development workshops throughout November 2025. Topics include blended learning, assessment techniques, and research methodology. All faculty members are encouraged to participate.",
    date: "2025-11-08",
    category: "Faculty Development",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    author: "Academic Affairs",
    featured: false,
    location: "Faculty Lounge",
  },
];

// Helper function to get all events sorted by date (newest first)
export function getAllEvents(): Event[] {
  return [...eventsData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Helper function to get featured events
export function getFeaturedEvents(): Event[] {
  return eventsData.filter(event => event.featured);
}

// Helper function to get events by category
export function getEventsByCategory(category: string): Event[] {
  return eventsData.filter(event => event.category === category);
}

// Helper function to get upcoming events (future dates)
export function getUpcomingEvents(): Event[] {
  const today = new Date();
  return eventsData
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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
export function getEventCategories(): string[] {
  const categories = eventsData.map(event => event.category);
  return [...new Set(categories)];
}

// Get event by ID
export function getEventById(id: string): Event | undefined {
  return eventsData.find(event => event.id === id);
}
