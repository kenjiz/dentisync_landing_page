"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="DentiSync Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-[#0066FF]">DentiSync</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/about"
              className={`font-medium transition-colors ${
                pathname === '/about' 
                  ? 'text-[#0066FF]' 
                  : 'text-gray-600 hover:text-[#0066FF]'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact"
              className={`font-medium transition-colors ${
                pathname === '/contact' 
                  ? 'text-[#0066FF]' 
                  : 'text-gray-600 hover:text-[#0066FF]'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/pricing"
              className={`font-medium transition-colors ${
                pathname === '/pricing' 
                  ? 'text-[#0066FF]' 
                  : 'text-gray-600 hover:text-[#0066FF]'
              }`}
            >
              Pricing
            </Link>
            <Link 
              href="/security"
              className={`font-medium transition-colors ${
                pathname === '/security' 
                  ? 'text-[#0066FF]' 
                  : 'text-gray-600 hover:text-[#0066FF]'
              }`}
            >
              Security
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}