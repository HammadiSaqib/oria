import MainLayout from '../layouts/MainLayout';
import SecureForm from '../components/SecureForm';
import { CheckCircle, AlertTriangle, ArrowRight, TrendingUp, DollarSign, Calendar, Shield, PieChart } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Funding = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" />
                <span>Business Capital Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                Access Capital With <br/>
                <span className="text-brand-gold">Structure & Strategy.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-brand-gold pl-6">
                Funding approvals depend on preparation, profile strength, and strategic positioning. We help you approach capital access with discipline rather than guesswork.
            </p>
        </div>
      </div>
    </section>
    
    <div className="bg-gray-50 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-16">
                    
                    {/* Disclosure Banner */}
                    <div className="bg-white border-l-4 border-brand-navy p-6 rounded-r-xl shadow-sm flex gap-4 items-start">
                        <div className="p-2 bg-brand-navy/5 rounded-lg flex-shrink-0">
                             <Shield className="h-5 w-5 text-brand-navy" />
                        </div>
                        <div>
                            <p className="text-sm text-brand-navy/80 leading-relaxed">
                                <strong>Disclosure:</strong> ORIA USA is not a lender. We connect clients with vetted financial institutions and provide structured guidance throughout the process to ensure the highest probability of approval.
                            </p>
                        </div>
                    </div>

                    {/* Solutions Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-brand-navy mb-8 font-serif flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            Funding Solutions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Business Credit Cards", desc: "0% interest introductory offers and high-limit cards to separate expenses.", icon: DollarSign, color: "bg-blue-500" },
                                { title: "Lines of Credit", desc: "Flexible working capital to manage cash flow and opportunities.", icon: TrendingUp, color: "bg-emerald-500" },
                                { title: "Term Financing", desc: "Fixed-rate loans for equipment, expansion, or large purchases.", icon: Calendar, color: "bg-purple-500" },
                                { title: "Startup Capital", desc: "Pathways for new businesses to establish initial funding.", icon: CheckCircle, color: "bg-brand-gold" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg text-white transition-transform group-hover:scale-110", item.color)}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Common Mistakes Section */}
                    <section className="bg-brand-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                         
                        <h2 className="text-3xl font-bold mb-2 font-serif relative z-10">Common Pitfalls</h2>
                        <p className="text-brand-gold mb-10 relative z-10">Avoid these mistakes to secure better approvals.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {[
                                { title: "Unprepared Applications", desc: "Submitting before your profile is optimized leads to unnecessary denials." },
                                { title: "Excessive Inquiries", desc: "Too many recent hard pulls signal risk to lenders and lower scores." },
                                { title: "Weak Structure", desc: "Lenders require specific entity structures and compliance details." },
                                { title: "Comingling Funds", desc: "Poor separation of personal and business finances complicates approval." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <AlertTriangle className="w-5 h-5 text-red-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                                            <p className="text-sm text-gray-300 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
                            <p className="text-gray-300 font-medium italic">
                                "ORIA USA provides the corrective strategy to avoid these pitfalls and improve approval odds."
                            </p>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-24 space-y-8">
                        <SecureForm title="Start Your Funding Review" type="funding" className="shadow-2xl border-brand-gold/20" />
                        
                        <div className="p-6 bg-gradient-to-br from-brand-charcoal to-brand-navy rounded-2xl text-white text-center shadow-lg border border-white/5">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <PieChart className="w-6 h-6 text-brand-gold" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Need Quick Answers?</h4>
                            <p className="text-gray-300 text-sm mb-6">Speak directly with our funding desk for immediate guidance.</p>
                            <a href="tel:8005550199" className="inline-block w-full py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-colors">
                                (800) 555-0199
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default Funding;
