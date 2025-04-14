"use client";

import Image from 'next/image';

export default function TrustedBy() {
  return (
    <section className="py-16 bg-[#0066FF]">
      <div className="container mx-auto px-6">
        <p className="text-center text-white/70 mb-8">Trusted by 50+ dental practices</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {['clinic1', 'clinic2', 'clinic3', 'clinic4', 'clinic5'].map((logo, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
              <Image
                src={`/images/logos/${logo}.png`}
                alt={`${logo} logo`}
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}