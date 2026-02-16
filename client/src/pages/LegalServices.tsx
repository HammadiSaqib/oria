import MainLayout from '../layouts/MainLayout';
import SecureForm from '../components/SecureForm';
import Button from '../components/ui/Button';
import { Scale, ShieldCheck, ArrowRight, BookOpen, Users, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const LegalServices = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
                <Gavel className="w-4 h-4" />
                <span>Legal Network & Resources</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                Access Trusted <br/>
                <span className="text-brand-gold">Legal Protection.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-brand-gold pl-6">
                Business and personal legal needs require reliable protection. We connect you with established legal service providers who understand the need for structure and stability.
            </p>
        </div>
      </div>
    </section>
    
    <div className="bg-gray-50 py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-lg">
                    <Scale className="w-10 h-10 text-brand-navy" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 font-serif">Comprehensive Legal Resources</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Whether for business formation, contract review, or personal asset protection, having the right legal team is crucial. We leverage our network to connect you with vetted professionals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Business Protection Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-brand-navy/5 rounded-lg group-hover:bg-brand-navy transition-colors">
                            <ShieldCheck className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy">Business Protection</h3>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Business Incorporation & LLC Formation",
                            "Contract Review & Drafting",
                            "Intellectual Property Protection",
                            "Partnership Agreements"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2"></div>
                                <span className="text-gray-700 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Personal Protection Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-brand-gold/10 rounded-lg group-hover:bg-brand-gold transition-colors">
                            <Users className="w-6 h-6 text-brand-gold group-hover:text-brand-navy transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy">Personal Protection</h3>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Estate Planning & Trusts",
                            "Asset Protection Strategies",
                            "Family Law Referrals",
                            "Real Estate Closings"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-2"></div>
                                <span className="text-gray-700 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                     <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 font-serif">Connect With a Legal Professional</h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                        Don't leave your future to chance. Get connected with the right legal counsel today.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-white border-none font-bold px-10 py-4 text-lg shadow-lg">
                            Contact Us to Learn More
                        </Button>
                    </Link>
                </div>
                {/* Decorative overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
            </div>

            <div className="mt-16 text-center text-xs text-gray-400 max-w-2xl mx-auto bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="leading-relaxed">
                    <strong>Disclosure:</strong> ORIA USA may receive an affiliate commission or referral fee for connections made to third-party legal service providers. ORIA USA is not a law firm and does not provide legal advice. All legal services are provided by independent attorneys.
                </p>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default LegalServices;
