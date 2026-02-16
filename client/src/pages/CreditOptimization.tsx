import MainLayout from '../layouts/MainLayout';
import SecureForm from '../components/SecureForm';
import { AlertCircle, CheckSquare, FileWarning, Search, XCircle, TrendingUp, ShieldCheck, Scale } from 'lucide-react';
import { cn } from '../lib/utils';

const CreditOptimization = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Credit Profile Optimization</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                Strengthen Your <br/>
                <span className="text-brand-gold">Financial Reputation.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-brand-gold pl-6">
                Improving credit requires structure, patience, and accurate reporting. We provide disciplined review and dispute guidance tailored to each client’s file.
            </p>
        </div>
      </div>
    </section>
    
    <div className="bg-gray-50 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-16">
                    
                    {/* Issues Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-brand-navy mb-6 font-serif flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            Issues We Address
                        </h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            Every file is different. Our strategy is customized to target inaccurate, unverifiable, or erroneous reporting on your credit file.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Charge-offs", "Collections", "Late payments", "Bankruptcies",
                                "Repossessions", "Tax liens", "Judgments", "Identity theft",
                                "ChexSystems issues", "Student loan reporting"
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 hover:border-brand-gold/50 hover:shadow-md transition-all flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                                        <XCircle className="w-5 h-5" />
                                    </div>
                                    <span className="text-brand-navy font-bold text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Compliance Section */}
                    <section className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl relative">
                         {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#cca43b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        
                        <div className="p-10 relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <Scale className="w-6 h-6 text-brand-gold" />
                                <h3 className="text-2xl font-bold font-serif text-white">Compliance & Expectations</h3>
                            </div>
                            <p className="text-gray-400 mb-10 ml-9">Transparency is our core value.</p>
                            
                            <div className="space-y-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 mt-1 p-2 bg-brand-gold/10 rounded-lg">
                                            <ShieldCheck className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white mb-2">FCRA Compliance</h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                We operate with strict adherence to the Fair Credit Reporting Act (FCRA). You have the right to a 100% accurate and verifiable credit report.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 mt-1 p-2 bg-brand-gold/10 rounded-lg">
                                            <FileWarning className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white mb-2">No Unrealistic Promises</h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                We do not promise "overnight fixes." Credit repair is a legal process that takes time. Outcomes depend on bureau responses and the specific details of your history.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-24">
                        <SecureForm title="Request Credit Review" type="credit" className="shadow-2xl border-brand-gold/20" />
                        
                         <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckSquare className="w-6 h-6 text-green-600" />
                            </div>
                            <h4 className="font-bold text-brand-navy text-lg mb-2">Free Consultation</h4>
                            <p className="text-gray-600 text-sm mb-4">Not sure where to start? Let's review your report together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default CreditOptimization;
