import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | University of Wah',
  description: 'Contact University of Wah. Get in touch with admissions office, departments, or administration. Address: Main G.T Road, Wah Cantt. Phone: +92-51-9314892',
  keywords: ['Contact UOW', 'University of Wah Address', 'UOW Phone Number', 'Admissions Office Contact', 'University Email'],
  openGraph: {
    title: 'Contact Us - University of Wah',
    description: 'Get in touch with University of Wah. Admissions, departments, and administration contacts.',
    url: 'https://uowedupk.site/contact',
  },
  alternates: {
    canonical: 'https://uowedupk.site/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
