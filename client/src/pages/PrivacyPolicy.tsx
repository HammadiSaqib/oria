import MainLayout from '../layouts/MainLayout';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute -top-24 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
            <Lock className="w-4 h-4" />
            <span>Data Protection</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Privacy Policy</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your privacy is non-negotiable. We are committed to protecting your personal information with the highest standards of security.
        </p>
        <p className="text-sm text-gray-400">Last Updated: February 16, 2026</p>
      </div>
    </section>
    
    <div className="bg-gray-50 py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12 space-y-12">
                    
                    {/* Introduction */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <Shield className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">1. Introduction</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-11">
                            ORIA USA ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website oriausa.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <FileText className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">2. Information We Collect</h2>
                        </div>
                        <div className="pl-11 space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                We collect several types of information from and about users of our Website, including information:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ('personal information').",
                                    "About your internet connection, the equipment you use to access our Website, and usage details."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <Eye className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">3. How We Use Your Information</h2>
                        </div>
                        <div className="pl-11 space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                We use information that we collect about you or that you provide to us, including any personal information:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "To present our Website and its contents to you.",
                                    "To provide you with information, products, or services that you request from us.",
                                    "To fulfill any other purpose for which you provide it.",
                                    "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.",
                                    "To notify you about changes to our Website or any products or services we offer or provide though it."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-light rounded-lg">
                                <Lock className="w-6 h-6 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy font-serif">4. Data Security</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-11">
                            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions will be encrypted using SSL technology.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="bg-brand-light p-6 rounded-xl border border-gray-100">
                        <h3 className="text-lg font-bold text-brand-navy mb-2">Contact Us</h3>
                        <p className="text-gray-600 mb-4">
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                        </p>
                        <div className="text-brand-navy font-medium">
                            <p>ORIA USA</p>
                            <p>support@oriausa.com</p>
                            <p>(800) 555-0199</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default PrivacyPolicy;