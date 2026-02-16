import { Link } from 'react-router-dom';
import { CheckCircle, Shield, TrendingUp, CreditCard, Scale, Lock, ArrowRight, UserCheck, Layout, FileText, ChevronRight, Star, BarChart3, PieChart } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Financial District" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>Secure & Confidential Financial Guidance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-serif">
                Nationwide <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Financial Guidance.</span> <br />
                <span className="text-brand-gold">Structured for Stability.</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed border-l-4 border-brand-gold pl-6">
                A disciplined approach to credit optimization, capital access, and business infrastructure — built for long-term strength.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/process">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg bg-brand-gold hover:bg-white hover:text-brand-navy border-2 border-transparent transition-all shadow-xl hover:shadow-2xl">
                    Start My Review
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-brand-navy">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>

              <div className="pt-8 flex items-center gap-8 text-sm text-gray-400 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-brand-gold" />
                  <span>256-bit Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-brand-gold" />
                  <span>Nationwide Service</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative animate-fade-in delay-200">
              <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Client Success</p>
                    <h3 className="text-3xl font-bold text-white mt-1">Structured Growth</h3>
                  </div>
                  <div className="bg-brand-gold/20 p-3 rounded-full">
                    <TrendingUp className="w-8 h-8 text-brand-gold" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Credit Optimization", val: "Active", icon: CheckCircle },
                    { label: "Business Funding", val: "Approved", icon: CheckCircle },
                    { label: "Merchant Infrastructure", val: "Optimized", icon: CheckCircle },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-brand-gold" />
                        <span className="text-gray-200 font-medium">{item.label}</span>
                      </div>
                      <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">{item.val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm italic">"Clarity replaces confusion. Strategy replaces guesswork."</p>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Solution Section - Vertical Timeline Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 font-serif">Financial Uncertainty Requires Structure.</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ORIA USA provides a structured plan designed to help you strengthen your profile, position for approvals, and build lasting financial stability.
            </p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent hidden md:block"></div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 flex justify-end md:pr-12 text-right">
                  <div className="max-w-md">
                    <span className="text-brand-gold font-bold text-6xl font-serif opacity-20 block mb-[-20px] mr-[-10px]">01</span>
                    <h3 className="text-3xl font-bold text-brand-navy mb-4 relative z-10">Analyze Profile</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We perform a deep dive forensic analysis of your credit and financial profile to uncover hidden issues, compliance errors, and opportunities for rapid improvement.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy border-4 border-white shadow-lg z-10 hidden md:flex">
                  <FileText className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-brand-light p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <BarChart3 className="w-24 h-24 text-brand-navy" />
                    </div>
                    <div className="flex gap-4 items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div className="md:w-1/2 flex justify-start md:pl-12 text-left">
                  <div className="max-w-md">
                    <span className="text-brand-gold font-bold text-6xl font-serif opacity-20 block mb-[-20px] ml-[-10px]">02</span>
                    <h3 className="text-3xl font-bold text-brand-navy mb-4 relative z-10">Build Strategy</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We develop a custom roadmap targeting your specific goals—whether that's funding approval, rate negotiation, or long-term credit health.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy border-4 border-white shadow-lg z-10 hidden md:flex">
                  <Layout className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-brand-light p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <PieChart className="w-24 h-24 text-brand-navy" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue-100 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-brand-gold/20 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 flex justify-end md:pr-12 text-right">
                  <div className="max-w-md">
                    <span className="text-brand-gold font-bold text-6xl font-serif opacity-20 block mb-[-20px] mr-[-10px]">03</span>
                    <h3 className="text-3xl font-bold text-brand-navy mb-4 relative z-10">Execute & Grow</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Disciplined execution of the plan. We handle the disputes, applications, and negotiations while you focus on running your business.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy border-4 border-white shadow-lg z-10 hidden md:flex">
                  <TrendingUp className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-brand-light p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <TrendingUp className="w-24 h-24 text-brand-navy" />
                    </div>
                    <div className="flex items-end gap-2 h-24">
                      <div className="w-1/4 bg-brand-navy/20 h-1/3 rounded-t"></div>
                      <div className="w-1/4 bg-brand-navy/40 h-1/2 rounded-t"></div>
                      <div className="w-1/4 bg-brand-navy/60 h-2/3 rounded-t"></div>
                      <div className="w-1/4 bg-brand-gold h-full rounded-t shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Bento Grid Layout */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[100px] rounded-full"></div>
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-serif">Comprehensive <br/>Financial Solutions</h2>
            </div>
            <Link to="/contact">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-navy">
                    View All Services <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Main Feature - Credit */}
            <Link to="/credit-optimization" className="md:col-span-2 group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-brand-gold/50 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="w-40 h-40 text-white" />
                </div>
                <div className="relative h-full flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-3">Credit Optimization</h3>
                        <p className="text-gray-300 max-w-md text-lg">Strategic review and dispute guidance to strengthen your credit profile and improve approval positioning.</p>
                    </div>
                    <div className="flex items-center text-blue-300 font-medium mt-6 group-hover:translate-x-2 transition-transform">
                        Explore Strategy <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </div>
            </Link>

            {/* Feature - Funding */}
            <Link to="/funding" className="md:col-span-1 group relative bg-brand-gold rounded-3xl p-8 border border-transparent hover:brightness-110 transition-all overflow-hidden text-brand-navy">
                <div className="absolute -bottom-4 -right-4 opacity-20">
                    <CreditCard className="w-32 h-32" />
                </div>
                <div className="relative h-full flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Business Funding</h3>
                        <p className="text-brand-navy/80 text-sm font-medium">Access capital with structure. Lines of credit, term loans, and more.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-navy/10 flex items-center justify-center mt-4">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>

            {/* Feature - Merchant */}
            <Link to="/merchant-services" className="md:col-span-1 group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all overflow-hidden">
                <div className="relative h-full flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                        <Layout className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Merchant Services</h3>
                        <p className="text-gray-400 text-sm">Optimize your payment infrastructure and reduce fees.</p>
                    </div>
                </div>
            </Link>

            {/* Feature - Legal */}
            <Link to="/legal-services" className="md:col-span-2 group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all overflow-hidden">
                <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                    <Scale className="w-32 h-32 text-white" />
                </div>
                <div className="relative h-full flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                        <Scale className="w-6 h-6" />
                    </div>
                    <div className="max-w-md">
                        <h3 className="text-3xl font-bold text-white mb-3">Legal Protection</h3>
                        <p className="text-gray-300 text-lg">Access to trusted legal resources for business formation, contracts, and asset protection.</p>
                    </div>
                    <div className="flex items-center text-emerald-300 font-medium mt-6 group-hover:translate-x-2 transition-transform">
                        View Resources <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why ORIA USA Section - Dark & Impactful */}
      <section className="py-24 bg-[#050a14] text-white relative overflow-hidden border-t border-white/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#cca43b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1 text-brand-gold text-sm font-bold mb-6">
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Built on Structure. <br />Not Shortcuts.</h2>
              <p className="text-xl text-gray-300 mb-8 italic border-l-4 border-brand-gold pl-6">
                "Clarity replaces confusion. Strategy replaces guesswork."
              </p>
              <ul className="space-y-6">
                {[
                  "Transparent communication from day one",
                  "No unrealistic promises or hype",
                  "Disciplined financial strategy tailored to you",
                  "National service capability with local care"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-brand-navy" />
                    </div>
                    <span className="text-lg text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about">
                  <Button variant="secondary" className="bg-brand-gold hover:bg-white hover:text-brand-navy border-none">
                    About Our Mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold rounded-2xl transform rotate-3 translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                alt="Meeting" 
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Step Process (Redesigned) */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Roadmap to Success</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-2 mb-6 font-serif">Your Path to Financial Stability</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">A structured, transparent approach to achieving your financial goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Step 1 */}
             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl font-serif font-bold text-brand-navy select-none">1</div>
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-brand-navy/20 shadow-lg group-hover:scale-110 transition-transform">
                   <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3 relative z-10">Profile Assessment</h3>
                <p className="text-gray-600 mb-6 relative z-10">We conduct a forensic analysis of your credit & financial profile to identify every opportunity.</p>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                   <div className="w-1/3 h-full bg-brand-gold"></div>
                </div>
             </div>

             {/* Step 2 */}
             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl font-serif font-bold text-brand-navy select-none">2</div>
                <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mb-6 shadow-brand-gold/20 shadow-lg group-hover:scale-110 transition-transform">
                   <Layout className="w-8 h-8 text-brand-navy" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3 relative z-10">Strategic Planning</h3>
                <p className="text-gray-600 mb-6 relative z-10">We build a custom roadmap for funding, disputes, and structure optimization.</p>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                   <div className="w-2/3 h-full bg-brand-gold"></div>
                </div>
             </div>

             {/* Step 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl font-serif font-bold text-brand-navy select-none">3</div>
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-brand-navy/20 shadow-lg group-hover:scale-110 transition-transform">
                   <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3 relative z-10">Execution & Growth</h3>
                <p className="text-gray-600 mb-6 relative z-10">We execute the plan, securing approvals and optimizing your financial future.</p>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                   <div className="w-full h-full bg-brand-gold"></div>
                </div>
             </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/process">
              <Button size="lg" className="bg-brand-navy hover:bg-brand-charcoal px-10 py-4 shadow-lg">
                Begin Secure Review
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Portal Section - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-brand-navy rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                         <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                            <Lock className="w-5 h-5 text-brand-gold" />
                            <span className="text-white font-medium tracking-wide text-sm">Bank-Level Security</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
                            Your Financial Data, <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Secure & Accessible.</span>
                        </h2>
                        <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                            Track your funding progress, upload sensitive documents, and communicate with your dedicated specialist through our encrypted client portal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                             <Link to="/client-login">
                                <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-white border-none font-bold px-8 shadow-lg shadow-brand-gold/20">
                                    Access Portal
                                </Button>
                             </Link>
                             <div className="flex items-center gap-4 text-sm text-gray-400 px-4">
                                <div className="flex -space-x-2">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-brand-navy flex items-center justify-center text-xs text-white">
                                            <UserCheck className="w-4 h-4" />
                                        </div>
                                    ))}
                                </div>
                                <span>Trusted by 500+ Clients</span>
                             </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Mock Dashboard Card */}
                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                             <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                 <div className="flex items-center gap-3">
                                     <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                                         <Shield className="w-6 h-6 text-brand-navy" />
                                     </div>
                                     <div>
                                         <div className="text-white font-bold">Client Dashboard</div>
                                         <div className="text-xs text-blue-200">Secure Connection</div>
                                     </div>
                                 </div>
                                 <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                                     Active Session
                                 </div>
                             </div>
                             
                             <div className="space-y-4">
                                 {[
                                     { label: "Credit Analysis", status: "Completed", color: "text-green-400" },
                                     { label: "Funding Application", status: "In Review", color: "text-yellow-400" },
                                     { label: "Document Verification", status: "Pending", color: "text-blue-200" }
                                 ].map((item, i) => (
                                     <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:bg-black/40 transition-colors">
                                         <span className="text-white font-medium">{item.label}</span>
                                         <span className={`text-sm font-bold ${item.color}`}>{item.status}</span>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div className="max-w-2xl">
                <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Success Stories</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-4 font-serif">Results That Speak<br/>For Themselves.</h2>
             </div>
             <div className="flex gap-2">
                 <div className="h-1 w-20 bg-brand-gold rounded-full"></div>
                 <div className="h-1 w-10 bg-gray-200 rounded-full"></div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ORIA's structured approach helped me finally understand my business credit. The clarity they provided was invaluable.",
                author: "Michael R.",
                role: "Small Business Owner",
                metric: "+150pts Credit Score"
              },
              {
                quote: "Professional, secure, and straight to the point. No hype, just results. Highly recommend their funding guidance.",
                author: "Sarah L.",
                role: "Real Estate Investor",
                metric: "$250k Funding Secured"
              },
              {
                quote: "The team at ORIA USA helped me optimize my personal profile so I could qualify for better commercial terms.",
                author: "David K.",
                role: "Transport Logistics",
                metric: "Optimized Profile"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Star className="w-32 h-32 text-brand-navy transform rotate-12" />
                </div>
                
                <div className="relative z-10">
                    <div className="flex gap-1 mb-8">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-brand-gold fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">"{item.quote}"</p>
                    
                    <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="font-bold text-brand-navy text-lg">{item.author}</p>
                            <p className="text-sm text-gray-400">{item.role}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-navy font-bold text-xl">
                            {item.author.charAt(0)}
                        </div>
                    </div>
                    
                    <div className="mt-6 inline-block px-4 py-2 bg-green-50 text-green-700 text-sm font-bold rounded-full border border-green-100">
                        {item.metric}
                    </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-gray-400 mt-12">
            * Results vary based on individual financial circumstances.
          </p>
        </div>
      </section>

      {/* Final CTA Section - Redesigned */}
      <section className="relative py-32 bg-brand-navy overflow-hidden">
         <div className="absolute inset-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-navy via-brand-navy to-brand-charcoal"></div>
             <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-brand-gold/5 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-navy to-transparent"></div>
         </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6">
              <span className="py-2 px-6 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold font-bold tracking-widest text-sm uppercase">
                  Ready To Begin?
              </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif tracking-tight">
              Start With a <br/>
              <span className="text-brand-gold">Structured Plan.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            No obligation. Confidential review. Take the first step towards financial stability today with a partner who prioritizes your long-term success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-12 py-6 text-lg shadow-2xl shadow-brand-gold/20 bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy border-none font-bold">
                Schedule My Consultation
              </Button>
            </Link>
            <Link to="/process" className="w-full sm:w-auto">
               <Button size="lg" variant="outline" className="w-full px-12 py-6 text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                View Our Process
              </Button>
            </Link>
          </div>
          
          <p className="mt-12 text-sm text-gray-500">
              Secure 256-bit Encryption • FCRA Compliant • Confidential
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
