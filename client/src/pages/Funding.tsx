import MainLayout from '../layouts/MainLayout';

const Funding = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('type', 'funding');

    await fetch('/api/intake', {
      method: 'POST',
      body: formData,
    });

    form.reset();
  };

  return (
    <MainLayout>
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif">Business Funding Strategy</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-6">Structured Capital for Businesses Ready to Scale</h2>
          <p className="text-xl text-gray-300 mt-6">Complete the form below to begin your funding review.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input name="fullName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Name</label>
              <input name="businessName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Address</label>
              <input name="businessAddress" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" type="tel" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time in Business</label>
              <input name="timeInBusiness" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Estimated Monthly Revenue</label>
              <input name="estimatedMonthlyRevenue" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <button type="submit" className="w-full rounded-lg bg-brand-navy text-white font-semibold py-3">Submit</button>
          </form>

          <p className="text-gray-600 mt-6">All submissions must be sent to: oriasusaofficial@gmail.com</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Funding;
