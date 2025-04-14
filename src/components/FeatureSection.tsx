"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  id: string;
}

export default function FeatureSection({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  id
}: FeatureSectionProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 bg-white rounded-lg shadow-inner">
                  <div className="text-4xl mb-4">
                    {id === "patient-profiles" && "👤"}
                    {id === "dental-charting" && "🦷"}
                    {id === "notes-section" && "📝"}
                    {id === "attachments" && "📎"}
                    {id === "search-filters" && "🔍"}
                    {id === "offline-first" && "💾"}
                  </div>
                  <h3 className="text-xl font-semibold text-center">{title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}