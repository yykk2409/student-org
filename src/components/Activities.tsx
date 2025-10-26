'use client';

import React from 'react';
import Link from 'next/link';

const Activities = () => {
  const activities = [
    {
      icon: '🎓',
      title: 'SFC生によるトーク',
      description: 'SFC生の実体験に基づく価値創造のプロセスを学ぶトークセッションです。',
      features: ['実体験の共有', '失敗談と学び', 'Q&Aセッション', '個別相談'],
    },
    {
      icon: '🤝',
      title: 'グループワーク',
      description: '高校生同士で協力して価値創造のプロセスを体験するグループワークです。',
      features: ['チームビルディング', '協働作業', 'プレゼンテーション', '相互フィードバック'],
    },
    {
      icon: '🌟',
      title: '共有セッション',
      description: 'グループワークで得た知識やアイデアを共有するセッションです。',
      features: ['個人の振り返り', '将来への応用計画', '継続的な学習計画', 'ネットワーク構築'],
    },
  ];

  const eventInfo = {
    title: '未来をつくる思考回路 ー SFCスピリッツを群馬へ',
    date: '12月28日（土）',
    location: '上毛スクエア（新前橋駅徒歩2分）',
    target: '群馬県の高校生',
    description: '高校生のための探究と創造の体験イベント。SFC生によるトークとワークショップを通して、「問題定義 → 創造→ 実行」というサイクルを体験的に学びます。',
    href: '/events/2025',
  };

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            イベント内容
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            価値創造のプロセスを体験的に学ぶ6つのプログラム
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <ul className="space-y-2">
                  {activity.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
          ))}
        </div>
        {/* イベント情報セクション */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">開催予定のイベント</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-2xl font-semibold text-blue-600 mb-4">{eventInfo.title}</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>日時:</strong> {eventInfo.date}</p>
                <p><strong>場所:</strong> {eventInfo.location}</p>
                <p><strong>対象:</strong> {eventInfo.target}</p>
              </div>
              <p className="mt-4 text-gray-600">{eventInfo.description}</p>
              <div className="text-center">
              <a
                href={eventInfo.href}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                詳細を見る
              </a>
            </div>
            </div>
            

          </div>

          
        </div>
        
      </div>
    </section>
  );
};

export default Activities;
