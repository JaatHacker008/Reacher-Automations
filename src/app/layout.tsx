import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DiscoveryModal from '@/components/booking/DiscoveryModal';
import { BookingModalProvider } from '@/context/BookingModalContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Reacher Automation | AI Automation for Growing Businesses',
  description:
    'Reacher Automation builds AI-powered workflows for lead qualification, customer communication, appointment booking, CRM integration, and business process automation.',
  keywords: [
    'AI Automation Agency',
    'Business Process Automation',
    'AI Workflow Automation',
    'AI Lead Qualification',
    'CRM Automation Services',
    'WhatsApp Automation for Business',
    'Appointment Booking Automation',
    'AI Customer Support',
    'Custom AI Solutions',
    'Business Automation Services',
  ],
  openGraph: {
    title: 'Reacher Automation | AI Automation for Growing Businesses',
    description:
      'Intelligent, reliable workflows that capture leads, automate follow-ups, simplify operations, and help businesses run smarter.',
    url: 'https://reacherautomation.com',
    siteName: 'Reacher Automation',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#171717] font-sans selection:bg-[#647C68] selection:text-white">
        <BookingModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <DiscoveryModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
