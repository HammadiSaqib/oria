import MainLayout from '../layouts/MainLayout';
import Button from '../components/ui/Button';

const MerchantServices = () => (
  <MainLayout>
    <section className="bg-brand-navy pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-serif">Merchant Services Optimization</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mt-6">Lower Processing Costs. Stronger Approval Positioning.</h2>
        <p className="text-xl text-gray-300 mt-6">Upload your recent merchant statement to begin your review.</p>
      </div>
    </section>

    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="https://form.jotform.com/5starprocessingleads/5-star-processing-quick-app-moe">
          <Button size="lg" className="w-full bg-brand-navy text-white">
            Start Merchant Services Review
          </Button>
        </a>
      </div>
    </section>
  </MainLayout>
);

export default MerchantServices;
