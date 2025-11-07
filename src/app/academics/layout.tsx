import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Programs | University of Wah',
  description: 'Explore undergraduate and graduate programs at University of Wah in Computer Science, Engineering, Basic Sciences, Management, and Social Sciences.',
  keywords: ['UOW Programs', 'BS Programs Pakistan', 'MS Programs', 'Computer Science Degree', 'Engineering Programs Pakistan'],
  openGraph: {
    title: 'Academic Programs - University of Wah',
    description: 'Explore our diverse range of undergraduate and graduate programs.',
    url: 'https://uowedupk.site/academics',
  },
  alternates: {
    canonical: 'https://uowedupk.site/academics',
  },
};

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
