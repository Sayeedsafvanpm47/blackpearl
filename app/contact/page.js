'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaperTexture from '../components/PaperTexture';
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
      <PaperTexture />
      <Header />
      <main className="bg-transparent pt-20 relative">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 glow-border rounded-full filter blur-[120px]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-sm uppercase tracking-wider text-black glow-text-sm font-semibold">Get in Touch</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-black">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl text-black/70 leading-relaxed">
                Let's discuss how we can help your business grow
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-transparent border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-3xl p-8 lg:p-12 shadow-sm">
                  <h2 className="text-3xl font-bold text-black mb-8">Send us a message</h2>
                  
                  {submitted && (
                    <div className="mb-6 p-4 bg-black/5 border border-black/20 rounded-lg">
                      <p className="text-black font-semibold">Thank you! Your message has been sent.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
                          placeholder="+974 XXXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="printing">Printing Services</option>
                        <option value="automation">Business Automation</option>
                        <option value="digital">Digital Marketing</option>
                        <option value="development">Web Development</option>
                        <option value="translation">Translation Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/80 border border-black/10 rounded-lg text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full px-8 py-4 bg-black text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-[1.02] disabled:opacity-50"
                    >
                      {submitted ? 'Message Sent! ✓' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
                    <p className="text-xl text-black/70 leading-relaxed">
                      Have a question or want to learn more? We'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: MapPin,
                        title: 'Location',
                        info: 'Doha Mall\nDoha, Qatar'
                      },
                      {
                        icon: Mail,
                        title: 'Email',
                        info: 'info@blackpearl.qa'
                      },
                      {
                        icon: Phone,
                        title: 'Phone',
                        info: '+974 XXXX XXXX'
                      },
                      {
                        icon: Clock,
                        title: 'Hours',
                        info: 'Sun - Thu: 9:00 AM - 6:00 PM\nFri - Sat: Closed'
                      }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={index}
                          className="p-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl hover:border-black/30 transition-all shadow-sm"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-black rounded-xl">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                              <p className="text-black/70 whitespace-pre-line">{item.info}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-8 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-black mb-4">Visit Our Store</h3>
                    <p className="text-black/70 mb-6">
                      Stop by our location at Doha Mall for in-person consultations and printing services.
                    </p>
                    <a 
                      href="/contact"
                      className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-24 bg-black/[0.02] border-t border-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Visit Our Office</h2>
                <p className="text-xl text-black/70">
                  Conveniently located in Doha Mall
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Black Pearl</h3>
                      <div className="space-y-3 text-black/70">
                        <p className="flex items-start space-x-2">
                          <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                          <span>Doha Mall, Doha, Qatar</span>
                        </p>
                        <p className="flex items-start space-x-2">
                          <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                          <span>info@blackpearl.qa</span>
                        </p>
                        <p className="flex items-start space-x-2">
                          <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                          <span>+974 XXXX XXXX</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 bg-white/80 border border-black/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-24 h-24 text-black" strokeWidth={1} />
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
