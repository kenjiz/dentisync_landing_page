"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Dental Practice Owner",
      image: "/images/testimonials/sarah.jpg",
      text: "DentiSync has transformed how we manage our practice. The efficiency gains are remarkable."
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      image: "/images/testimonials/michael.jpg",
      text: "The patient management features are intuitive and save us hours every week."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Dental Surgeon",
      image: "/images/testimonials/emily.jpg",
      text: "Best investment we've made for our practice management needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-7xl font-bold text-gray-200 mb-12">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}