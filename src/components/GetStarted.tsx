"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/app-usage.jpg"
              alt="DentiSync in use"
              width={500}
              height={400}
              className="rounded-2xl"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Get started with DentiSync</h2>
            <p className="text-gray-600 mb-8">
              Transform your dental practice with our intuitive and powerful management solution.
            </p>
            
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl"
              >
                <Image
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  width={24}
                  height={24}
                />
                <span>Google Play</span>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl"
              >
                <Image
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  width={24}
                  height={24}
                />
                <span>App Store</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}