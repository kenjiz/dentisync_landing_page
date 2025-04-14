"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Your dental practice, automated.
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl text-white mb-4">
                Practice management made simple
              </h3>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">450+</div>
                  <div className="text-white/70">Patient Notes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">80%</div>
                  <div className="text-white/70">Time Savings</div>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0066FF] px-8 py-3 rounded-full font-medium"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <Image
                src="/images/app-mockup.png"
                alt="DentiSync App Interface"
                width={600}
                height={800}
                className="w-full"
                priority
              />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
              <Image
                src="/images/dentist-photo.jpg"
                alt="Dentist using app"
                width={300}
                height={200}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}