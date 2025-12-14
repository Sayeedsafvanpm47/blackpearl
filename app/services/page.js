'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Printer, Globe, Cog, Check, ArrowRight, FileText, Camera, Coffee, Megaphone, BarChart3, Mail, Workflow, FileSpreadsheet, Bell, Receipt, ChevronDown } from 'lucide-react';

export default function Services() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const printServices = [
    {
      title: 'Commercial Printing',
      description: 'High-quality printing for business and personal needs.',
      icon: Printer
    },
    {
      title: 'On-Demand Printing',
      description: 'Fast turnaround, low-volume or urgent print requirements.',
      icon: FileText
    },
    {
      title: 'T-Shirt Printing',
      description: 'Custom apparel printing for brands, events, and teams.',
      icon: Printer
    },
    {
      title: 'Mug & Merchandise Printing',
      description: 'Personalized mugs, gifts, and promotional merchandise.',
      icon: Coffee
    },
    {
      title: 'Photo Printing & Studio Services',
      description: 'Photo prints, ID photos, basic studio activities.',
      icon: Camera
    },
    {
      title: 'Document Services',
      description: 'Photocopying, scanning, lamination, binding.',
      icon: FileText
    }
  ];

  const digitalServices = [
    {
      title: 'Website Design & Development',
      description: 'Modern, responsive websites built for performance and scalability.',
      icon: Globe
    },
    {
      title: 'Content Creation',
      description: 'Visual content, reels, posters, and brand creatives.',
      icon: Camera
    },
    {
      title: 'SEO Optimization',
      description: 'On-page SEO, technical optimization, and local visibility improvements.',
      icon: BarChart3
    },
    {
      title: 'Social Media Management',
      description: 'Strategy, posting, engagement, and brand consistency.',
      icon: Megaphone
    },
    {
      title: 'Paid Ads & Boosting',
      description: 'Google Ads, Meta Ads, and targeted campaign optimization.',
      icon: BarChart3
    },
    {
      title: 'Branding & Digital Presence Setup',
      description: 'Business profiles, brand consistency, and digital foundation setup.',
      icon: Globe
    }
  ];

  const automationServices = [
    {
      title: 'Automated Social Media Posting',
      description: 'Scheduled and AI-assisted posting across platforms.',
      icon: Megaphone
    },
    {
      title: 'Automated Sales Report Generation',
      description: 'Daily, weekly, and monthly sales reports — auto-generated and formatted.',
      icon: FileSpreadsheet
    },
    {
      title: 'Automated Email Campaigns',
      description: 'Lead nurturing, follow-ups, and internal notifications.',
      icon: Mail
    },
    {
      title: 'CRM & Lead Automation',
      description: 'Lead capture, tagging, and follow-up workflows.',
      icon: Workflow
    },
    {
      title: 'Invoicing & Billing Automation',
      description: 'Auto-generated invoices, reminders, and payment tracking.',
      icon: Receipt
    },
    {
      title: 'Internal Workflow Automation',
      description: 'Task assignments, approvals, and internal alerts.',
      icon: Bell
    },
    {
      title: 'Custom n8n Automation Bundles',
      description: 'Tailored automations designed for SMEs to reduce manpower and errors.',
      icon: Cog
    }
  ];

  const whyChooseUs = [
    {
      title: 'End-to-End Solutions',
      description: 'Complete business solutions from concept to execution'
    },
    {
      title: 'Print + Digital Under One Roof',
      description: 'Seamless integration of physical and digital services'
    },
    {
      title: 'Automation-First Approach',
      description: 'Smart systems that scale your business efficiently'
    },
    {
      title: 'SME-Focused Cost Optimization',
      description: 'Affordable solutions tailored for small to medium enterprises'
    },
    {
      title: 'Reliable Support & Execution',
      description: 'Dedicated team ensuring consistent quality delivery'
    },
    {
      title: 'Proven Track Record',
      description: 'Years of experience serving diverse business needs'
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white glow-text leading-tight animate-fade-in-up">
                Services Designed for<br />Modern Businesses
              </h1>
              <div className="w-24 h-1 bg-white mx-auto glow-border animate-width-expand"></div>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed animate-fade-in-up-delay">
                From print to digital, automation to growth — everything under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Creative & Print Studio Section - Horizontal Scroll */}
        <section 
          id="print-section"
          ref={el => sectionRefs.current['print'] = el}
          className={`py-24 border-b border-white/10 transition-all duration-700 ${visibleSections['print-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 glow-text-sm">
              Creative & Print Studio
            </h2>
            
            <div className="relative">
              {/* Custom aesthetic scrollbar */}
              <div className="overflow-x-auto custom-scrollbar pb-4">
                <div className="flex space-x-6 min-w-max">
                  {printServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group w-80 p-8 bg-black border border-white/10 rounded-lg hover:scale-[1.02] hover:border-white/40 transition-all duration-300 cursor-pointer"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                          <IconComponent className="w-12 h-12 text-white" strokeWidth={1} />
                        </div>
                        <div className="relative">
                          <h3 className="text-2xl font-bold text-white mb-3 relative">
                            {service.title}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-400"></span>
                          </h3>
                        </div>
                        <p className="text-white/0 group-hover:text-white/70 leading-relaxed transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Scroll indicator */}
              <div className="flex items-center justify-center mt-6 space-x-3">
                <div className="w-24 h-px bg-white/20"></div>
                <span className="text-white/40 text-xs uppercase tracking-wider">Scroll to explore</span>
                <div className="w-24 h-px bg-white/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Solutions Section - Grid Layout */}
        <section 
          id="digital-section"
          ref={el => sectionRefs.current['digital'] = el}
          className={`py-24 border-b border-white/10 bg-white/[0.01] transition-all duration-700 ${visibleSections['digital-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 glow-text-sm">
                Digital Solutions
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {digitalServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group relative"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="relative overflow-hidden">
                        {/* Animated line from bottom */}
                        <div className="absolute left-0 bottom-0 w-0.5 h-0 bg-white group-hover:h-full transition-all duration-400 ease-out"></div>
                        
                        <div className="pl-8 transform group-hover:-translate-y-2 transition-all duration-300">
                          <div className="mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                            <IconComponent className="w-10 h-10 text-white" strokeWidth={1} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {service.title}
                          </h3>
                          <p className="text-white/0 group-hover:text-white/70 leading-relaxed transition-all duration-300">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Business Automation Section - Expandable Cards */}
        <section 
          id="automation-section"
          ref={el => sectionRefs.current['automation'] = el}
          className={`py-32 border-b border-white/10 bg-white/[0.02] transition-all duration-700 ${visibleSections['automation-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 glow-text">
                  Business Automation Solutions
                </h2>
                {/* Animated divider line */}
                <div className="h-px bg-white/20 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-white origin-left ${visibleSections['automation-section'] ? 'animate-width-expand' : 'scale-x-0'}`}></div>
                </div>
                <p className="text-xl text-white/70 mt-6">
                  Smart automation to reduce manual work, save costs, and scale faster.
                </p>
              </div>
              
              <div className="space-y-4 mt-16">
                {automationServices.map((service, index) => {
                  const IconComponent = service.icon;
                  const isExpanded = expandedCard === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setExpandedCard(isExpanded ? null : index)}
                      className={`group relative bg-black border border-white/10 rounded-lg cursor-pointer transition-all duration-400 ${
                        isExpanded 
                          ? 'border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]' 
                          : 'hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 flex-1">
                            <div className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-50'}`}>
                              <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className={`text-xl font-bold text-white transition-all duration-300 ${isExpanded ? 'glow-text-sm' : ''}`}>
                              {service.title}
                            </h3>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </div>
                        
                        <div className={`overflow-hidden transition-all duration-400 ${
                          isExpanded ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pl-10">
                            <p className="text-white/70 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Enhanced */}
        <section 
          id="why-section"
          ref={el => sectionRefs.current['why'] = el}
          className={`py-32 border-b border-white/10 bg-white/[0.01] transition-all duration-700 ${visibleSections['why-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 glow-text-sm">
                  Why Choose Us
                </h2>
                <div className="w-32 h-px bg-white/30 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-8 bg-black border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-6 flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center group-hover:border-white/40 group-hover:glow-border transition-all duration-300">
                            <Check className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:glow-text-sm transition-all">
                            {item.title}
                          </h3>
                          <div className="h-px w-0 bg-white group-hover:w-full transition-all duration-400"></div>
                        </div>
                      </div>
                      <p className="text-white/50 group-hover:text-white/70 leading-relaxed transition-all duration-300 pl-16">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Interactive Invert */}
        <section 
          id="cta-section"
          ref={el => sectionRefs.current['cta'] = el}
          className={`py-32 transition-all duration-700 ${visibleSections['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-4xl lg:text-6xl font-bold text-white glow-text leading-tight">
                Let's Build Smarter Systems<br />for Your Business
              </h2>
              <div>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center space-x-3 px-12 py-5 bg-black border-2 border-white text-white font-bold rounded-lg overflow-hidden text-lg transition-all duration-300 hover:scale-105"
                >
                  {/* Invert background on hover */}
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get in Touch</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:text-black transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

