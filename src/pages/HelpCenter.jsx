import React from "react";
import Navbar from "../Components/Navbar2";
import Footer from "../Components/Footer";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 py-10 flex-grow text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>
        <p className="mb-10 text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Welcome to our Help Center. Here you’ll find answers to common questions and
          guidance on using our B2B Wholesale Platform effectively.
        </p>

        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
            <p className="text-sm mb-4">
              Learn how to create an account, set up your profile, and start placing
              orders quickly.
            </p>
            <a
              href="#getting-started"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </a>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Managing Your Cart</h2>
            <p className="text-sm mb-4">
              Understand how to add, update, and remove products from your cart.
            </p>
            <a
              href="#cart-help"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </a>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Placing Orders</h2>
            <p className="text-sm mb-4">
              Step-by-step guide to placing bulk orders and tracking them.
            </p>
            <a
              href="#orders"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </a>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Payments</h2>
            <p className="text-sm mb-4">
              Learn about payment methods, invoices, and transaction security.
            </p>
            <a
              href="#payments"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </a>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Account Settings</h2>
            <p className="text-sm mb-4">
              Update your business details, password, and notification preferences.
            </p>
            <a
              href="#account-settings"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </a>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Contact Support</h2>
            <p className="text-sm mb-4">
              Can’t find what you’re looking for? Get in touch with our support team.
            </p>
            <a
              href="#contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </a>
          </div>
        </section>

        {/* Detailed sections */}
        <section id="getting-started" className="mt-16 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Getting Started</h2>
          <p>
            To start using our platform, sign up with your business email, verify
            your account, and complete your company profile. Once verified, you can
            browse our catalog and start adding products to your cart.
          </p>
        </section>

        <section id="cart-help" className="mt-16 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Managing Your Cart</h2>
          <p>
            Adding products to your cart is easy — just click "Add to Cart" on the
            product page. To remove or adjust quantities, go to your cart page and
            use the provided controls.
          </p>
        </section>

        <section id="orders" className="mt-16 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Placing Orders</h2>
          <p>
            Review your cart, proceed to checkout, confirm your shipping and payment
            details, and place your order. You’ll receive an order confirmation via
            email.
          </p>
        </section>

        <section id="payments" className="mt-16 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Payments</h2>
          <p>
            We accept bank transfers, credit cards, and other secure payment methods.
            All payments are processed through encrypted channels.
          </p>
        </section>

        <section id="account-settings" className="mt-16 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Account Settings</h2>
          <p>
            Keep your business details up to date in your profile settings. You can
            also change your password and notification preferences here.
          </p>
        </section>

        <section id="contact" className="mt-16 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Contact Support</h2>
          <p>
            If you need further assistance, email us at{" "}
            <a
              href="mailto:support@yourwebsite.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@yourwebsite.com
            </a>{" "}
            or use the contact form on our website.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;
