import Link from 'next/link';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-black/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center glow-border">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-black glow-text-sm">Blackpearl</span>
            </div>
            <p className="text-black/60 text-sm mb-4 leading-relaxed">
              Your One-Stop Printing, IT & AI Studio in Doha Mall, Qatar.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-black/5 hover:bg-black/10 rounded-lg flex items-center justify-center transition-all hover:glow-border group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black group-hover:glow-icon" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-black/5 hover:bg-black/10 rounded-lg flex items-center justify-center transition-all hover:glow-border group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-black group-hover:glow-icon" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-black/5 hover:bg-black/10 rounded-lg flex items-center justify-center transition-all hover:glow-border group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-black group-hover:glow-icon" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Printing Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>IT & Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Digital Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>AI Creative Studio</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Translation Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Insights & Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-black/60 hover:text-black hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Our Technology</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">Visit Us</h4>
            <div className="space-y-3 text-black/60 text-sm">
              <p>
                <span className="font-semibold text-black block mb-1">Black Pearl</span>
                Doha Mall<br />
                Doha, Qatar
              </p>
              <div className="pt-2 space-y-2">
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>info@blackpearl.qa</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+974 XXXX XXXX</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-black/40 text-sm">
            © 2025 Black Pearl. All rights reserved.
          </p>
          <p className="text-black/40 text-sm">
            Doha Mall, Doha, Qatar
          </p>
        </div>
      </div>
    </footer>
  );
}

