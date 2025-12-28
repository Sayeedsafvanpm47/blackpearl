import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import PaperTexture from './components/PaperTexture';
import { Rocket, Zap, Bot, TrendingUp, ArrowRight, ChevronDown, Printer, Settings, Globe, Megaphone, Languages, Sparkles, Package, Camera, CheckCircle, Clock, MapPin, Truck } from 'lucide-react';

export default function Home() {
  return (
    <>
      <PaperTexture />
      <Header />
      <main className="bg-transparent relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
          <div className="absolute inset-0 bg-transparent"></div>
          <AnimatedBackground />
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/10 glow-border rounded-full filter blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black/10 glow-border rounded-full filter blur-[120px] animate-pulse-glow" style={{animationDelay: '1s'}}></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-black via-black to-black/80 bg-clip-text text-transparent">
                      Print. Automate.
                    </span>
                    <br />
                    <span className="text-black glow-text animate-pulse-glow">
                      Create. Grow.
                    </span>
          </h1>
                  <p className="text-2xl lg:text-3xl text-black/70 leading-relaxed max-w-4xl mx-auto font-semibold">
                    Your One-Stop Printing, IT & AI Studio in Doha Mall
                  </p>
                  <p className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-3xl mx-auto">
                    From instant print services to smart business automation, digital marketing, and AI-powered creative production—Black Pearl helps individuals and SMEs turn ideas into impact.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
                  <Link
                    href="/services"
                    className="group px-6 py-4 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Order Printing Online</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="group px-6 py-4 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105 text-center"
                  >
                    <span>Talk to an Expert</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-4 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black glow-border transition-all text-center"
                  >
                    Visit Our Store – Doha Mall
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-4 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black glow-border transition-all text-center"
                  >
                    Explore Services
                  </Link>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
                  <div className="flex flex-col items-center space-y-2">
                    <Clock className="w-8 h-8 text-black glow-icon" />
                    <div className="text-xl font-bold text-black glow-text-sm">Same Day</div>
                    <div className="text-sm text-black/60">Printing Available</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="w-8 h-8 text-black glow-icon" />
                    <div className="text-xl font-bold text-black glow-text-sm">Doha Mall</div>
                    <div className="text-sm text-black/60">Prime Location</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Globe className="w-8 h-8 text-black glow-icon" />
                    <div className="text-xl font-bold text-black glow-text-sm">Online</div>
                    <div className="text-sm text-black/60">Order Anytime</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Truck className="w-8 h-8 text-black glow-icon" />
                    <div className="text-xl font-bold text-black glow-text-sm">Delivery</div>
                    <div className="text-sm text-black/60">Across Qatar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-black/40" />
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 glow-text-sm">
                  Everything Your Business Needs—Under One Roof
                </h2>
                <p className="text-xl text-black/70 max-w-4xl mx-auto leading-relaxed">
                  Black Pearl is more than a printing shop. We are a modern business support studio combining printing, IT solutions, automation, digital marketing, development, translation, and AI creativity—designed for speed, quality, and scalability.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Printer, title: 'Online & In-Store Printing', desc: 'From documents to merchandise' },
                  { icon: Settings, title: 'Business Automation (n8n)', desc: 'Smart workflows & integrations' },
                  { icon: Megaphone, title: 'Digital Marketing & Growth', desc: 'SEO, ads & social media' },
                  { icon: Globe, title: 'Website & App Development', desc: 'Custom digital solutions' },
                  { icon: Languages, title: 'Translation & Localization', desc: 'Arabic ↔ English & more' },
                  { icon: Bot, title: 'AI Creative Studio', desc: 'AI-powered photo & video' }
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      <div className="mb-4">
                        <IconComponent className="w-12 h-12 text-black group-hover:glow-icon transition-all" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:glow-text-sm transition-all">
                        {service.title}
                      </h3>
                      <p className="text-black/60 leading-relaxed text-sm">
                        {service.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Smart Online Printing Experience */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-black glow-text-sm">
                    Print Online. Pick Up or Deliver.
                  </h2>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Upload your files, customize your print requirements, and place your order online—simple as that.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Upload PDFs for books, documents, brochures & more',
                      'Choose paper type, binding, quantity, and finish',
                      'Pick up at Doha Mall or get it delivered across Qatar'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1 glow-icon" />
                        <span className="text-black/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105"
                  >
                    <span>Start Printing Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-black mb-6 glow-text-sm">Available Printing Services:</h3>
                  <div className="space-y-3">
                    {[
                      'Document & Book Printing',
                      'Business Cards, Flyers & Brochures',
                      'T-Shirt & Merchandise Printing',
                      'Mug, Gift & Promotional Printing',
                      'Large Format & Custom Prints'
                    ].map((service, i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all border border-black/5">
                        <Printer className="w-5 h-5 text-black glow-icon" />
                        <span className="text-black/80">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Solutions & Business Automation */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 glow-text-sm">
                  Work Smarter. Save Time. Reduce Costs.
                </h2>
                <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                  We help SMEs and growing businesses automate workflows using n8n and smart integrations, reducing manual work and operational overhead.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Automated lead management', icon: TrendingUp },
                  { title: 'CRM & WhatsApp automation', icon: Settings },
                  { title: 'Invoice & reporting workflows', icon: Package },
                  { title: 'Marketing and data sync automation', icon: Megaphone }
                ].map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <div key={i} className="flex items-center space-x-4 p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl hover:border-black/30 hover:bg-white/80 transition-all shadow-sm">
                      <IconComp className="w-10 h-10 text-black glow-icon" />
                      <span className="text-lg text-black">{item.title}</span>
                    </div>
                  );
                })}
              </div>

              <div className="text-center bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-8 shadow-sm">
                <p className="text-xl text-black/80 mb-6">
                  <span className="font-semibold text-black glow-text-sm">Custom-built automations</span> tailored to your business—no unnecessary complexity.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105"
                >
                  <span>Book an Automation Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Marketing & Growth Services */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-black glow-text-sm">
                    Be Seen. Be Heard. Get Results.
                  </h2>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Black Pearl helps brands grow online with performance-driven digital marketing strategies.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105"
                  >
                    <span>Grow My Business</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'SEO & Local SEO (Qatar-focused)',
                    'Paid Ads (Google, Meta, Social)',
                    'Content Creation & Marketing',
                    'Brand Strategy & Campaigns',
                    'Social Media Management',
                    'Performance Analytics'
                  ].map((service, i) => (
                    <div key={i} className="p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl hover:border-black/30 hover:bg-white/80 transition-all text-center shadow-sm">
                      <Megaphone className="w-8 h-8 text-black glow-icon mx-auto mb-3" />
                      <p className="text-sm text-black/80">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website & App Development */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 glow-text-sm">
                  Build Digital Experiences That Convert
                </h2>
                <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                  From landing pages to full-scale platforms, we design and develop fast, scalable digital solutions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {[
                  'Business Websites & E-Commerce',
                  'Custom Web Applications',
                  'Mobile App Development',
                  'UI/UX Design',
                  'Maintenance & Hosting Support'
                ].map((service, i) => (
                  <div key={i} className="p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-xl hover:border-black/30 hover:bg-white/80 transition-all text-center shadow-sm">
                    <Globe className="w-10 h-10 text-black glow-icon mx-auto mb-3" />
                    <p className="text-sm text-black/80">{service}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Translation & Localization Services */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-12 text-center shadow-sm">
                  <Languages className="w-24 h-24 text-black glow-icon mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-black mb-4 glow-text-sm">Arabic ↔ English</h3>
                  <p className="text-black/70">Professional translation services</p>
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-black glow-text-sm">
                    Communicate Clearly—Across Languages
                  </h2>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Professional translation services tailored for businesses operating in Qatar's multilingual environment.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Business Documents & Marketing Material',
                      'Websites, Apps & Legal Content',
                      'Technical Documentation',
                      'Certified Translations Available'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-black glow-icon" />
                        <span className="text-black/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black glow-border transition-all"
                  >
                    <span>Request Translation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Creative Studio (Signature Feature) */}
        <section className="py-32 bg-transparent relative overflow-hidden border-t border-black/10">
          <div className="absolute inset-0 bg-black/[0.01]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 glow-border rounded-full filter blur-[120px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-black/5 border border-black/20 rounded-full text-sm font-semibold text-black glow-text-sm mb-6">
                  SIGNATURE FEATURE
                </span>
                <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 glow-text">
                  Create the Future with AI
                </h2>
                <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                  Our AI Studio blends creativity with technology—perfect for individuals, creators, and brands.
          </p>
        </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Camera, title: 'Green Screen Photography & Video', desc: 'Professional studio setup for immersive content' },
                  { icon: Sparkles, title: 'AI-Enhanced Photos & Visuals', desc: 'Transform ordinary shots into stunning visuals' },
                  { icon: Bot, title: 'AI-Powered Video Production', desc: 'Automated editing and effects' },
                  { icon: Package, title: 'Creative Branding Assets', desc: 'Content for Ads, Social & Campaigns' }
                ].map((feature, i) => {
                  const IconComp = feature.icon;
                  return (
                    <div key={i} className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all shadow-sm">
                      <IconComp className="w-12 h-12 text-black group-hover:glow-icon mb-4 transition-all" />
                      <h3 className="text-2xl font-bold text-black mb-2 group-hover:glow-text-sm transition-all">{feature.title}</h3>
                      <p className="text-black/60">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-black/5 to-black/10 border border-black/20 rounded-2xl p-12 text-center">
                <p className="text-2xl text-black font-semibold mb-6 glow-text-sm">
                  Walk in with an idea. Walk out with production-ready content.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105"
                >
                  <span>Book the AI Studio</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Black Pearl? */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 glow-text-sm">
                  Why Choose Black Pearl?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Package, title: 'One-Stop Business Solution Hub', desc: 'Everything you need in one place' },
                  { icon: Globe, title: 'Physical Store + Online Platform', desc: 'Visit us or order online' },
                  { icon: Clock, title: 'Fast Turnaround & Premium Quality', desc: 'Speed without compromise' },
                  { icon: TrendingUp, title: 'SME-Focused, Cost-Efficient Services', desc: 'Built for growing businesses' },
                  { icon: Bot, title: 'Cutting-Edge Tech & AI Integration', desc: 'Future-ready solutions' },
                  { icon: MapPin, title: 'Located in Doha Mall for Easy Access', desc: 'Convenient central location' }
                ].map((point, i) => {
                  const IconComp = point.icon;
                  return (
                    <div key={i} className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all text-center shadow-sm">
                      <IconComp className="w-12 h-12 text-black glow-icon mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:glow-text-sm transition-all">{point.title}</h3>
                      <p className="text-sm text-black/60">{point.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-32 bg-transparent relative overflow-hidden border-t border-black/10">
          <div className="absolute inset-0 bg-black/[0.01]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/10 glow-border rounded-full filter blur-[150px] animate-pulse-glow"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-4xl lg:text-6xl font-bold text-black glow-text leading-tight">
                Let's Build, Print & Grow—Together
              </h2>
              <p className="text-xl text-black/70">
                Whether you're an individual, startup, or established business, Black Pearl is here to support every stage of your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-10 py-5 bg-black text-white glow-button font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/50 transition-all transform hover:scale-105 text-center text-lg"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Visit Us at Doha Mall</span>
                    <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 hover:border-black glow-border transition-all text-center text-lg"
                >
                  Get a Free Consultation
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
