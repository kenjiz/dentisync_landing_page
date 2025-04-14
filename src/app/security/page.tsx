"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import DownloadCTA from '@/components/DownloadCTA';

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data transmitted between your devices and our servers is fully encrypted using industry-standard protocols.",
      icon: "🔒"
    },
    {
      title: "HIPAA Compliance",
      description: "Our platform is designed to meet all HIPAA requirements for protecting patient health information.",
      icon: "✓"
    },
    {
      title: "Regular Security Audits",
      description: "We conduct regular security assessments and penetration testing to ensure your data remains protected.",
      icon: "🛡️"
    },
    {
      title: "Secure Authentication",
      description: "Multi-factor authentication and secure password policies protect your account access.",
      icon: "🔑"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0066FF] text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Security is Our Priority
            </h1>
            <p className="text-xl text-white/80">
              DentiSync employs enterprise-grade security measures to protect your practice and patient data
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Data Protection Measures</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔐</span>
                  <span>256-bit AES encryption for all stored data</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">☁️</span>
                  <span>Secure cloud backup with redundancy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span>Secure device management and remote wipe capabilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <span>24/7 security monitoring and threat detection</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-center text-8xl mb-4">🛡️</div>
              <p className="text-center text-white/80">
                Enterprise-grade security protecting your practice 24/7
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Compliance & Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['HIPAA', 'GDPR', 'ISO 27001', 'SOC 2'].map((cert, index) => (
                <div key={cert} className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold">{cert}</p>
                  <p className="text-sm text-gray-600">Compliant</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <DownloadCTA />
    </main>
  );
}