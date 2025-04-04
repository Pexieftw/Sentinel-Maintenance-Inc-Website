import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentinel Maintenance Inc | Home | SMI.ca`",
  description: "SMI offers professional property services, including commercial cleaning, window washing, power washing, COVID-19 disinfection, and restoration. Trusted in Toronto, Mississauga, Vaughan, and across the GTA. Contact us for a free quote!",
  keywords: [
    "commercial cleaning services",
    "property maintenance GTA",
    "window cleaning Toronto",
    "power washing services",
    "COVID-19 disinfection",
    "restoration services GTA",
    "condominium cleaning",
    "HVAC cleaning",
    "graffiti removal",
    "snow removal services",
    "landscaping GTA",
    "emergency cleaning services",
    "post-construction cleaning",
    "industrial kitchen vent cleaning",
    "carpet cleaning services",
    "natural stone restoration",
    "fire and flood restoration",
    "best cleaning company in Toronto",
  ],
  openGraph: {
    title: "Sentinel Maintenance Inc. (SMI) | Top Property Services & Cleaning Solutions in GTA",
    description: "SMI provides professional property services, including commercial cleaning, window washing, power washing, COVID-19 disinfection, and restoration. Servicing Toronto, Mississauga, Vaughan, and the entire GTA. Get a free quote today!",
    url: "https://smi.ca",
    siteName: "Sentinel Maintenance Inc. (SMI)",
    images: [
      {
        url: "https://smi.ca/about1.jpg",
        width: 1200,
        height: 630,
        alt: "SMI Property Services - Commercial Cleaning, Window Washing, and More",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Maintenance Inc. (SMI) | Top Property Services & Cleaning Solutions in GTA",
    description: "SMI offers professional property services, including commercial cleaning, window washing, power washing, COVID-19 disinfection, and restoration. Servicing Toronto, Mississauga, Vaughan, and the entire GTA. Get a free quote today!",
    images: ["https://smi.ca/about1.jpg"], 
  },
  alternates: {
    canonical: "https://smi.ca",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/x-icon",
        url: "/icons/favicon.ico",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/x-icon",
        url: "/icons/favicon-dark-mode.ico",
      },
      {
        url: "/icons/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/icons/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/icons/site.webmanifest",
      },
    ],
  },
  appleWebApp: {
    title: "SMI",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="overflow-x-hidden">
          <TopBar />
          <NavBar />
          <div className='w-full h-20 px-4 lg:px-0'></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
