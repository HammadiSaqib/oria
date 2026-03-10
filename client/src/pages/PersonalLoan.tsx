import MainLayout from '../layouts/MainLayout';

const PersonalLoan = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('type', 'personal-loan');

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
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif">Apply for a Personal Loan</h1>
          <p className="text-xl text-gray-300 mt-6">Submit the form below to check your personal loan options.</p>
          <p className="text-xl text-gray-300 mt-4">Applications are completed with a soft credit inquiry only.</p>
          <p className="text-xl text-gray-300 mt-4">You will only be funded if you choose to accpt the final terms and agreements.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-8">Please fill out the form below to start your pre-approval process for personal funding.</p>

          <form className="space-y-10" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name *</label>
                  <input name="firstName" type="text" required placeholder="First Name" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                  <input name="lastName" type="text" required placeholder="Last Name" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input name="email" type="email" required placeholder="Email" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Birthday *</label>
                  <input name="birthday" type="date" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                  <input name="phone" type="tel" required placeholder="Phone" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Social Security Number *</label>
                  <input name="socialSecurityNumber" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Personal Credit Score *</label>
                  <input name="personalCreditScore" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Desired Funding Amount *</label>
                  <input name="desiredFundingAmount" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Affiliate or Representative who referred you? *</label>
                  <input name="affiliateRepresentative" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Living Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Home Address *</label>
                  <input name="homeAddress" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input name="city" type="text" placeholder="City" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input name="state" type="text" placeholder="State" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input name="postalCode" type="text" placeholder="Postal Code" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Monthly Rent or Mortgage Payment *</label>
                  <input name="monthlyHousingPayment" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rent or Own *</label>
                  <input name="rentOrOwn" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Employer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer *</label>
                  <input name="employer" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer Phone Number *</label>
                  <input name="employerPhone" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Employer Address *</label>
                  <input name="employerAddress" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Occupation *</label>
                  <input name="occupation" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estimated Annual Income *</label>
                  <input name="estimatedAnnualIncome" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Most Recent Paystub (Last 30 Days) *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="recentPaystub" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Experian Credit Report *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="experianCreditReport" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full rounded-lg bg-brand-navy text-white font-semibold py-3">Submit</button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default PersonalLoan;
