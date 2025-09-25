import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Nav from "./components/Nav";
import "./globals.css";
import TopBar from "./components/TopBar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "University Of Wah",
  description: "University Of Wah official website. Admissions, Academics, Research, News, and Contact information.",
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <TopBar />
        <Nav />


        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Google Maps Location */}
        <div className="w-full mx-auto flex justify-center pt-1 pb-2 bg-white ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.697223046789!2d72.7883345751233!3d33.742644673275045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa6bade019e11%3A0x5eac7be020a9f19c!2sUniversity%20of%20Wah!5e0!3m2!1sen!2s!4v1758275029957!5m2!1sen!2s"
            height="250"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="University of Wah Location"
            className="rounded-lg shadow-lg border-t border-red-500 w-full mx-4 "
          />
        </div>
        <Footer />

      </body>
    </html>
  );
}
