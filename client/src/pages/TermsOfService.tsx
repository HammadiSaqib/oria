import MainLayout from '../layouts/MainLayout';
import { FileCheck, AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

const TermsOfService = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute -top-24 left-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            <span>Legal Agreement</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Terms of Service</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. They outline the rules and regulations for the use of ORIA USA's Website and Services.
        </p>
        <p className="text-sm text-gray-400">Last Updated: February 16, 2026</p>
      </div>
    </section>
    
    <div className="bg-gray-50 py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12 space-y-12">
                    
                    {/* Acceptance */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <FileCheck className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">1. Acceptance of Terms</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-11">
                            By accessing this Website, accessible from oriausa.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
                        </p>
                    </section>

                    {/* Services */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">2. Description of Services</h2>
                        </div>
                        <div className="pl-11 space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                ORIA USA provides financial guidance, credit optimization consulting, and business funding advisory services. We are not a lender, bank, or law firm. Our services are educational and consultative in nature.
                            </p>
                        </div>
                    </section>

                    {/* Limitations */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">3. Limitations</h2>
                        </div>
                        <div className="pl-11 space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                In no event shall ORIA USA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ORIA USA's Website, even if ORIA USA or an authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </div>
                    </section>

                     {/* Governing Law */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <Scale className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">4. Governing Law</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-11">
                            Any claim related to ORIA USA's Website shall be governed by the laws of the State of New York without regards to its conflict of law provisions.
                        </p>
                    </section>

                    <div className="border-t border-gray-100 pt-8 mt-8">
                         <p className="text-gray-500 text-sm text-center">
                            If you have any questions about these Terms, please contact us at support@oriausa.com.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default TermsOfService;