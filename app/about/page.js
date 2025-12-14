import Header from '../components/Header';
import Footer from '../components/Footer';
import { Zap, Rocket, Target, Sparkles, MapPin } from 'lucide-react';

export default function About() {
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
              <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">About Blackpearl</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Bridging Traditional & Digital
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
                A Wellington startup bringing print, digital, and automation services under one roof
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Story</h2>
              </div>
              
              <div className="space-y-8 text-lg lg:text-xl text-white/80 leading-relaxed">
                <p>
                  Blackpearl started with a simple observation: small businesses need more than just printing or just digital services — they need integrated solutions that work together seamlessly.
                </p>
                <p>
                  Founded in Wellington, we combined traditional print expertise with modern digital marketing and cutting-edge automation. 
                  As a startup ourselves, we understand the challenges growing businesses face and the need for cost-effective, reliable services.
                </p>
                <p>
                  Today, we serve Wellington-based businesses and beyond, offering everything from custom merchandise printing to social media management and smart workflow automation — all designed to help small teams compete in a digital-first world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-[#111] relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#8A2BE2]/10 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Values</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Zap,
                    title: 'Fast & Responsive',
                    description: 'As a lean startup, we respond quickly to client needs without corporate bureaucracy. Your project gets personal attention.',
                    color: 'from-[#00BFFF] to-[#8A2BE2]',
                    iconColor: 'text-white glow-text-sm'
                  },
                  {
                    icon: Rocket,
                    title: 'Startup Mentality',
                    description: 'We understand startup challenges because we are one. Flexible, innovative, and always finding creative solutions.',
                    color: 'from-[#8A2BE2] to-[#00FFAA]',
                    iconColor: 'text-white glow-text-sm'
                  },
                  {
                    icon: Target,
                    title: 'Cost-Effective Excellence',
                    description: 'Quality services without enterprise pricing. We keep overhead low to pass savings to clients while maintaining high standards.',
                    color: 'from-[#00FFAA] to-[#00BFFF]',
                    iconColor: 'text-white glow-text-sm'
                  },
                  {
                    icon: Sparkles,
                    title: 'Integrated Approach',
                    description: "One team, multiple services. Your print, digital, and automation needs handled cohesively by people who understand your business.",
                    color: 'from-[#00BFFF] to-[#00FFAA]',
                    iconColor: 'text-white glow-text-sm'
                  }
                ].map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
                    >
                      <div className="mb-4">
                        <IconComponent className={`w-12 h-12 ${value.iconColor}`} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                        {value.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Ad Astra Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-3xl p-8 lg:p-16">
                <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">What We Believe</span>
                <h2 className="text-5xl lg:text-7xl font-bold text-white mt-4 mb-8">Small Teams, Big Impact</h2>
                <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
                  We believe small businesses shouldn't have to choose between quality and affordability, or between traditional and digital services. 
                  At Blackpearl, we're proving that a lean, focused startup can deliver comprehensive solutions that help local businesses thrive in the modern marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">Find Us</h2>
                  <div className="space-y-4 text-white/70">
                    <p className="text-xl">
                      <span className="font-semibold text-white">Blackpearl</span>
                    </p>
                    <p>
                      Based in Wellington, New Zealand<br />
                      Serving local and remote clients<br />
                      <span className="text-sm text-white/50 mt-2 block">Contact us for our current location</span>
                    </p>
                  </div>
                </div>
                <div className="h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-24 h-24 text-white glow-text-sm" strokeWidth={1.5} />
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

