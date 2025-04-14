"use client";

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Privacy Policy
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
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how DentiSync collects, uses, and protects your personal data in accordance with GDPR and other applicable data protection laws.
              </p>

              <h2>2. Data Controller</h2>
              <p>
                DentiSync acts as the data controller for personal information collected through our service.
              </p>

              <h2>3. Personal Data We Collect</h2>
              <ul>
                <li>Contact information (name, email, phone number)</li>
                <li>Professional information (dental practice details)</li>
                <li>Usage data (app interactions, preferences)</li>
                <li>Patient data (as processed on behalf of dental practices)</li>
              </ul>

              <h2>4. Legal Basis for Processing</h2>
              <p>
                We process personal data based on:
              </p>
              <ul>
                <li>Contract performance</li>
                <li>Legal obligations</li>
                <li>Legitimate interests</li>
                <li>Consent (where applicable)</li>
              </ul>

              <h2>5. Your Data Protection Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>

              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data.
              </p>

              <h2>7. International Transfers</h2>
              <p>
                Data transfers outside the EEA are protected by appropriate safeguards.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                For privacy-related inquiries, contact our Data Protection Officer at privacy@dentisync.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}