'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-p text-grey-900 font-light px-4">
            Stephanie Stelzer
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/portfolio" className="text-p text-grey-400 hover:text-gray-900 font-light">
              Portfolio
            </Link>
            <Link href="/about" className="text-p text-grey-400 hover:text-gray-900 font-light">
              About
            </Link>
            <Link href="/notebook" className="text-p text-grey-400 hover:text-gray-900 font-light">
              Notebook
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-p text-grey-400 hover:text-gray-900 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-p text-grey-400 hover:text-gray-900 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/notebook"
                className="block px-3 py-2 text-p text-grey-400 hover:text-gray-900 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Notebook
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 