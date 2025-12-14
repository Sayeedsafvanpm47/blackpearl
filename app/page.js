import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { Rocket, Zap, Bot, TrendingUp, DollarSign, Calendar, ArrowRight, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#000000]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-black"></div>
          <AnimatedBackground />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 glow-border rounded-full filter blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 glow-border rounded-full filter blur-[120px] animate-pulse-glow" style={{animationDelay: '1s'}}></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                      Innovating at
                    </span>
                    <br />
                    <span className="text-white glow-text animate-pulse-glow">
                      Hyper-Speed
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-xl">
                    A modern startup combining print, digital, and automation solutions for growing businesses.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-white text-black glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white glow-border transition-all text-center"
                  >
                    Explore Solutions
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white glow-text">50+</div>
                    <div className="text-sm text-white/60">Happy Clients</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white glow-text">100%</div>
                    <div className="text-sm text-white/60">Dedication</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white glow-text">Fast</div>
                    <div className="text-sm text-white/60">Turnaround</div>
                  </div>
                </div>
              </div>

              {/* Right Content - 3D Abstract Graphic */}
              <div className="relative hidden lg:block">
                <div className="relative w-full h-[600px]">
                  {/* Floating geometric shapes */}
                  <div className="absolute top-1/4 left-1/4 w-40 h-40 border-4 border-white/30 glow-border rounded-3xl rotate-12 animate-float"></div>
                  <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/5 rounded-2xl -rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-36 h-36 border-4 border-white/30 glow-border rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                  
                  {/* Central glowing orb */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 bg-white/20 rounded-full opacity-20 animate-pulse-glow"></div>
                      <div className="absolute inset-4 bg-white/20 rounded-full opacity-40 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute inset-8 bg-white/20 rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/40" />
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Our Mission</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                  Empowering Entrepreneurs
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/50 glow-border transition-all group">
                  <div className="mb-4">
                    <Rocket className="w-12 h-12 text-white glow-text-sm" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white glow-text-sm transition-colors">All-in-One Solution</h3>
                  <p className="text-white/70 leading-relaxed">
                    From traditional printing to digital marketing and smart automation — we bring everything your business needs under one roof.
                  </p>
                </div>

                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/50 glow-border transition-all group">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-white glow-text-sm" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white glow-text-sm transition-colors">Fast & Affordable</h3>
                  <p className="text-white/70 leading-relaxed">
                    As a lean startup, we deliver quality services quickly without the overhead costs of traditional agencies. Get more value for your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-[#111] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8A2BE2]/10 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Featured Product</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                  Bebop AI Platform
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-white/50 glow-border transition-all">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#00BFFF]/20 to-[#8A2BE2]/20 border border-white/30 glow-border rounded-full text-sm font-semibold text-white">
                      BETA LAUNCH
                    </div>
                    <h3 className="text-4xl font-bold text-white">Smart Automation</h3>
                    <p className="text-xl text-white/70 leading-relaxed">
                      We leverage cutting-edge automation tools like n8n to streamline your business workflows, 
                      reduce manual work, and help small businesses compete with larger enterprises through smart systems.
                    </p>
                    <Link
                      href="https://bebop.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black glow-button font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition-all"
                    >
                      <span>Visit BEBOP.AI</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>

                  <div className="relative h-80 lg:h-96">
                    <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-3"></div>
                    <div className="absolute inset-2 bg-[#000000] rounded-2xl flex items-center justify-center">
                      <Bot className="w-32 h-32 text-white" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Latest Updates</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                  News & Announcements
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    date: 'December 2024',
                    title: 'Blackpearl Startup Launch',
                    description: 'Founded with a mission to bridge the gap between traditional print services and modern digital solutions for growing businesses.',
                    icon: Rocket
                  },
                  {
                    date: 'January 2025',
                    title: 'Automation Services Introduced',
                    description: 'Launched comprehensive business automation packages using n8n, helping SMEs reduce manual work and operational costs.',
                    icon: Zap
                  },
                  {
                    date: 'Ongoing',
                    title: 'Growing Our Client Base',
                    description: 'Actively serving Wellington businesses with integrated print, digital, and automation solutions tailored for startups and SMEs.',
                    icon: TrendingUp
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/50 glow-border transition-all cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="w-5 h-5 text-white glow-text-sm" />
                            <span className="text-sm text-white/50">{item.date}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mt-2 group-hover:text-white glow-text-sm transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white/70 mt-2">{item.description}</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-white glow-text-sm group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#111] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white">
                Ready to Level Up Your Business?
              </h2>
              <p className="text-xl text-white/70">
                Join growing Wellington businesses working with Blackpearl for modern solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-black glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/products"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white glow-border transition-all"
                >
                  View Products
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
