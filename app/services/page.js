'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaperTexture from '../components/PaperTexture';
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
      description: 'Schedule and publish content automatically across all platforms.',
      icon: Megaphone
    },
    {
      title: 'Sales Report Generation & Modification',
      description: 'Automated data collection, visualization, and report customization.',
      icon: FileSpreadsheet
    },
    {
      title: 'Automated Email Campaigns',
      description: 'Triggered emails, sequences, and personalized messaging at scale.',
      icon: Mail
    },
    {
      title: 'CRM & Lead Automation',
      description: 'Lead scoring, routing, and automated follow-up workflows.',
      icon: Workflow
    },
    {
      title: 'Invoicing & Billing Automation',
      description: 'Automatic invoice generation, reminders, and payment tracking.',
      icon: Receipt
    },
    {
      title: 'Internal Workflow Automation',
      description: 'Custom task automation, approval flows, and team notifications.',
      icon: Bell
    },
    {
      title: 'Custom n8n Automation Bundles',
      description: 'Tailored automation solutions built with n8n for your specific needs.',
      icon: Cog
    }
  ];

  const whyChooseUs = [
    {
      icon: Check,
      title: 'One-Stop Solution',
      description: 'Print, digital, and automation under one roof'
    },
    {
      icon: ArrowRight,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality'
    },
    {
      icon: Globe,
      title: 'Modern Technology',
      description: 'Latest tools and cutting-edge solutions'
    },
    {
      icon: BarChart3,
      title: 'Proven Results',
      description: 'Track record of successful projects'
    },
    {
      icon: Cog,
      title: 'Custom Solutions',
      description: 'Tailored to your specific business needs'
    },
    {
      icon: Megaphone,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    }
  ];

  return (
    <>
      <PaperTexture />
      <Header />
      <main className="bg-transparent pt-20 relative">
        {/* Hero Section */}
        <section 
          id="hero"
          ref={el => sectionRefs.current['hero'] = el}
          className={`relative py-32 overflow-hidden transition-opacity duration-700 ${
            visibleSections['hero'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 glow-border rounded-full filter blur-[120px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="h-px w-24 bg-black/30 mx-auto animate-width-expand"></div>
              <h1 className="text-5xl lg:text-7xl font-bold text-black animate-fade-in-up">
                Our Services
              </h1>
              <p className="text-xl lg:text-2xl text-black/70 leading-relaxed animate-fade-in-up-delay">
                Professional, interactive, and designed for modern businesses
              </p>
            </div>
          </div>
        </section>

        {/* Creative & Print Studio */}
        <section 
          id="print"
          ref={el => sectionRefs.current['print'] = el}
          className={`py-24 bg-transparent border-t border-black/10 transition-opacity duration-700 ${
            visibleSections['print'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Creative & Print Studio</h2>
                <p className="text-xl text-black/70">From documents to merchandise—we print it all.</p>
              </div>

              <div className="relative">
                <div className="flex overflow-x-auto gap-6 pb-6 custom-scrollbar">
                  {printServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={index}
                        className="group min-w-[320px] p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all duration-300 cursor-pointer shadow-sm"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <IconComponent className="w-12 h-12 text-black mb-6 group-hover:glow-icon transition-all" strokeWidth={1.5} />
                        <h3 className="text-2xl font-bold text-black mb-3 relative">
                          {service.title}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 origin-left"></span>
                        </h3>
                        <p className="text-black/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 text-sm text-black/40">
                  <div className="h-px w-8 bg-black/20"></div>
                  <span>Scroll to explore</span>
                  <div className="h-px w-8 bg-black/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Solutions */}
        <section 
          id="digital"
          ref={el => sectionRefs.current['digital'] = el}
          className={`py-24 bg-black/[0.02] border-t border-black/10 transition-opacity duration-700 ${
            visibleSections['digital'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Digital Solutions</h2>
                <p className="text-xl text-black/70">Build your digital presence and grow online.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all duration-300 cursor-pointer relative overflow-hidden shadow-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative z-10">
                        <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                          <IconComponent className="w-12 h-12 text-black" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                          {service.title}
                        </h3>
                        <p className="text-black/60 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {service.description}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-0 w-px bg-black group-hover:h-full transition-all duration-400 origin-bottom"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Business Automation */}
        <section 
          id="automation"
          ref={el => sectionRefs.current['automation'] = el}
          className={`py-24 bg-transparent border-t border-black/10 transition-opacity duration-700 ${
            visibleSections['automation'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Automation for Businesses</h2>
                <p className="text-xl text-black/70">Work smarter with custom automation solutions.</p>
              </div>

              <div className="space-y-4">
                {automationServices.map((service, index) => {
                  const IconComponent = service.icon;
                  const isExpanded = expandedCard === index;
                  
                  return (
                    <div
                      key={index}
                      className={`group bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 shadow-sm hover:border-black/30 ${
                        isExpanded ? 'bg-white/80' : ''
                      }`}
                      onClick={() => setExpandedCard(isExpanded ? null : index)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="p-3 bg-black/5 rounded-xl group-hover:bg-black/10 transition-colors">
                            <IconComponent className="w-6 h-6 text-black" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-lg font-bold text-black">
                            {service.title}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-black/40 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-400 ${
                          isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-black/70 leading-relaxed">
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

        {/* Why Choose Us */}
        <section 
          id="why"
          ref={el => sectionRefs.current['why'] = el}
          className={`py-24 bg-black/[0.02] border-t border-black/10 transition-opacity duration-700 ${
            visibleSections['why'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Why Choose Us</h2>
                <p className="text-xl text-black/70">Six reasons to work with Black Pearl</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((reason, index) => {
                  const IconComponent = reason.icon;
                  return (
                    <div
                      key={index}
                      className="group text-center p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all duration-300 shadow-sm"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-black/5 border border-black/10 rounded-2xl mb-6 group-hover:border-black/30 transition-all">
                        <IconComponent className="w-8 h-8 text-black" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-3 relative inline-block">
                        {reason.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 origin-left"></span>
                      </h3>
                      <p className="text-black/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-transparent border-t border-black/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 glow-border rounded-full filter blur-[150px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-black/70">
                Let's discuss your project and how we can help your business grow.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-10 py-5 bg-black text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all transform hover:scale-105"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
