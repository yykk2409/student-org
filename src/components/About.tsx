'use client';

import React from 'react';

const About = () => {


  const consept = {
    background: 'かつての高度経済成長期の日本では、人口が増え続けていたため、生産を続ければ利潤が得られていました。しかし現在の日本、特に地方では人口が減少し続けており、単価を上げる＝サービスの付加価値を高めることが求められています。そして同時に、今の高校生・大学生はこの「付加価値を生み出す力＝価値創造の能力」が求められていると思います。',
    process: [
      {
        step: '1',
        title: '問題定義：見極める',
        desc: '違和感を拾い上げる力。幅広い知識とアンテナの高さが必要。',
        details: [
          '自己分析：自分への批判的思考',
          '自分視点の社会分析：自分の立場から社会を批判的に見る',
          'メタ的視点：社会全体を俯瞰して構造的に考える'
        ]
      },
      {
        step: '2',
        title: 'アイデアの創造：創る',
        desc: '問題を見極めた上で、それを解決するための新しいアイデアを生み出す。',
        details: [
          'データを産む（センシング・A/D変換・トラッキング）',
          'データを解釈する（統計・数理解析）',
          'データを活用する（技術・新しい結合・マーケティング）'
        ]
      },
      {
        step: '3',
        title: '実行能力：する',
        desc: '創造したアイデアを、実際に社会に実装する段階である。',
        details: [
          'ステークホルダーの想定',
          '社会へのインパクトを予見する力',
          '実際の社会実装'
        ]
      }
    ]
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            団体について
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちのミッションとビジョン
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mb-16 bg-white rounded-2xl shadow-xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">現代社会の背景と課題</h4>
            <p className="text-gray-700 leading-relaxed mb-4">{consept.background}</p>
          


        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl bg-white rounded-2xl shadow-xl">
          <h4 className="text-xl font-semibold text-green-600 mb-4">価値創造のプロセス</h4>
          <div className="space-y-4">
            {consept.process.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
                <div className="ml-11 space-y-1">
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-xs text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
