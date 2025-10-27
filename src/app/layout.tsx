import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";
import TopBar from "./components/TopBar";
import Footer from "./components/footer";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://uowedupk.vercel.app'),
  title: {
    default: 'University of Wah | Top Pakistani University for Higher Education',
    template: '%s | University of Wah'
  },
  description: 'University of Wah (UOW) - Leading public sector university in Wah Cantt, Taxila, near Rawalpindi & Islamabad. Offering undergraduate and postgraduate programs in Computer Science, Engineering, Basic Sciences, Management, and Social Sciences. Admissions open.',
  keywords: [
    'University of Wah',
    'UOW Pakistan',
    'UW Pakistan',
    'UOW',
    'Pakistani University',
    'Higher Education Pakistan',
    'Wah Cantt University',
    'Wah Cantt',
    'University in Wah',
    'University in Taxila',
    'Taxila University',
    'Rawalpindi University',
    'University near Rawalpindi',
    'Islamabad University',
    'University near Islamabad',
    'Computer Science Pakistan',
    'Engineering Degree Pakistan',
    'BS Programs Pakistan',
    'University Admissions Pakistan',
    'Top Universities Pakistan',
    'Best University Wah Cantt',
    'Best University Taxila',
    'Cyber Security Degree',
    'Artificial Intelligence Pakistan',
    'Mathematics Degree',
    'Chemistry Degree',
    'Management Sciences Pakistan',
    'Higher Education Wah',
    'Higher Education Taxila',
    'Public Sector University Pakistan'
  ],
  authors: [{ name: 'University of Wah' }],
  creator: 'University of Wah',
  publisher: 'University of Wah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://uowedupk.vercel.app',
    title: 'University of Wah | Top Pakistani University for Higher Education',
    description: 'Leading public sector university in Wah Cantt, Taxila (near Rawalpindi & Islamabad) offering undergraduate and postgraduate programs in Computer Science, Engineering, Basic Sciences, Management, and Social Sciences.',
    siteName: 'University of Wah',
    images: [
      {
        url: '/theme/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'University of Wah Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University of Wah | Top Pakistani University',
    description: 'Leading public sector university in Wah Cantt, Taxila offering quality programs in multiple disciplines. Located near Rawalpindi and Islamabad.',
    images: ['/theme/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IaPqwB-gjlOe0OE007bVAvOrGF19FDlWxh1KbFD5LZk',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://uowedupk.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/theme/images/favicon.ico" type="image/x-icon" />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar`}>

        <TopBar />
        <Nav />


        <main className="flex-1 w-full">
          {children}
        </main>
        
        <Footer />

      </body>
    </html>
  );
}
