'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8">          {/* Organization Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SFC Hub
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              SFC生によるトークとワークショップを通して、
            「問題定義 → 創造 → 実行」という価値創造のサイクルを
            体験的に学び、自らの探究や将来の活動へとつなげます。
            </p>
            {/*<div className="flex space-x-4">
              {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>*/}
          </div>
            
          {/* Organization Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">団体情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  団体について
                </Link>
              </li>
              <li>
                <Link href="#activities" className="text-gray-300 hover:text-blue-400 transition-colors">
                  活動内容
                </Link>
              </li>
              <li>
                <Link href="#members" className="text-gray-300 hover:text-blue-400 transition-colors">
                  メンバー紹介
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <span className="text-xl">email:</span>
              <span className="text-gray-300">yuichiroknzw2522@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; 2025 SFC Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
