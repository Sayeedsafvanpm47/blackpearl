import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaperTexture from '../components/PaperTexture';
import { Bot, Zap, BarChart3, Rocket, TrendingUp, DollarSign, Calendar, ArrowRight, Mail } from 'lucide-react';

export default function Insights() {
  const latestNews = [
    {
      date: 'December 2024',
      title: 'Black Pearl Launches in Doha Mall',
      description: 'We are excited to announce the opening of our new location at Doha Mall, bringing comprehensive print, digital, and automation services to Qatar businesses.',
      icon: Rocket,
      category: 'Company News'
    },
    {
      date: 'January 2025',
      title: 'Introducing Business Automation Services',
      description: 'Launch of our n8n-powered automation packages designed to help SMEs streamline operations and reduce manual workload.',
      icon: Zap,
      category: 'Product Launch'
    },
    {
      date: 'Ongoing',
      title: 'Growing with Qatar Businesses',
      description: 'We continue to serve and partner with local businesses, offering integrated solutions that drive growth and efficiency.',
      icon: TrendingUp,
      category: 'Business Update'
    }
  ];

  const thoughtLeadership = [
    {
      icon: Bot,
      title: 'The Future of Business Automation',
      excerpt: 'How AI and automation are transforming small businesses and making enterprise-level capabilities accessible to everyone.',
      readTime: '5 min read',
      date: 'Jan 15, 2025'
    },
    {
      icon: Zap,
      title: 'Digital Marketing in 2025',
      excerpt: 'Essential strategies for local businesses to compete in Qatar\'s digital-first marketplace.',
      readTime: '7 min read',
      date: 'Jan 10, 2025'
    },
    {
      icon: BarChart3,
      title: 'Print vs Digital: Finding the Right Balance',
      excerpt: 'Why traditional print still matters in a digital world and how to integrate both for maximum impact.',
      readTime: '6 min read',
      date: 'Jan 5, 2025'
    },
    {
      icon: Rocket,
      title: 'Starting a Business in Qatar',
      excerpt: 'A practical guide to essential services every new business needs, from printing to digital presence.',
      readTime: '8 min read',
      date: 'Dec 28, 2024'
    }
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
              <span className="text-sm uppercase tracking-wider text-black glow-text-sm font-semibold">Insights & Updates</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-black">
                News & Insights
              </h1>
              <p className="text-xl lg:text-2xl text-black/70 leading-relaxed">
                Stay updated with the latest from Black Pearl and industry trends
              </p>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Latest News</h2>
                <p className="text-xl text-black/70">Company updates and announcements</p>
              </div>

              <div className="space-y-6">
                {latestNews.map((news, index) => {
                  const IconComponent = news.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all cursor-pointer shadow-sm"
                    >
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="p-4 bg-black rounded-xl group-hover:shadow-lg transition-all">
                            <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-black/5 border border-black/20 rounded-full text-xs font-semibold text-black">
                              {news.category}
                            </span>
                            <span className="flex items-center text-sm text-black/60">
                              <Calendar className="w-4 h-4 mr-2" />
                              {news.date}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-black mb-3 group-hover:glow-text-sm transition-all">
                            {news.title}
                          </h3>
                          <p className="text-black/70 leading-relaxed mb-4">
                            {news.description}
                          </p>
                          <Link
                            href="/contact"
                            className="inline-flex items-center space-x-2 text-black font-semibold hover:glow-text-sm transition-all"
                          >
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Thought Leadership */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Thought Leadership</h2>
                <p className="text-xl text-black/70">Industry insights and expert perspectives</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {thoughtLeadership.map((article, index) => {
                  const IconComponent = article.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 hover:bg-white/80 transition-all cursor-pointer shadow-sm"
                    >
                      <div className="mb-6">
                        <IconComponent className="w-12 h-12 text-black group-hover:glow-icon transition-all" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:glow-text-sm transition-all">
                        {article.title}
                      </h3>
                      <p className="text-black/70 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-black/60 mb-4">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 text-black font-semibold hover:glow-text-sm transition-all"
                      >
                        <span>Read article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-3xl p-8 lg:p-16 text-center shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6">
                  <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  Stay in the Loop
                </h2>
                <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest updates, industry insights, and special offers.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/80 border border-black/10 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-black transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-black/50 mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-black/[0.02] border-t border-black/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 glow-border rounded-full filter blur-[150px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Have a Story to Share?
              </h2>
              <p className="text-xl text-black/70">
                We'd love to hear from you. Get in touch to discuss partnerships, collaborations, or media inquiries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-10 py-5 bg-black text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-black/30 transition-all transform hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
