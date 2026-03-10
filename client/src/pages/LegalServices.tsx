import MainLayout from '../layouts/MainLayout';
import Button from '../components/ui/Button';

const LegalServices = () => (
  <MainLayout>
    <section className="bg-brand-navy pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-serif">Legal & Identity Protection</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mt-6">Personal Legal Access and Identity Monitoring</h2>
        <p className="text-xl text-gray-300 mt-6">Affordable monthly plans designed for individuals and families.</p>
      </div>
    </section>

    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-brand-navy mb-4">What Is Included:</h3>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>Access to licensed attorneys for personal legal matters</li>
            <li>Contract and document review</li>
            <li>Consultation for traffic issues and civil matters</li>
            <li>Identity monitoring and fraud alerts</li>
            <li>Restoration support if identity theft occurs</li>
          </ul>
        </div>

        <a href="https://mrashed.legalshieldassociate.com/">
          <Button size="lg" className="w-full bg-brand-navy text-white">
            Enroll in Legal & Identity Protection
          </Button>
        </a>
      </div>
    </section>
  </MainLayout>
);

export default LegalServices;
