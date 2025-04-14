"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeatureDetails() {
  return (
    <section className="py-20 bg-white rounded-t-[3rem]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">We will take care of your everything</h2>
            <p className="text-gray-600 mb-8">
              Streamline your dental practice with our comprehensive management solution. Focus on what matters most - your patients.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="p-4 bg-gray-50 rounded-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold">Patient Management & Tasks</h3>
                <p className="text-gray-600">Efficiently manage patient records and daily tasks</p>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-gray-50 rounded-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold">Set Schedule with Calendar</h3>
                <p className="text-gray-600">Easy appointment scheduling and management</p>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-gray-50 rounded-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold">Payments & Noteworthy App</h3>
                <p className="text-gray-600">Secure payment processing and important notifications</p>
              </motion.div>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="/images/feature-detail.png"
              alt="DentiSync Features"
              width={500}
              height={600}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}