"use client";

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Patient Profiles",
      description: "Comprehensive patient information management including basic details, medical history, and dental records.",
      icon: "📋",
      link: "#patient-profiles"
    },
    {
      title: "Dental Charting",
      description: "Interactive 2D dental charts with customizable tooth states and conditions.",
      icon: "🦷",
      link: "#dental-charting"
    },
    {
      title: "Notes Section",
      description: "Detailed chronological documentation of patient treatments and observations.",
      icon: "📝",
      link: "#notes-section"
    },
    {
      title: "Attachments",
      description: "Secure storage for dental images, X-rays, and important documents.",
      icon: "📎",
      link: "#attachments"
    },
    {
      title: "Search & Filters",
      description: "Quick access to patient records with advanced search and filtering options.",
      icon: "🔍",
      link: "#search-filters"
    },
    {
      title: "Offline-First",
      description: "Reliable local data storage ensuring access even without internet connection.",
      icon: "💾",
      link: "#offline-first"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <a href={feature.link} className="block">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}