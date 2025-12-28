import Header from '../components/Header';
import Footer from '../components/Footer';
import PaperTexture from '../components/PaperTexture';
import { Bot, Cloud, Shield, BarChart3, Link2, Settings, Code, Database, Server, Box, Cable, Lock } from 'lucide-react';

export const metadata = {
  title: 'Technology',
  description: 'Discover the cutting-edge technology stack powering Black Pearl. AI, cloud infrastructure, cybersecurity, and enterprise solutions for modern businesses.',
  keywords: ['AI technology', 'cloud infrastructure', 'cybersecurity', 'enterprise solutions', 'tech stack', 'business technology'],
  openGraph: {
    title: 'Our Technology Stack - Innovation at Scale',
    description: 'Explore the advanced technology and infrastructure behind Black Pearl\'s services.',
  },
};

export default function Technology() {
  const technologies = [
    {
      icon: Bot,
      title: 'Artificial Intelligence',
      description: 'Advanced AI models and machine learning algorithms that power intelligent decision-making and automation.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions built on cutting-edge architecture for maximum performance.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security protocols protecting your data and operations 24/7.'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Real-time analytics and business intelligence to drive informed decisions.'
    },
    {
      icon: Link2,
      title: 'API Integration',
      description: 'Seamless integration with existing systems through robust API architecture.'
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Intelligent workflow automation to streamline operations and boost productivity.'
    }
  ];

  const techStack = [
    { icon: Code, name: 'Next.js', category: 'Framework' },
    { icon: Server, name: 'Node.js', category: 'Runtime' },
    { icon: Box, name: 'Docker', category: 'Containers' },
    { icon: Database, name: 'PostgreSQL', category: 'Database' },
    { icon: Cable, name: 'n8n', category: 'Automation' },
    { icon: Lock, name: 'Auth0', category: 'Security' }
  ];

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
              <span className="text-sm uppercase tracking-wider text-black glow-text-sm font-semibold">Our Technology</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-black">
                Built on Innovation
              </h1>
              <p className="text-xl lg:text-2xl text-black/70 leading-relaxed">
                Cutting-edge technology powering modern business solutions
              </p>
            </div>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Technology Overview</h2>
                <p className="text-xl text-black/70 max-w-3xl mx-auto">
                  We leverage the latest technologies to deliver powerful, scalable solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      <div className="mb-4">
                        <IconComponent className="w-12 h-12 text-black group-hover:glow-icon transition-all" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {tech.title}
                      </h3>
                      <p className="text-black/70 leading-relaxed">{tech.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Our Tech Stack</h2>
                <p className="text-xl text-black/70">
                  Industry-leading tools and frameworks
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {techStack.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={index}
                      className="group p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl hover:border-black/30 hover:bg-white/80 transition-all text-center shadow-sm"
                    >
                      <IconComponent className="w-12 h-12 text-black mx-auto mb-4 group-hover:glow-icon transition-all" strokeWidth={1.5} />
                      <h3 className="font-bold text-black text-sm mb-1">{tech.name}</h3>
                      <p className="text-xs text-black/60">{tech.category}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Pearl Engine Section */}
        <section className="py-24 bg-transparent border-t border-black/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/5 rounded-full filter blur-[150px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-3xl p-8 lg:p-16 shadow-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-2 bg-black/5 border border-black/20 rounded-full text-sm font-semibold text-black mb-4">
                      CORE TECHNOLOGY
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black">Pearl Engine</h2>
                    <p className="text-xl text-black/70 leading-relaxed">
                      Our proprietary automation and integration engine that powers seamless business workflows and intelligent data processing.
                    </p>
                    <div className="space-y-3">
                      {[
                        'Real-time data synchronization',
                        'Multi-platform integration',
                        'Intelligent workflow automation',
                        'Advanced analytics processing'
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-black/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-white/80 border border-black/10 rounded-2xl flex items-center justify-center shadow-sm">
                      <Settings className="w-32 h-32 text-black animate-float" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Promise */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Continuously Evolving
              </h2>
              <p className="text-xl text-black/70 leading-relaxed">
                We stay ahead of the curve by constantly updating our technology stack and adopting emerging solutions that benefit our clients.
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-black mb-2">99.9%</div>
                  <div className="text-sm text-black/60">Uptime</div>
                </div>
                <div className="p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-black mb-2">&lt;100ms</div>
                  <div className="text-sm text-black/60">Response Time</div>
                </div>
                <div className="p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-black mb-2">24/7</div>
                  <div className="text-sm text-black/60">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
