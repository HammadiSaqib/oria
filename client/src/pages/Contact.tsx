import MainLayout from '../layouts/MainLayout';
import SecureForm from '../components/SecureForm';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

const Contact = () => (
  <MainLayout>
    {/* Hero Section */}
    <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
          <div className="absolute -bottom-24 right-24 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            Start Your <br/>
            <span className="text-brand-gold">Review.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to take the next step? Contact our team for a confidential review of your financial profile.
        </p>
      </div>
    </section>
    
    <div className="bg-gray-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-brand-navy mb-8 font-serif border-b border-gray-100 pb-4">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy transition-colors">
                                    <Mail className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-navy text-lg">Email Us</h3>
                                    <p className="text-gray-600 font-medium">support@oriausa.com</p>
                                    <p className="text-sm text-gray-400 mt-1">Response time: Within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy transition-colors">
                                    <Phone className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-navy text-lg">Call Us</h3>
                                    <p className="text-gray-600 font-medium">(800) 555-0199</p>
                                    <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy transition-colors">
                                    <MapPin className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-navy text-lg">Visit Us</h3>
                                    <p className="text-gray-600 leading-relaxed">123 Financial District Blvd, Suite 400<br />New York, NY 10005</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-navy p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <Clock className="w-6 h-6 text-brand-gold" />
                            <h3 className="text-xl font-bold font-serif">Office Hours</h3>
                        </div>
                        <div className="space-y-3 relative z-10">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-300">Monday - Friday</span>
                                <span className="font-bold text-brand-gold">9:00 AM - 6:00 PM EST</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-300">Saturday</span>
                                <span className="font-medium">By Appointment Only</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Sunday</span>
                                <span className="text-gray-500">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="sticky top-24">
                        <SecureForm title="Send a Message" type="contact" className="shadow-2xl border-brand-gold/20" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </MainLayout>
);

export default Contact;
