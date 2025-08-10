import React from "react";
import Navbar from "../Components/Navbar2";
import Footer from "../Components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 py-10 flex-grow text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms &amp; Conditions</h1>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-8 max-w-4xl mx-auto leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              These Terms &amp; Conditions govern your use of our B2B Wholesale Platform.
              By accessing or using our website, you agree to comply with these terms.
              If you do not agree, please discontinue use immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
            <p>
              Our services are intended for registered businesses and wholesale buyers.
              You must be at least 18 years old to use this platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Account Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Notify us immediately if you suspect unauthorized access to your account.</li>
              <li>You are responsible for all activities under your account.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Orders &amp; Payments</h2>
            <p>
              All orders are subject to availability and confirmation of payment.
              We reserve the right to cancel or refuse any order at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Pricing</h2>
            <p>
              Prices displayed on our platform are subject to change without notice.
              Any applicable taxes and shipping fees will be added to your total.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
            <p>
              All content, trademarks, and designs on this platform are owned by us or our licensors.
              You may not reproduce, distribute, or modify any content without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Prohibited Activities</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Using the platform for illegal or fraudulent purposes.</li>
              <li>Interfering with the platform’s functionality or security.</li>
              <li>Uploading harmful or malicious content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.
              Our total liability will not exceed the amount you paid for products or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
            <p>
              We may update these Terms &amp; Conditions from time to time.
              Continued use of the platform after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>
              If you have questions about these Terms &amp; Conditions, please contact us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:support@yourwebsite.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                support@yourwebsite.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
