import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Bot, Settings, BarChart3, Lock, Globe, ExternalLink, Check, ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <>
      <Header />
      <main className="bg-[#000000] pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 glow-border rounded-full filter blur-[120px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Our Products</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Next-Gen Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
                Purpose-built platforms designed to accelerate your business growth
              </p>
            </div>
          </div>
        </section>

        {/* Bebop Product */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-16 space-y-8">
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#8A2BE2]/20 to-[#00BFFF]/20 border border-white/30 glow-border rounded-full text-sm font-semibold text-white">
                        BETA LAUNCH
                      </div>
                      <h2 className="text-5xl lg:text-6xl font-bold text-white">Bebop</h2>
                      <p className="text-lg text-white glow-text-sm font-semibold">AI-Powered Revenue Platform</p>
                    </div>

                    <p className="text-xl text-white/80 leading-relaxed">
                      An advanced AI-powered conversational platform designed to create tailored, 
                      company-specific sales and revenue strategies. Think of it as ChatGPT, but 
                      purpose-built for driving business growth and revenue.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">Key Features</h3>
                      <ul className="space-y-3">
                      {[
                        'AI-powered revenue strategy generation',
                        'Company-specific customization',
                        'Real-time insights and analytics',
                        'Conversational interface',
                        'Integration with existing tools'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 text-white/70">
                          <Check className="w-5 h-5 text-white glow-text-sm flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="https://bebop.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black glow-button font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition-all"
                      >
                        <span>Visit BEBOP.AI</span>
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white glow-border transition-all"
                      >
                        Request Demo
                      </Link>
                    </div>
                  </div>

                  <div className="relative h-full min-h-[400px] bg-white/5 flex items-center justify-center">
                    <Bot className="w-40 h-40 text-white" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pearl Engine Product */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-full min-h-[400px] bg-white/5 flex items-center justify-center order-2 lg:order-1">
                    <Settings className="w-40 h-40 text-white animate-spin" style={{animationDuration: '20s'}} strokeWidth={1} />
                  </div>

                  <div className="p-8 lg:p-16 space-y-8 order-1 lg:order-2">
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#00FFAA]/20 to-[#00BFFF]/20 border border-white/30 glow-border rounded-full text-sm font-semibold text-white">
                        ENTERPRISE
                      </div>
                      <h2 className="text-5xl lg:text-6xl font-bold text-white">Pearl Engine</h2>
                      <p className="text-lg text-white glow-text-sm font-semibold">Innovation Platform</p>
                    </div>

                    <p className="text-xl text-white/80 leading-relaxed">
                      Our core innovation engine that powers rapid development and deployment 
                      of cutting-edge solutions. Built for enterprises that need to innovate at hyper-speed.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">Capabilities</h3>
                      <ul className="space-y-3">
                      {[
                        'Rapid prototyping and deployment',
                        'AI-powered optimization',
                        'Scalable cloud architecture',
                        'Real-time monitoring and analytics',
                        'Enterprise-grade security'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 text-white/70">
                          <Check className="w-5 h-5 text-white glow-text-sm flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-black glow-button text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition-all"
                      >
                        Contact Sales
                      </Link>
                      <Link
                        href="/technology"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white glow-border transition-all"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Coming Soon</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                  More Innovation on the Way
                </h2>
                <p className="text-xl text-white/70">
                  We're constantly developing new solutions to help businesses thrive
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: BarChart3, title: 'Analytics Suite', description: 'Advanced business intelligence platform' },
                  { icon: Lock, title: 'SecureCloud', description: 'Enterprise security solution' },
                  { icon: Globe, title: 'ConnectHub', description: 'Integration platform' }
                ].map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <div
                      key={index}
                      className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-all"
                    >
                      <div className="flex justify-center mb-4">
                        <IconComponent className="w-12 h-12 text-white glow-text-sm" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-white/60">{product.description}</p>
                      <div className="mt-4 inline-block px-3 py-1 bg-white/20 glow-border border border-white/30 glow-border rounded-full text-xs font-semibold text-white glow-text-sm">
                        Coming 2026
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

