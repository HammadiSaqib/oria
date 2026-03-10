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
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Client(s) Name *</label>
                  <input name="clientName" type="text" required placeholder="Client(s) Name" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Personal Email *</label>
                  <input name="personalEmail" type="email" required placeholder="Personal Email" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Personal Phone *</label>
                  <input name="personalPhone" type="tel" required placeholder="Personal Phone" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Social Security Number *</label>
                  <input name="socialSecurityNumber" type="text" required placeholder="Social Security Number" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Personal Credit Score *</label>
                  <input name="personalCreditScore" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Desired Funding Amount *</label>
                  <input name="desiredFundingAmount" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Business Name *</label>
                  <input name="businessName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Business Email *</label>
                  <input name="businessEmail" type="email" required placeholder="Business Email" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Business Phone *</label>
                  <input name="businessPhone" type="tel" required placeholder="Business Phone" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Business Industry *</label>
                  <input name="businessIndustry" type="text" required placeholder="Business Industry" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State of Incorporation *</label>
                  <input name="stateOfIncorporation" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">EIN Number *</label>
                  <input name="einNumber" type="text" required placeholder="EIN Number" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Website *</label>
                  <input name="website" type="text" required placeholder="Web URL goes here" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time in Business *</label>
                  <input name="timeInBusiness" type="text" required placeholder="3 years, 6 months" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Monthly Revenue *</label>
                  <input name="monthlyRevenue" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Owners *</label>
                  <input name="numberOfOwners" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Start Date *</label>
                  <input name="companyStartDate" type="date" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of birth *</label>
                  <input name="dateOfBirth" type="date" required placeholder="Date of birth" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Purpose of loan *</label>
                  <input name="purposeOfLoan" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Any Active Loans? *</label>
                  <input name="activeLoans" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Last 4 Bank Statements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Bank Statement 1 *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="bankStatement1" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Bank Statement 2 *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="bankStatement2" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Bank Statement 3 *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="bankStatement3" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Bank Statement 4</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="bankStatement4" type="file" className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Picture of Drivers license *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="driversLicense" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Social Security Card *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="socialSecurityCard" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Articles of Organization *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="articlesOfOrganization" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">EIN Letter *</label>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="einLetter" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Who referred you? *</label>
                <input name="referral" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Note (Optional)</label>
                <input name="note" type="text" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Signature *</label>
              <input name="signature" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-3" />
              <button type="button" className="rounded-lg border border-gray-300 px-4 py-2 text-sm">Clear</button>
              <p className="text-sm text-gray-500">Signature is required</p>
            </div>

            <button type="submit" className="w-full rounded-lg bg-brand-navy text-white font-semibold py-3">Submit Application</button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Funding;
