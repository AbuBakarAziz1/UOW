import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Events | University of Wah',
  description: 'Stay updated with latest news, events, announcements, and press releases from University of Wah.',
  keywords: ['UOW News', 'University Events Pakistan', 'Campus News', 'Academic Events', 'University Announcements'],
  openGraph: {
    title: 'News & Events - University of Wah',
    description: 'Stay updated with latest news and events from UOW.',
    url: 'https://uowedupk.site/news',
  },
  alternates: {
    canonical: 'https://uowedupk.site/news',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
