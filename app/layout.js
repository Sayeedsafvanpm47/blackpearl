import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://blackpearl.com'),
  title: {
    default: 'Black Pearl - Printing, IT & AI Studio in Doha Mall',
    template: '%s | Black Pearl'
  },
  description: 'Your one-stop printing, IT automation, digital marketing, and AI studio in Doha Mall, Qatar. From instant print services to smart business automation for SMEs.',
  keywords: ['printing services Qatar', 'Doha Mall printing', 'business automation', 'digital marketing Qatar', 'AI studio', 'n8n automation', 'web development Qatar', 'translation services', 'SME solutions Qatar', 'online printing Doha'],
  authors: [{ name: 'Black Pearl' }],
  creator: 'Black Pearl',
  publisher: 'Black Pearl',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blackpearl.com',
    siteName: 'Black Pearl',
    title: 'Black Pearl - Printing, IT & AI Studio in Doha Mall',
    description: 'Your one-stop printing, IT automation, digital marketing, and AI studio in Doha Mall, Qatar. From instant print services to smart business automation for SMEs.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Black Pearl - Printing, IT & AI Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Pearl - Printing, IT & AI Studio in Doha Mall',
    description: 'Your one-stop printing, IT automation, digital marketing, and AI studio in Doha Mall, Qatar.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
