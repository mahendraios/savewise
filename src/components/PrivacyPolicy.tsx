export function PrivacyPolicy() {
  return (
    <div className="w-full max-w-4xl mx-auto text-left pt-2 pb-12 px-6 sm:px-12 bg-black border border-white/10 rounded-2xl shadow-2xl mb-10 mt-0 relative overflow-hidden">
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white tracking-tight mt-6">
          Privacy Policy
        </h1>
        
        <div className="space-y-10 text-gray-300 leading-relaxed text-lg">
         

          <p className="text-xl text-gray-200">
            SaveWise.ai ("we", "our", or "us") values your privacy. This Privacy Policy explains how we handle your information when you use our mobile application and website ("Services").
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">1.</span> Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-white text-xl mb-2">a. Personal Information</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                </ul>
                <p className="mt-3"><strong className="text-white bg-white/10 px-2 py-1 rounded">Note:</strong> We do <strong className="text-white">not collect phone numbers</strong>.</p>
              </div>

              <div>
                <p className="font-bold text-white text-xl mb-2">b. Financial Information</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Expense and income data entered by the user</li>
                    <li>Budget and financial preferences</li>
                </ul>
                <p className="mt-3"><strong className="text-white bg-white/10 px-2 py-1 rounded">Important:</strong> All financial data is stored locally on your device or in your personal Google Drive (if you choose to connect it). We do not store this data on our servers.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">2.</span> How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-3">
                <li>To provide and improve app functionality</li>
                <li>To generate insights and reports based on your data</li>
                <li>To personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">3.</span> Data Storage & Security
            </h2>
            <ul className="list-disc pl-6 space-y-3">
                <li>All user data is stored <strong className="text-white">locally on the device</strong> or in the user’s <strong className="text-white">Google Drive</strong> (if enabled)</li>
                <li>We do <strong className="text-white bg-white/10 px-2 py-1 rounded">not store any user data on our servers</strong></li>
                <li>Users have full control over their data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">4.</span> Data Sharing
            </h2>
            <p>
              We do <strong className="text-white bg-white/10 px-2 py-1 rounded">not sell, store, or share</strong> your personal or financial data with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">5.</span> User Control
            </h2>
            <ul className="list-disc pl-6 space-y-3">
                <li>You have full control over your data</li>
                <li>You can delete your data anytime by removing it from your device or Google Drive</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">6.</span> Third-Party Services
            </h2>
            <p>
              If you choose to connect Google Drive, your data will be stored under your Google account and governed by 
              Google's Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">7.</span> Data Retention
            </h2>
            <p>
              We do not retain any user data on our servers. All data remains with the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">8.</span> Children’s Privacy
            </h2>
            <p>
              SaveWise.ai is not intended for users under the age of 18. We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">9.</span> Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be reflected on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-teal-400">10.</span> Contact Us
            </h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 inline-block">
              <p className="mb-2 text-gray-300">If you have any questions, please contact:</p>
              <p className="text-white font-medium">Email: <a href="mailto:contactsavewiseai@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">contactsavewiseai@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
