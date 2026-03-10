import MainLayout from '../layouts/MainLayout';

const CreditOptimization = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('type', 'credit');

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
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif">Personal & Business Credit Optimization</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-6">Disputes Managed. Errors Corrected. Credit Strengthened.</h2>
          <p className="text-xl text-gray-300 mt-6">Secure document upload and structured credit review to improve reporting accuracy and credit positioning.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">What We Handle:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Inaccurate negative accounts",
                "Collections and charge offs",
                "Reporting errors across bureaus",
                "Credit structure optimization",
                "Utilization guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-1.5 w-12 bg-brand-gold rounded-full mb-4"></div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name *</label>
                <input name="firstName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input name="lastName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone *</label>
                <input name="phone" type="tel" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Home Address *</label>
                <input name="homeAddress" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Social Security Number *</label>
                <input name="socialSecurityNumber" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Birthday *</label>
                <input name="birthday" type="date" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-lg font-semibold text-brand-navy">Smart Credit Logins</p>
              <a
                href="https://www.smartcredit.com/?PID=41593"
                className="inline-flex items-center justify-center rounded-lg bg-brand-navy text-white font-semibold px-5 py-3"
              >
                Create Account
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Login *</label>
                  <input name="smartCreditLogin" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password *</label>
                  <input name="smartCreditPassword" type="password" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-semibold text-brand-navy">Documents</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Proof of Identity *</label>
                  <p className="text-sm text-gray-500">License, ID or Passport</p>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="proofOfIdentity" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Proof of Social *</label>
                  <p className="text-sm text-gray-500">Social Security Card, 1099 or W2</p>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="proofOfSocial" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Proof of Address *</label>
                  <p className="text-sm text-gray-500">Utility Bill, Phone Bill or Bank Statement</p>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="proofOfAddress" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 shadow-sm hover:border-brand-gold transition-colors">
                  <label className="block text-sm font-medium text-gray-700">Proof of Payment *</label>
                  <p className="text-sm text-gray-500">Screenshot of Payments</p>
                  <div className="relative mt-4">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-sm text-gray-500 text-center">
                      <span>Drag and drop</span>
                      <span>or</span>
                      <span>browse files</span>
                    </div>
                    <input name="proofOfPayment" type="file" required className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Representative or Affiliate Name *</label>
              <input name="representativeName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea name="additionalNotes" rows={4} className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"></textarea>
            </div>

            <button type="submit" className="w-full rounded-lg bg-brand-navy text-white font-semibold py-3">Submit</button>
          </form>

          <p className="text-gray-600 mt-6">All documents are submitted securely and reviewed confidentially.</p>
          <p className="text-gray-600 mt-2">Once reviewed, a member of our team will reach out to discuss the next phase of your credit optimization.</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default CreditOptimization;
