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
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">What We Handle:</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>Inaccurate negative accounts</li>
              <li>Collections and charge offs</li>
              <li>Reporting errors across bureaus</li>
              <li>Credit structure optimization</li>
              <li>Utilization guidance</li>
            </ul>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input name="firstName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input name="lastName" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input name="phone" type="tel" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Credit Monitoring Login Username</label>
                <input name="creditMonitoringUsername" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Credit Monitoring Login Password</label>
                <input name="creditMonitoringPassword" type="password" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-semibold text-brand-navy">Required File Uploads:</p>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Photo of Social Security Card</label>
                  <input name="socialSecurityCard" type="file" required className="mt-2 w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Photo of Government ID</label>
                  <input name="governmentId" type="file" required className="mt-2 w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Recent Utility Bill</label>
                  <input name="utilityBill" type="file" required className="mt-2 w-full" />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full rounded-lg bg-brand-navy text-white font-semibold py-3">Submit</button>
          </form>

          <p className="text-gray-600 mt-6">All documents are submitted securely and reviewed confidentially.</p>
          <p className="text-gray-600 mt-2">All submissions must be sent to: oriasusaofficial@gmail.com</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default CreditOptimization;
