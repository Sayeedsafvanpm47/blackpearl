'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Home, Lightbulb, Zap, Printer, BarChart3, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Lightbulb },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'Printing', href: '/printing', icon: Printer },
    { name: 'Insights', href: '/insights', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#000000]/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all glow-border">
              <span className="text-black font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-white glow-text-sm group-hover:glow-text transition-all">
              Blackpearl
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-all relative"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 glow-border"></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-white text-black font-semibold rounded-lg glow-button transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            <Link 
              href="/contact" 
              className="block w-full mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg text-center glow-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

