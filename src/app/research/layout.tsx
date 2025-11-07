import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research | University of Wah',
  description: 'Discover research opportunities, centers, publications, and funded projects at University of Wah. Join our research community.',
  keywords: ['UOW Research', 'Research Centers Pakistan', 'University Research', 'Research Publications', 'Research Funding Pakistan'],
  openGraph: {
    title: 'Research - University of Wah',
    description: 'Discover research opportunities and innovation at UOW.',
    url: 'https://uowedupk.site/research',
  },
  alternates: {
    canonical: 'https://uowedupk.site/research',
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
