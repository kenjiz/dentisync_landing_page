"use client";

import { motion } from 'framer-motion';

export default function TermsPage() {
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
              Terms and Conditions
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
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using DentiSync, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of DentiSync for personal, non-commercial transitory viewing only.
              </p>

              <h2>3. Service Description</h2>
              <p>
                DentiSync is a dental practice management application that provides various features including patient management, scheduling, and practice analytics.
              </p>

              <h2>4. User Obligations</h2>
              <ul>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the service only for its intended purpose</li>
                <li>Protect patient confidentiality and comply with HIPAA regulations</li>
              </ul>

              <h2>5. Subscription Terms</h2>
              <p>
                Access to DentiSync requires a valid subscription. Subscription fees are billed according to the plan selected.
              </p>

              <h2>6. Data Protection</h2>
              <p>
                We process personal data in accordance with our Privacy Policy and applicable data protection laws, including GDPR.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                DentiSync shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Philippines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}