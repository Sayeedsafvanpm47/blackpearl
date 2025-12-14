import Header from '../components/Header';
import Footer from '../components/Footer';
import { Bot, Cloud, Shield, BarChart3, Link2, Settings, Code, Database, Server, Box, Cable, Lock } from 'lucide-react';

export default function Technology() {
  const technologies = [
    {
      icon: Bot,
      title: 'Artificial Intelligence',
      description: 'Advanced AI models and machine learning algorithms that power intelligent decision-making and automation.',
      color: 'from-[#00BFFF] to-[#8A2BE2]',
      iconColor: 'text-white glow-text-sm'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions built on cutting-edge architecture for maximum performance.',
      color: 'from-[#8A2BE2] to-[#00FFAA]',
      iconColor: 'text-white glow-text-sm'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security protocols protecting your data and operations 24/7.',
      color: 'from-[#00FFAA] to-[#00BFFF]',
      iconColor: 'text-white glow-text-sm'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Real-time analytics and business intelligence to drive informed decisions.',
      color: 'from-[#00BFFF] to-[#00FFAA]',
      iconColor: 'text-white glow-text-sm'
    },
    {
      icon: Link2,
      title: 'API Integration',
      description: 'Seamless integration with existing systems through robust API architecture.',
      color: 'from-[#8A2BE2] to-[#00BFFF]',
      iconColor: 'text-white glow-text-sm'
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Intelligent workflow automation to streamline operations and boost productivity.',
      color: 'from-[#00FFAA] to-[#8A2BE2]',
      iconColor: 'text-white glow-text-sm'
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-[#000000] pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 glow-border rounded-full filter blur-[120px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Our Technology</span>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Cutting-Edge
                </span>
                <br />
                <span className="text-white glow-text">
                  Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
                Leveraging the latest technologies to drive innovation and business growth
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="mb-4">
                        <IconComponent className={`w-12 h-12 ${tech.iconColor}`} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                        {tech.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">{tech.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-[#111] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00BFFF]/10 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Tech Stack</h2>
                <p className="text-xl text-white/70">Built with industry-leading technologies</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { name: 'Python', icon: Code },
                  { name: 'Node.js', icon: Server },
                  { name: 'React', icon: Box },
                  { name: 'TensorFlow', icon: Bot },
                  { name: 'Docker', icon: Box },
                  { name: 'Kubernetes', icon: Settings },
                  { name: 'PostgreSQL', icon: Database },
                  { name: 'Redis', icon: Cable }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-white/50 glow-border transition-all group"
                    >
                      <div className="flex justify-center mb-3">
                        <IconComponent className="w-10 h-10 text-white group-hover:text-white glow-text-sm transition-colors" />
                      </div>
                      <div className="text-white font-semibold group-hover:text-white glow-text-sm transition-colors">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Pearl Engine Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-3xl p-8 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Our Core</span>
                    <h2 className="text-5xl lg:text-6xl font-bold text-white">Pearl Engine</h2>
                    <p className="text-xl text-white/80 leading-relaxed">
                      Our proprietary Pearl Engine powers rapid development and deployment of cutting-edge solutions. 
                      It's the innovation engine that drives everything we do, enabling us to move at hyper-speed.
                    </p>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-center space-x-3">
                        <span className="text-white glow-text-sm">✓</span>
                        <span>Rapid prototyping and deployment</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-white glow-text-sm">✓</span>
                        <span>AI-powered optimization</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-white glow-text-sm">✓</span>
                        <span>Scalable architecture</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative h-80">
                    <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                    <div className="absolute inset-2 bg-[#000000] rounded-2xl flex items-center justify-center">
                      <Settings className="w-32 h-32 text-white animate-spin" style={{animationDuration: '20s'}} strokeWidth={1} />
                    </div>
                  </div>
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

