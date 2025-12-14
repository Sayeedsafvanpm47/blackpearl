import Header from '../components/Header';
import Footer from '../components/Footer';
import { Bot, Zap, BarChart3, Rocket, TrendingUp, DollarSign, Calendar, ArrowRight } from 'lucide-react';

export default function Insights() {
  const insights = [
    {
      date: 'October 15, 2025',
      category: 'Investor Update',
      title: 'Q2 FY26 Investor Update',
      description: 'Blackpearl Group (BPG) today presents its results for the second quarter ending on 30 September 2025, demonstrating continued growth and strategic advancements.',
      color: 'from-[#00BFFF] to-[#8A2BE2]'
    },
    {
      date: 'October 7, 2025',
      category: 'Announcement',
      title: 'Blackpearl Capital Raising Oversubscribed',
      description: 'Blackpearl Group Limited (NZX: BPG) is pleased to announce the successful completion of its capital raising, with commitments to issue the remaining capacity from its $15 million capital raising (Offer) announced on 12 August 2025.',
      color: 'from-[#8A2BE2] to-[#00FFAA]'
    },
    {
      date: 'July 21, 2025',
      category: 'Investor Update',
      title: 'Q1 FY26 Investor Update',
      description: 'Blackpearl Group (BPG) today presents its results for the first quarter ending on 30 June 2025, demonstrating continued growth and strategic advancements.',
      color: 'from-[#00FFAA] to-[#00BFFF]'
    }
  ];

  const articles = [
    {
      icon: Bot,
      title: 'The Future of AI in Business',
      excerpt: 'How artificial intelligence is reshaping the enterprise landscape and creating new opportunities for growth.',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      icon: Zap,
      title: 'Innovating at Hyper-Speed',
      excerpt: 'Strategies for rapid innovation and staying ahead in the fastest evolving market in human history.',
      category: 'Innovation',
      readTime: '7 min read'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decision Making',
      excerpt: 'Leveraging analytics and AI to make informed business decisions that drive revenue and growth.',
      category: 'Analytics',
      readTime: '6 min read'
    },
    {
      icon: Rocket,
      title: 'Scaling Your Startup',
      excerpt: 'Best practices for entrepreneurs looking to scale their platforms and reach full potential.',
      category: 'Entrepreneurship',
      readTime: '8 min read'
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
              <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Insights & News</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Stay Informed
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
                Latest updates, insights, and announcements from Blackpearl
              </p>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Latest News</h2>
                <p className="text-xl text-white/70">Recent announcements and updates</p>
              </div>

              <div className="space-y-6">
                {insights.map((item, index) => (
                  <div
                    key={index}
                    className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-white/50">{item.date}</span>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white`}>
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-white glow-text-sm transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed text-lg">
                          {item.description}
                        </p>
                        <button className="inline-flex items-center space-x-2 text-white glow-text-sm font-semibold group-hover:space-x-3 transition-all">
                          <span>Read more</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                      <div>
                        {index === 0 ? (
                          <TrendingUp className="w-12 h-12 text-white glow-text-sm" />
                        ) : index === 1 ? (
                          <DollarSign className="w-12 h-12 text-white glow-text-sm" />
                        ) : (
                          <Calendar className="w-12 h-12 text-white glow-text-sm" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles & Insights */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Thought Leadership</h2>
                <p className="text-xl text-white/70">Insights on technology, innovation, and business growth</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => {
                  const IconComponent = article.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/50 glow-border transition-all cursor-pointer"
                    >
                      <div className="mb-4">
                        <IconComponent className="w-12 h-12 text-white glow-text-sm" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-sm">
                          <span className="text-white glow-text-sm font-semibold">{article.category}</span>
                          <span className="text-white/40">•</span>
                          <span className="text-white/50">{article.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-white glow-text-sm transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <button className="inline-flex items-center space-x-2 text-white glow-text-sm font-semibold group-hover:space-x-3 transition-all pt-2">
                          <span>Read article</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-3xl p-8 lg:p-16 text-center space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-xl text-white/70">
                  Get the latest insights, updates, and announcements delivered to your inbox
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white glow-border transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-black glow-button font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition-all whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-white/40">
                  No spam. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

