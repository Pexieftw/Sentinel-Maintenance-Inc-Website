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

// Environment variables with fallbacks
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://smi.ca';
const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Sentinel Maintenance Inc';
const COMPANY_SHORT_NAME = process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME || 'SMI';
const OG_IMAGE_PATH = process.env.NEXT_PUBLIC_OG_IMAGE_PATH || '/skyScraper.webp';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Home | ${COMPANY_SHORT_NAME}.ca`,
  description: `${COMPANY_SHORT_NAME} offers professional property services, including commercial cleaning, window washing, power washing, COVID-19 disinfection, and restoration. Trusted in Toronto, Mississauga, Vaughan, and across the GTA. Contact us for a free quote!`,
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
    title: `${COMPANY_NAME} (${COMPANY_SHORT_NAME}) | Top Property Services & Cleaning Solutions in GTA`,
    description: `${COMPANY_SHORT_NAME} provides professional property services, including commercial cleaning, window washing, power washing, COVID-19 disinfection, and restoration. Servicing Toronto, Mississauga, Vaughan, and the entire GTA. Get a free quote today!`,
    url: SITE_URL,
    siteName: `${COMPANY_NAME} (${COMPANY_SHORT_NAME})`,
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE_PATH}`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_SHORT_NAME} Property Services - Commercial Cleaning, Window Washing, and More`,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} (${COMPANY_SHORT_NAME}) | Top Property Services & Cleaning Solutions in GTA`,
    description: `${COMPANY_SHORT_NAME} offers professional property services, including commercial cleaning, window washing, power washing, COVID-19 disinfection, and restoration. Servicing Toronto, Mississauga, Vaughan, and the entire GTA. Get a free quote today!`,
    images: [`${SITE_URL}${OG_IMAGE_PATH}`], 
  },
  alternates: {
    canonical: SITE_URL,
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
    title: COMPANY_SHORT_NAME,
  },
};

// FAQ Structured Data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What geographic areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly service the entire Greater Toronto Area (GTA) from Toronto proper through North York, Scarborough, Etobicoke, Vaughan, Markham, Mississauga and surrounding municipalities."
      }
    },
    {
      "@type": "Question",
      "name": "What kinds of cleaning services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our core offerings include commercial janitorial and office cleaning, condominium and institutional cleaning, medical and dealership cleaning, plus post-construction and new-build cleaning services."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide specialized or add-on services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, everything from deep-clean disinfection, fogging, window cleaning (low-rise and high-rise), pressure-washing (exteriors and parking garages), carpet care, graffiti removal, to natural stone restoration and more."
      }
    },
    {
      "@type": "Question",
      "name": "What are your pricing and payment options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is customized based on scope, frequency, and any specialized requirements. We accept major credit cards, e-transfers, and corporate invoicing. Recurring-service discounts are available."
      }
    },
    {
      "@type": "Question",
      "name": "Are you fully licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our company holds all required provincial licences and carries comprehensive liability and workers' compensation insurance for your peace of mind."
      }
    },
    {
      "@type": "Question",
      "name": "What is your typical scheduling availability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate 24/7 for emergency and scheduled projects, with most routine commercial cleanings available outside standard business hours to minimize disruption."
      }
    },
    {
      "@type": "Question",
      "name": "What safety and compliance training do staff receive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every team member completes WHMIS certification (80% or higher pass rate) and ongoing chemical-handling, equipment-use, and workplace-safety training to meet or exceed industry standards."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="overflow-x-hidden">
          <TopBar />
          <NavBar />
          <div className='w-full h-20 md:h-26 lg:h-30 px-4 lg:px-0'></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}