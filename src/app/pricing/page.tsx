"use client";

import DownloadCTA from '@/components/DownloadCTA';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0066FF] to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Choose the perfect plan for your dental practice
          </p>
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-2">
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                !isYearly ? 'bg-white text-[#0066FF]' : 'text-white'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                isYearly ? 'bg-white text-[#0066FF]' : 'text-white'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SOLO Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">SOLO Plan</h2>
            <div className="text-4xl font-bold mb-6">
              ₱{isYearly ? '3,990.00' : '299.00'}
              <span className="text-base font-normal text-gray-600">
                /{isYearly ? 'year' : 'month'}
              </span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Single Device Access
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic Features
              </li>
            </ul>
            
          </motion.div>

          {/* PLUS Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#0066FF]"
          >
            <div className="bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold mb-4">PLUS Plan</h2>
            <div className="text-4xl font-bold mb-6">
              ₱{isYearly ? '9,990.00' : '779.00'}
              <span className="text-base font-normal text-gray-600">
                /{isYearly ? 'year' : 'month'}
              </span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Multi-Device Access
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced Features
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Priority Support
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <DownloadCTA />
    </div>
  );
}