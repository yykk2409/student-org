'use client';

import React from 'react';
import Link from 'next/link';

const Members = () => {
  const members = [
    {
      name: '小野 瑛太',
      role: '代表',
      year: '1年',
      major: '慶應義塾大学環境情報学部',
      image: '👨‍💼',
      description: '団体の代表として、全体的な運営を担当しています。',
      interests: [ 'リーダーシップ', 'プロジェクト管理'],
    },
    {
      name: '金澤 侑一郎',
      role: '副代表',
      year: '1年',
      major: '慶應義塾大学環境情報学部',
      image: '👩‍💼',
      description: 'イベント企画と広報を主に担当しています。',
      interests: ['プログラミング', 'イベント企画', '広報'],
    },
  ];

  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            メンバー紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちのチームメンバーをご紹介します
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8 text-center flex flex-col justify-between h-full">
                <div>
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">
                  {member.major}{member.year}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.description}
                </p>
                </div>
                <div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    興味・専門分野
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.interests.map((interest, interestIndex) => (
                      <span
                        key={interestIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full"
                      >
                        {interest}
                      </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            イベント企画の開催要望はこちらから
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            主に高校生や大学生などを対象にしたイベント企画の開催要望を受け付けています。<br />お気軽にご連絡ください！
          </p>
          <Link
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Members;
