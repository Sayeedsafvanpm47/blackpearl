import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaperTexture from '../components/PaperTexture';
import { Bot, Settings, BarChart3, Lock, Globe, ArrowRight, Check, Zap } from 'lucide-react';

export const metadata = {
  title: 'Products',
  description: 'Explore Black Pearl\'s product portfolio including Bebop AI Platform and Pearl Engine. Enterprise solutions and AI-powered tools for modern businesses.',
  openGraph: {
    title: 'Our Products - AI Solutions & Enterprise Tools',
    description: 'Discover our flagship products: Bebop AI Platform and Pearl Engine for enterprise automation.',
  },
};

export default function Products() {
  return (
    <>
      <PaperTexture />
      <Header />
      <main className="bg-transparent pt-20 relative">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 glow-border rounded-full filter blur-[120px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-sm uppercase tracking-wider text-black glow-text-sm font-semibold">Our Products</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-black">
                Powerful Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-black/70 leading-relaxed">
                Enterprise-grade products designed for modern businesses
              </p>
            </div>
          </div>
        </section>

        {/* Featured: Bebop AI */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-3xl p-8 lg:p-16 shadow-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-2 bg-black/5 border border-black/20 rounded-full text-sm font-semibold text-black">
                      FEATURED PRODUCT
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black">Bebop AI Platform</h2>
                    <p className="text-xl text-black/70 leading-relaxed">
                      An advanced AI-powered platform designed to transform how businesses engage with customers and optimize their operations through intelligent automation and insights.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Intelligent customer engagement',
                        'Automated workflow optimization',
                        'Real-time analytics and insights',
                        'Seamless integration with existing systems',
                        'Scalable enterprise architecture'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-black/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                      >
                        <span>Request Demo</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black transition-all"
                      >
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-white/80 border border-black/10 rounded-2xl flex items-center justify-center shadow-sm">
                      <Bot className="w-48 h-48 text-black animate-float" strokeWidth={0.5} />
                    </div>
                    <div className="absolute -bottom-6 -right-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg">
                      BETA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pearl Engine */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-3xl p-8 lg:p-16 shadow-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div className="aspect-square bg-white/80 border border-black/10 rounded-2xl flex items-center justify-center shadow-sm">
                      <Settings className="w-48 h-48 text-black animate-float" strokeWidth={0.5} />
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <span className="inline-block px-4 py-2 bg-black/5 border border-black/20 rounded-full text-sm font-semibold text-black">
                      ENTERPRISE SOLUTION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black">Pearl Engine</h2>
                    <p className="text-xl text-black/70 leading-relaxed">
                      Our proprietary automation and integration engine that connects your business systems and automates complex workflows with ease.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Cross-platform integration',
                        'Visual workflow builder',
                        'Real-time data synchronization',
                        'Custom automation templates',
                        'Advanced monitoring & analytics'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-black flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-black/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href="/technology"
                        className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black transition-all"
                      >
                        <span>View Technology</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Coming Soon</h2>
                <p className="text-xl text-black/70">
                  More innovative products in development
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: BarChart3,
                    title: 'Analytics Suite',
                    description: 'Comprehensive business intelligence and reporting platform',
                    status: 'Q2 2025'
                  },
                  {
                    icon: Lock,
                    title: 'Security Hub',
                    description: 'Enterprise security management and compliance tools',
                    status: 'Q3 2025'
                  },
                  {
                    icon: Globe,
                    title: 'Commerce Platform',
                    description: 'Full-featured e-commerce solution for modern businesses',
                    status: 'Q4 2025'
                  }
                ].map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all shadow-sm"
                    >
                      <div className="mb-6">
                        <IconComponent className="w-16 h-16 text-black group-hover:glow-icon transition-all" strokeWidth={1.5} />
                      </div>
                      <div className="mb-2 inline-block px-3 py-1 bg-black/5 border border-black/20 rounded-full text-xs font-semibold text-black">
                        {product.status}
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-3">{product.title}</h3>
                      <p className="text-black/70 leading-relaxed">{product.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-black/[0.02] border-t border-black/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 glow-border rounded-full filter blur-[150px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block p-4 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl shadow-sm">
                <Zap className="w-16 h-16 text-black" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-black/70">
                Discover how our products can help you achieve your goals faster and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-black text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all transform hover:scale-105"
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black transition-all"
                >
                  View All Services
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
