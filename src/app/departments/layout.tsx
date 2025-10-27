import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Departments | University of Wah',
  description: 'Browse all academic departments at University of Wah including Computer Science, Mathematics, Chemistry, Physics, Management Sciences, and more.',
  keywords: ['UOW Departments', 'Computer Science Department', 'Mathematics Department', 'Engineering Departments Pakistan', 'Academic Faculties'],
  openGraph: {
    title: 'Departments - University of Wah',
    description: 'Browse all academic departments and their programs.',
    url: 'https://uowedupk.vercel.app/departments',
  },
  alternates: {
    canonical: 'https://uowedupk.vercel.app/departments',
  },
};

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
