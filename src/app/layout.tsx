import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ['Sanjay S', 'Portfolio', 'Cyber Security', 'Full-Stack Developer', 'React', 'Next.js', 'AI Developer'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
