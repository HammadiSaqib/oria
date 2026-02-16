import MainLayout from '../layouts/MainLayout';
import { Shield, Users, Lock, BarChart, CheckCircle2, Target } from 'lucide-react';
import { cn } from '../lib/utils';

const About = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Our Mission & Values</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            Stability Through <br/>
            <span className="text-brand-gold">Structure.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A national financial guidance platform built on discipline, transparency, and a commitment to your long-term success.
        </p>
      </div>
    </section>
    
    <div className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div>
                    <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2 block">Who We Are</span>
                    <h2 className="text-4xl font-bold text-brand-navy mb-6 font-serif">More Than Just Funding. <br/>A Partner in Growth.</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        ORIA USA was founded to provide individuals and business owners with a structured, professional pathway to financial stability. We believe that access to capital and credit optimization should not be a guessing game, but a disciplined process driven by strategy and clear communication.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-brand-gold pl-6 italic">
                        "In a financial landscape often crowded with confusing options and aggressive sales tactics, we stand as a beacon of clarity. We are not here to sell you a dream; we are here to build the foundation for your reality."
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-navy rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
                    <div className="absolute inset-0 bg-brand-gold rounded-2xl transform -translate-x-4 -translate-y-4 opacity-20"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                        alt="Team meeting" 
                        className="relative rounded-2xl shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                {[
                    { icon: Shield, title: "Stability", desc: "We focus on long-term strength, not short-term fixes." },
                    { icon: Users, title: "Professionalism", desc: "Transparent communication and institutional standards." },
                    { icon: BarChart, title: "Structure", desc: "A defined, step-by-step process for every client file." },
                    { icon: Lock, title: "Security", desc: "Data protection and confidentiality are paramount." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                            <item.icon className="w-7 h-7 text-brand-navy group-hover:text-brand-gold transition-colors" />
                        </div>
                        <h3 className="font-bold text-brand-navy text-xl mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-brand-navy text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6 font-serif">Compliance-First Approach</h3>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
                        In an industry often characterized by aggressive marketing and overpromising, ORIA USA stands apart through its commitment to compliance and realistic expectations. We adhere strictly to federal and state regulations regarding credit repair and financial services.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "FCRA Compliant",
                            "CROA Compliant",
                            "Secure Data Handling",
                            "Transparent Pricing"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full border border-white/10 hover:bg-white/20 transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default About;
