import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-4xl font-bold text-brand-gold tracking-widest text-shadow-sm">ORIA</span>
              <span className="font-serif text-xs font-bold text-brand-gold tracking-[0.3em] ml-1">USA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Nationwide Financial Guidance. Structured for Stability.
              A disciplined approach to credit optimization, capital access, and business infrastructure.
            </p>
            <div className="flex gap-4 pt-4">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 rounded-full bg-brand-charcoal flex items-center justify-center hover:bg-brand-gold transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-charcoal flex items-center justify-center hover:bg-brand-gold transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/funding" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">Business Funding</Link></li>
              <li><Link to="/credit-optimization" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">Credit Optimization</Link></li>
              <li><Link to="/merchant-services" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">Merchant Services</Link></li>
              <li><Link to="/legal-services" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">Legal Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">About Us</Link></li>
              <li><Link to="/process" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">Our Process</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">Contact</Link></li>
              <li><Link to="/client-login" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">Client Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>123 Financial District Blvd<br/>Suite 400, New York, NY 10005</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>(800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>support@oriausa.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ORIA USA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclosures" className="text-xs text-gray-500 hover:text-white transition-colors">Disclosures</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50">
           <p className="text-center text-gray-600 text-xs max-w-4xl mx-auto leading-relaxed">
            ORIA USA is not a lender. We connect clients with vetted financial institutions and provide structured guidance throughout the process. Results vary based on individual financial circumstances. We do not guarantee approvals or specific credit outcomes. All services are performed in compliance with federal and state regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
