"use client";

import { motion } from 'framer-motion';

export default function CookiesPage() {
  return (
    <main className="pt-20">
      <section className="bg-[#0066FF] text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-white/80">
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit our website.
              </p>

              <h2>2. Types of Cookies We Use</h2>
              <h3>Essential Cookies</h3>
              <p>
                Required for the operation of our website and app. You cannot opt out of these cookies.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                Help us understand how visitors interact with our website.
              </p>

              <h3>Functional Cookies</h3>
              <p>
                Enable enhanced functionality and personalization.
              </p>

              <h2>3. Cookie Management</h2>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features.
              </p>

              <h2>4. Third-Party Cookies</h2>
              <p>
                We use third-party services that may set cookies:
              </p>
              <ul>
                <li>Google Analytics</li>
                <li>Payment processors</li>
                <li>Authentication services</li>
              </ul>

              <h2>5. Cookie Consent</h2>
              <p>
                When you first visit our website, you will be asked to consent to our use of cookies.
              </p>

              <h2>6. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy to reflect changes in our practices.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have questions about our Cookie Policy, please contact us at cookies@dentisync.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}