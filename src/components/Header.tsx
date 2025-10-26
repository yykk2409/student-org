'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SFC Hub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                ホーム
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                団体について
              </Link>
              <Link href="#activities" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                活動内容
              </Link>
              <Link href="#members" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                メンバー
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                お問い合わせ
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">メニューを開く</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <Link
            href="#home"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            ホーム
          </Link>
          <Link
            href="#about"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            団体について
          </Link>
          <Link
            href="#activities"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            活動内容
          </Link>
          <Link
            href="#members"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            メンバー
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
