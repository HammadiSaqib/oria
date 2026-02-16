import MainLayout from '../layouts/MainLayout';
import { Search, FileSpreadsheet, TrendingUp, ArrowRight, CheckCircle2, GitBranch } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Process = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
            <GitBranch className="w-4 h-4" />
            <span>How We Work</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            A Structured Path to <br/>
            <span className="text-brand-gold">Financial Stability.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We remove the guesswork with a defined, step-by-step process tailored to your unique financial situation.
        </p>
      </div>
    </section>
    
    <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent hidden md:block"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-24">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-shrink-0 flex flex-col items-center md:items-end md:w-1/2 md:pr-12 text-center md:text-right">
                         <div className="w-16 h-16 rounded-2xl bg-brand-navy text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-navy/20 mb-6 md:hidden">01</div>
                        <h2 className="text-3xl font-bold text-brand-navy mb-4 font-serif">Profile Review</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We begin with a comprehensive assessment of your current credit standing and financial positioning. This involves analyzing your credit reports for inaccuracies, evaluating your business structure, and identifying key strengths and weaknesses.
                        </p>
                    </div>
                    
                    {/* Center Icon (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-50 items-center justify-center shadow-lg z-10">
                        <Search className="w-6 h-6 text-brand-gold" />
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-full -mr-4 -mt-4 z-0 group-hover:bg-brand-navy/5 transition-colors"></div>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Deep Dive Analysis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Identify Compliance Errors</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Opportunity Assessment</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start md:w-1/2 md:pl-12 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-brand-gold text-brand-navy flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-gold/20 mb-6 md:hidden">02</div>
                        <h2 className="text-3xl font-bold text-brand-navy mb-4 font-serif">Structured Action Plan</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Based on our review, we develop a tailored roadmap. This may include initiating disputes for inaccurate items, restructuring business entities, or preparing specific documentation for funding applications.
                        </p>
                    </div>
                    
                    {/* Center Icon (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-brand-navy border-4 border-gray-50 items-center justify-center shadow-lg z-10">
                        <FileSpreadsheet className="w-6 h-6 text-brand-gold" />
                    </div>

                    <div className="md:w-1/2 md:pr-12">
                         <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                             <div className="absolute top-0 left-0 w-24 h-24 bg-brand-light rounded-br-full -ml-4 -mt-4 z-0 group-hover:bg-brand-gold/10 transition-colors"></div>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                    <span className="text-gray-700 font-medium">Custom Roadmap</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                    <span className="text-gray-700 font-medium">Dispute Strategy</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                    <span className="text-gray-700 font-medium">Funding Preparation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-shrink-0 flex flex-col items-center md:items-end md:w-1/2 md:pr-12 text-center md:text-right">
                        <div className="w-16 h-16 rounded-2xl bg-brand-navy text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-navy/20 mb-6 md:hidden">03</div>
                        <h2 className="text-3xl font-bold text-brand-navy mb-4 font-serif">Monitor & Strengthen</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Financial health is ongoing. We track your progress, responding to bureau updates and lender feedback. As your profile strengthens, we help you pivot towards better funding opportunities and long-term stability.
                        </p>
                    </div>

                     {/* Center Icon (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-50 items-center justify-center shadow-lg z-10">
                        <TrendingUp className="w-6 h-6 text-brand-gold" />
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-full -mr-4 -mt-4 z-0 group-hover:bg-green-50 transition-colors"></div>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Ongoing Monitoring</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Bureau Response Handling</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Approval Execution</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <Link to="/contact">
                    <Button size="lg" className="px-12 py-4 text-lg shadow-xl bg-brand-navy hover:bg-brand-charcoal">
                        Start Your Review
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default Process;
