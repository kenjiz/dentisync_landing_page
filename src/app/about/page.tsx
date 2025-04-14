"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import DownloadCTA from '@/components/DownloadCTA';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0066FF] text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Dental Practice Management
            </h1>
            <p className="text-xl text-white/80">
              We're on a mission to transform how dental practices operate, making them more efficient and patient-focused.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 mb-4 text-lg">
                At DentiSync, we envision a future where dental practices can focus more on patient care and less on administrative tasks.
              </p>
              <p className="text-gray-600 text-lg">
                Our platform is designed to streamline operations, enhance patient experience, and provide dental professionals with the tools they need to succeed in the digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] flex items-center justify-center"
            >
              <Image
                src="/images/vision-dental.jpg"
                alt="Modern Dental Practice"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "Constantly evolving our solutions to meet the changing needs of dental practices."
              },
              {
                icon: "🤝",
                title: "Reliability",
                description: "Building trust through consistent, dependable service and support."
              },
              {
                icon: "⭐",
                title: "Excellence",
                description: "Striving for the highest quality in everything we do."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Dr. John Smith", role: "Founder & CEO" },
              { name: "Sarah Johnson", role: "Head of Product" },
              { name: "Mike Chen", role: "Lead Developer" },
              { name: "Emily Brown", role: "Customer Success" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-32 h-32 bg-[#0066FF]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <DownloadCTA />
    </main>
  );
}