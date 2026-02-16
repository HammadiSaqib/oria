import { useState } from 'react';
import { Lock, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import { cn } from '../lib/utils';

interface SecureFormProps {
  title?: string;
  type?: 'contact' | 'funding' | 'credit' | 'merchant';
  className?: string;
}

const SecureForm = ({ title = "Secure Inquiry", type = 'contact', className }: SecureFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const endpoint = type === 'contact' ? 'http://localhost:5000/api/contact' : 'http://localhost:5000/api/intake';
    const payload = { ...formData, type };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            setIsSubmitted(true);
        } else {
            alert('There was an error submitting your request. Please try again.');
        }
    } catch (error) {
        alert('Network error. Please try again later.');
    } finally {
        setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={cn("bg-white p-10 rounded-xl shadow-lg border border-green-100 text-center animate-fade-in", className)}>
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Received Securely</h3>
        <p className="text-gray-500 mb-8">
          Thank you. A specialist will review your information and contact you shortly.
        </p>
        <Button 
            variant="outline" 
            onClick={() => {
                setIsSubmitted(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    message: ''
                });
            }}
        >
            Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden", className)}>
      <div className="bg-brand-navy p-6 flex items-center justify-between">
         <h3 className="text-lg font-bold text-white flex items-center gap-2">
            {title}
         </h3>
         <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-brand-gold">
            <Lock className="w-3 h-3" />
            <span>256-bit SSL</span>
         </div>
      </div>

      <div className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Input Field Component for cleaner code */}
            {['firstName', 'lastName'].map((field) => (
                <div key={field} className="relative">
                    <label 
                        htmlFor={field} 
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1"
                    >
                        {field === 'firstName' ? 'First Name' : 'Last Name'}
                    </label>
                    <input
                        type="text"
                        name={field}
                        id={field}
                        required
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all outline-none",
                            focusedField === field ? "border-brand-navy ring-2 ring-brand-navy/10 shadow-sm" : "border-gray-200"
                        )}
                        placeholder={field === 'firstName' ? 'Jane' : 'Doe'}
                    />
                </div>
            ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
             {[
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@company.com' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 000-0000' }
             ].map((field) => (
                <div key={field.name} className="relative">
                    <label 
                        htmlFor={field.name} 
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1"
                    >
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        required
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all outline-none",
                            focusedField === field.name ? "border-brand-navy ring-2 ring-brand-navy/10 shadow-sm" : "border-gray-200"
                        )}
                        placeholder={field.placeholder}
                    />
                </div>
             ))}
            </div>

            {type !== 'credit' && (
                <div className="relative">
                    <label 
                        htmlFor="companyName" 
                        className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1"
                    >
                        Company Name <span className="text-gray-400 font-normal normal-case">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('companyName')}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all outline-none",
                            focusedField === 'companyName' ? "border-brand-navy ring-2 ring-brand-navy/10 shadow-sm" : "border-gray-200"
                        )}
                        placeholder="Your Business LLC"
                    />
                </div>
            )}

            <div className="relative">
                <label 
                    htmlFor="message" 
                    className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1"
                >
                    {type === 'funding' ? 'Funding Needs / Goals' : 
                    type === 'credit' ? 'Current Credit Situation' : 
                    'How can we help?'}
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all outline-none resize-none",
                        focusedField === 'message' ? "border-brand-navy ring-2 ring-brand-navy/10 shadow-sm" : "border-gray-200"
                    )}
                    placeholder="Tell us about your goals..."
                ></textarea>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex items-start gap-3">
                    <div className="flex items-center h-5">
                        <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-brand-navy border-gray-300 rounded focus:ring-brand-navy"
                        />
                    </div>
                    <div className="text-xs text-gray-500 leading-snug">
                        <label htmlFor="consent" className="font-medium text-gray-700">Communication Consent</label>
                        <p className="mt-1">I agree to receive communications from ORIA USA via SMS and email. Data rates may apply. Reply STOP to opt out. Your data is never sold.</p>
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                isLoading={isSubmitting}
                className="w-full py-4 text-base font-bold bg-brand-navy hover:bg-brand-charcoal shadow-lg hover:shadow-xl transition-all"
            >
                {type === 'funding' ? 'Request Funding Review' : 
                type === 'credit' ? 'Request Credit Analysis' : 
                'Submit Secure Inquiry'}
            </Button>

            <div className="flex justify-center items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    <Shield className="w-3 h-3" /> SSL Secured
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    <Lock className="w-3 h-3" /> Confidential
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SecureForm;
