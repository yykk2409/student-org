'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
<section
  id="home"
  className="relative py-24 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden"
>      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3CradialGradient id='a' cx='50%25' cy='50%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff' stop-opacity='0.1'/%3E%3Cstop offset='100%25' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='200' cy='200' r='100' fill='url(%23a)'/%3E%3Ccircle cx='800' cy='300' r='150' fill='url(%23a)'/%3E%3Ccircle cx='400' cy='700' r='120' fill='url(%23a)'/%3E%3C/svg%3E")] bg-cover bg-center opacity-30`}
      ></div>      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            SFC Hub
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
            つながりから、未来をデザインする。
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            SFC生によるトークとワークショップを通して、
            「問題定義 → 創造 → 実行」という価値創造のサイクルを
            体験的に学び、自らの探究や将来の活動へとつなげます。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#about"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              団体について
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="emoji text-white text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">問題定義</h3>
            <p className="text-blue-100">違和感を拾い上げる力</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="emoji text-white text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-white mb-2">アイデア創造</h3>
            <p className="text-blue-100">新しい価値を生み出す</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="emoji text-white text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">実行能力</h3>
            <p className="text-blue-100">社会に実装する力</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
