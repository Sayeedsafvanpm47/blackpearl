'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: 'general',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <span className="text-sm uppercase tracking-wider text-white glow-text-sm font-semibold">Get in Touch</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
                Let's discuss how we can help your business innovate at hyper-speed
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-3xl p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
                  
                  {submitted && (
                    <div className="mb-6 p-4 bg-white/10 glow-border border border-white/30 glow-border rounded-lg">
                      <p className="text-white glow-text-sm font-semibold">Thank you! Your message has been sent.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white glow-border transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white glow-border transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white glow-border transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white glow-border transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white glow-border transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                        <option value="investment">Investment Opportunity</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white glow-border transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-white text-black glow-button font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition-all transform hover:scale-[1.02]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                    <p className="text-xl text-white/70 leading-relaxed">
                      Have a question or want to learn more about our solutions? 
                      We'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        title: 'Office',
                        info: '40 Johnston Street\nWellington 6011\nNew Zealand',
                        color: 'from-[#00BFFF] to-[#8A2BE2]'
                      },
                      {
                        icon: Mail,
                        title: 'Email',
                        info: 'hello@blackpearl.com',
                        color: 'from-[#8A2BE2] to-[#00FFAA]'
                      },
                      {
                        icon: Phone,
                        title: 'Phone',
                        info: '+64 4 XXX XXXX',
                        color: 'from-[#00FFAA] to-[#00BFFF]'
                      },
                      {
                        icon: Clock,
                        title: 'Hours',
                        info: 'Mon - Fri: 9:00 AM - 6:00 PM\nNZST',
                        color: 'from-[#00BFFF] to-[#00FFAA]'
                      }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={index}
                          className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                              <p className="text-white/70 whitespace-pre-line">{item.info}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-8 bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4">Investment Inquiries</h3>
                    <p className="text-white/70 mb-6">
                      Interested in investing? Learn more about opportunities with Blackpearl Group Limited (NZX: BPG).
                    </p>
                    <button className="px-6 py-3 bg-white text-black glow-button font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition-all">
                      Investor Information
                    </button>
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

