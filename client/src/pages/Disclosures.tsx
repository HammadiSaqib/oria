import MainLayout from '../layouts/MainLayout';
import { AlertCircle, FileWarning, HelpCircle, ShieldAlert } from 'lucide-react';

const Disclosures = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            <span>Important Information</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Disclosures</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transparency is core to our mission. Please review the following disclosures regarding our services and relationships.
        </p>
      </div>
    </section>
    
    <div className="bg-gray-50 py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12 space-y-12">
                    
                    {/* Not a Lender */}
                    <section className="bg-brand-light p-6 rounded-xl border border-brand-navy/10">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                                <FileWarning className="w-6 h-6 text-brand-navy" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-brand-navy font-serif mb-2">Not a Lender</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    ORIA USA is not a lender, bank, or financial institution. We are a consulting firm that assists businesses and individuals in organizing their financial profiles to improve their ability to obtain funding. We do not make credit decisions, originate loans, or guarantee funding approvals. All funding decisions are made by third-party lenders.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Credit Repair */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <ShieldAlert className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">Credit Repair Disclosures</h2>
                        </div>
                        <div className="pl-11 space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                In accordance with the Credit Repair Organizations Act (CROA), you have the right to repair your own credit. No credit repair organization can legally remove accurate and verifiable negative information from your credit report.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                ORIA USA does not guarantee specific results or specific score increases. Credit repair is a process, and results vary based on individual credit history and bureau responses.
                            </p>
                        </div>
                    </section>

                    {/* Affiliate Disclosure */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <HelpCircle className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">Affiliate & Referral Disclosure</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-11">
                            ORIA USA may receive compensation from third-party partners (such as lenders, credit card issuers, or legal service providers) when you use their services through our referrals. This compensation helps us maintain our platform and provide high-quality guidance. However, our recommendations are based on what we believe is best for your specific situation.
                        </p>
                    </section>

                    {/* Legal Advice */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <AlertCircle className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">No Legal Advice</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-11">
                            ORIA USA is not a law firm and does not provide legal advice. Any information provided regarding legal matters is for educational purposes only. For legal advice regarding business formation, bankruptcy, or other legal matters, please consult with a licensed attorney.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default Disclosures;