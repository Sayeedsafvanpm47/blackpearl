import Link from 'next/link';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center glow-border">
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-white glow-text-sm">Blackpearl</span>
            </div>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Empowering companies with next-gen AI solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all hover:glow-border group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:glow-icon" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all hover:glow-border group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white group-hover:glow-icon" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all hover:glow-border group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white group-hover:glow-icon" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/60 hover:text-white hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-white/60 hover:text-white hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Insights</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/60 hover:text-white hover:glow-text-sm transition-all text-sm flex items-center space-x-2">
                  <span>→</span>
                  <span>Cookie Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white focus:glow-border transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-white text-black font-semibold rounded-lg glow-button transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm">
            © 2025 Blackpearl Group Limited. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            40 Johnston Street, Wellington 6011, New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}

