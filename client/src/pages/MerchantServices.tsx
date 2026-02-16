import MainLayout from '../layouts/MainLayout';
import SecureForm from '../components/SecureForm';
import { Percent, FileText, BarChart3, Check, Store, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const MerchantServices = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
                <Store className="w-4 h-4" />
                <span>Merchant Processing Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                Optimize Your <br/>
                <span className="text-brand-gold">Payment Infrastructure.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-brand-gold pl-6">
                Payment processing impacts your bottom line. We review statements, identify inefficiencies, and help improve cost structure and infrastructure.
            </p>
        </div>
      </div>
    </section>
    
    <div className="bg-gray-50 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-16">
                    
                    {/* Processing Review Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-brand-navy mb-6 font-serif flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            Processing Review
                        </h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            Many businesses overpay for merchant services due to opaque pricing models and outdated infrastructure. We provide a comprehensive analysis to identify savings and optimization opportunities.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                                    <FileText className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-brand-navy text-xl mb-2">Audit</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Deep dive into your current processing statements to find hidden fees.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold transition-colors">
                                    <Percent className="w-8 h-8 text-brand-gold group-hover:text-brand-navy transition-colors" />
                                </div>
                                <h3 className="font-bold text-brand-navy text-xl mb-2">Negotiate</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Leverage our network to restructure rates and reduce overhead.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors">
                                    <BarChart3 className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-brand-navy text-xl mb-2">Optimize</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Upgrade infrastructure for better efficiency and security compliance.</p>
                            </div>
                        </div>
                    </section>

                    {/* Why Review Section */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                         <div className="flex items-center gap-3 mb-8">
                             <div className="p-2 bg-brand-navy rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-brand-gold" />
                             </div>
                             <h2 className="text-2xl font-bold text-brand-navy font-serif">Why Review Your Processing?</h2>
                         </div>
                         
                         <div className="space-y-4">
                            {[
                                "Reduce monthly operating costs immediately",
                                "Ensure PCI compliance and data security",
                                "Access next-day funding options",
                                "Upgrade to modern POS systems",
                                "Eliminate hidden junk fees"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-brand-light transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="text-brand-navy font-medium text-lg">{item}</span>
                                </div>
                            ))}
                         </div>
                    </section>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <SecureForm title="Request Processing Review" type="merchant" className="shadow-2xl border-brand-gold/20" />
                        
                        <div className="mt-8 p-6 bg-brand-navy text-white rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl group-hover:bg-brand-gold/30 transition-colors"></div>
                            <h4 className="font-bold text-lg mb-2 relative z-10">Upload Statement</h4>
                            <p className="text-gray-300 text-sm mb-4 relative z-10">Already have a recent statement? Upload it securely for a free analysis.</p>
                            <div className="flex items-center text-brand-gold font-bold text-sm group-hover:translate-x-2 transition-transform">
                                Upload Now <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default MerchantServices;
