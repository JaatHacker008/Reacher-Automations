import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import PortfolioShowcase from '@/components/portfolio/PortfolioShowcase';
import ServicesSection from '@/components/home/ServicesSection';
import ServiceFeaturesDeepDive from '@/components/services/ServiceFeaturesDeepDive';
import SystemWorkflow from '@/components/home/SystemWorkflow';
import IndustrySection from '@/components/home/IndustrySection';
import FeaturedWorkflowSection from '@/components/home/FeaturedWorkflowSection';
import TechStackSection from '@/components/home/TechStackSection';
import WhyReacherSection from '@/components/home/WhyReacherSection';
import ProcessSection from '@/components/home/ProcessSection';
import ResultsSection from '@/components/home/ResultsSection';
import PricingSection from '@/components/home/PricingSection';
import ClientCollaborationSection from '@/components/home/ClientCollaborationSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';
import BookingSection from '@/components/home/BookingSection';
import AboutSection from '@/components/home/AboutSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section with Interactive Live Pipeline */}
      <HeroSection />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. Agency Portfolio & Systems Showcase */}
      <PortfolioShowcase />

      {/* 4. Services Overview Section */}
      <ServicesSection />

      {/* 5. Deep-Dive Feature Breakdown & Pipeline Mechanics */}
      <ServiceFeaturesDeepDive />

      {/* 6. How Our Automation Works (The System) */}
      <SystemWorkflow />

      {/* 7. Industry Solutions (Schools, Clinics, Salons, Growing Businesses) */}
      <IndustrySection />

      {/* 8. Featured Lead-to-Appointment Automation Dashboard */}
      <FeaturedWorkflowSection />

      {/* 9. Technology Stack Grid & Tools */}
      <TechStackSection />

      {/* 10. Why Reacher Automation (Dark Section) */}
      <WhyReacherSection />

      {/* 11. Implementation Process Timeline */}
      <ProcessSection />

      {/* 12. Results & Performance Metrics + ROI Calculator */}
      <ResultsSection />

      {/* 13. Pricing & Engagement Options */}
      <PricingSection />

      {/* 14. Client Collaboration Authentic Stance */}
      <ClientCollaborationSection />

      {/* 15. Frequently Asked Questions */}
      <FaqSection />

      {/* 16. Lead Generation Working Contact Form */}
      <ContactSection />

      {/* 17. Book a Discovery Call Section */}
      <BookingSection />

      {/* 18. About Reacher Automation Editorial */}
      <AboutSection />

      {/* 19. Final CTA Section (Dark closing) */}
      <FinalCtaSection />
    </div>
  );
}
