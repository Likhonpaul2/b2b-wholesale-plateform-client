import React from "react";
import Navbar from "../Components/Navbar2";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 py-10 flex-grow text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-8 max-w-4xl mx-auto leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to our B2B Wholesale Platform. We value your privacy and
              are committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, and safeguard your
              data when you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Personal identification information (name, email, phone number)
              </li>
              <li>
                Business details (company name, address, tax registration info)
              </li>
              <li>Transaction details and order history</li>
              <li>Website usage data via cookies and analytics tools</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To process and fulfill your orders</li>
              <li>To communicate with you regarding your account</li>
              <li>To improve our website and services</li>
              <li>To comply with legal requirements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. However, we may share
              information with trusted service providers (e.g., payment
              processors, logistics partners) solely for the purpose of
              operating our business. We may also share data if required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies to enhance user experience, analyze
              traffic, and remember your preferences. You can control cookies
              through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Data Security
            </h2>
            <p>
              We implement security measures to protect your data, including
              encryption and secure servers. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. Contact us if you wish to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
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

export default PrivacyPolicy;
