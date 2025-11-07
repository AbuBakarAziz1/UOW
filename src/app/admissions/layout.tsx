import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions | University of Wah - Apply Now',
  description: 'Apply to University of Wah. Admissions open for undergraduate and postgraduate programs. Check requirements, deadlines, scholarships, and apply online.',
  keywords: ['UOW Admissions', 'University Admissions Pakistan', 'Apply to UOW', 'BS Admissions', 'MS Admissions Pakistan', 'Admission Requirements'],
  openGraph: {
    title: 'Admissions - University of Wah',
    description: 'Admissions open for undergraduate and postgraduate programs. Apply online now.',
    url: 'https://uowedupk.site/admissions',
  },
  alternates: {
    canonical: 'https://uowedupk.site/admissions',
  },
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
