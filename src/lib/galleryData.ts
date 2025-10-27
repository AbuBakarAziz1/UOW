export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  // Campus Views
  {
    id: 1,
    src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance1.jpg",
    alt: "Quaid Campus Main Building",
    category: "Campus",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance2.jpg",
    alt: "Wah Engineering College",
    category: "Campus",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance3.jpg",
    alt: "Mashal Degree College",
    category: "Campus",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance4.jpg",
    alt: "VC Secretariat Building",
    category: "Administrative",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance5.jpg",
    alt: "Admin Block",
    category: "Administrative",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "https://www.uow.edu.pk/Content/theme/images/web/about/UWGlance6.jpg",
    alt: "Directorates Building",
    category: "Administrative",
    width: 800,
    height: 600,
  },
  // Additional placeholder images with different aspect ratios
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    alt: "Library Interior",
    category: "Facilities",
    width: 800,
    height: 1000,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    alt: "Lecture Hall",
    category: "Facilities",
    width: 800,
    height: 600,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    alt: "Computer Lab",
    category: "Facilities",
    width: 800,
    height: 500,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    alt: "Students Studying",
    category: "Student Life",
    width: 800,
    height: 600,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    alt: "Graduation Ceremony",
    category: "Events",
    width: 800,
    height: 1000,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    alt: "Sports Facilities",
    category: "Sports",
    width: 800,
    height: 600,
  },
];

export const categories = [
  "All",
  "Campus",
  "Administrative",
  "Facilities",
  "Student Life",
  "Events",
  "Sports",
];
