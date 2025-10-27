import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About University of Wah | History, Mission & Vision',
  description: 'Learn about University of Wah (UOW) - our history, mission, vision, quality policy, leadership, and commitment to excellence in higher education in Pakistan.',
  keywords: ['About UOW', 'University of Wah History', 'UOW Mission Vision', 'Quality Education Pakistan', 'University Leadership'],
  openGraph: {
    title: 'About University of Wah',
    description: 'Learn about our history, mission, vision, and commitment to excellence in higher education.',
    url: 'https://uowedupk.vercel.app/about',
  },
  alternates: {
    canonical: 'https://uowedupk.vercel.app/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
