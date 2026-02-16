import MainLayout from '../layouts/MainLayout';
import PageHeader from '../components/PageHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                className="w-full py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold text-brand-navy">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="pb-6 text-gray-600 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Are you a lender?",
            answer: "No, ORIA USA is not a lender. We are a financial guidance platform. We connect clients with vetted financial institutions, assist with loan packaging, and provide structured guidance to improve your approval odds."
        },
        {
            question: "Is my information secure?",
            answer: "Yes. We utilize 256-bit SSL encryption for all data transmission. Your personal and business information is stored securely and is never sold to unauthorized third parties."
        },
        {
            question: "How long does the process take?",
            answer: "Timelines vary based on the service. Credit optimization results typically appear within 30-90 days, though every file is unique. Funding approvals can happen in as little as 24-48 hours for certain products, while complex financing may take weeks."
        },
        {
            question: "Do you guarantee approvals?",
            answer: "No. Guaranteeing approvals or specific credit outcomes is unethical and often illegal (CROA). We guarantee a disciplined, structured process to position you for the best possible outcome."
        },
        {
            question: "What affects funding decisions?",
            answer: "Lenders look at the 'Three Cs': Credit (personal and business scores), Capacity (revenue and cash flow), and Collateral (assets). Time in business and industry type also play significant roles."
        },
        {
            question: "Can negative items return to my credit report?",
            answer: "It is possible. If a creditor verifies a debt that was previously removed, it may be re-reported. However, the bureaus must follow strict procedures to notify you. We help you understand your rights in these situations."
        }
    ];

    return (
        <MainLayout>
            <PageHeader 
                title="Frequently Asked Questions" 
                subtitle="Common questions about our services and process."
            />
            
            <div className="py-20 bg-brand-light">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default FAQ;
