import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EventPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">価値創造ワークショップ</h1>
          <p className="text-xl mb-8">高校生のための探究と創造の体験イベント</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-2xl font-semibold">12月28日（土）開催</p>
            <p className="text-lg">上毛スクエア（新前橋駅徒歩2分）</p>
          </div>
        </div>
      </section>

      {/* イベント概要 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">イベント概要</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">開催情報</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>日時:</strong> 12月28日（土）</li>
                  <li><strong>場所:</strong> 上毛スクエア（新前橋駅徒歩2分）</li>
                  <li><strong>対象:</strong> 高校生</li>
                  <li><strong>定員:</strong> 20〜30名</li>
                  <li><strong>所要時間:</strong> 約3時間30分</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">プログラム</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>オープニング</span>
                    <span className="text-blue-600 font-medium">15分</span>
                  </div>
                  <div className="flex justify-between">
                    <span>トークセッション1〜3</span>
                    <span className="text-blue-600 font-medium">各25分</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ワークショップ</span>
                    <span className="text-blue-600 font-medium">110分</span>
                  </div>
                  <div className="flex justify-between">
                    <span>クロージング</span>
                    <span className="text-blue-600 font-medium">10分</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 背景と目的 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">背景と目的</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">現代社会の課題</h3>
                <p className="text-gray-700 leading-relaxed">
                  かつての高度経済成長期の日本では、人口が増え続けていたため、生産を続ければ利潤が得られていました。
                  しかし現在の日本、特に地方では人口が減少し続けており、単価を上げる＝サービスの付加価値を高めることが求められています。
                  そして同時に、今の高校生・大学生はこの「付加価値を生み出す力＝価値創造の能力」が求められていると考えるのです。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">価値創造のプロセス</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">問題定義：見極める</h4>
                    <p className="text-sm text-gray-600">
                      違和感を拾い上げる力。幅広い知識とアンテナの高さが必要です。
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">アイデアの創造：創る</h4>
                    <p className="text-sm text-gray-600">
                      問題を見極めた上で、それを解決するための新しいアイデアを生み出します。
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">実行能力：する</h4>
                    <p className="text-sm text-gray-600">
                      創造したアイデアを、実際に社会に実装する段階です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">群馬の高校生に必要な力</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  群馬の高校生は、技術的な知識やスキルは持っているものの、
                  「何が本当の問題なのかを見極める力（問題定義力）」と「型破りな想像力」が十分に育っていないと考えられます。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  そこで本イベントでは、SFC生によるトークとワークショップを通して、
                  この「問題定義 → 創造→ 実行」というサイクルを体験的に学びます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プログラム詳細 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">プログラム詳細</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">トークセッション</h3>
                <p className="text-gray-700">
                  SFC生3〜4名によるトークセッションを実施します。それぞれが自身の取り組みや経験をもとに、
                  「見極める → 創る→ する」の流れを紹介します。特に「創る（アイデアの創造）」の段階を中心に据えたトークを行い、
                  参加者に常識を打ち破る経験と自分たちも挑戦してみたいと感じさせるような、独自性と価値のある実践事例を共有します。
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2 text-green-600">ワークショップ</h3>
                <p className="text-gray-700 mb-4">
                  4〜6人程度のグループに別れてグループに一人のSFC生が入りアイデアフラッシュと発表を行います。
                  「問題定義 → アイデアの創造」を重点的に扱います。
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>例題:</strong> 日本では少子化が極度に進行しています。この現象に対して、あなたが考える「問題」は何ですか？
                    そして、その問題をテクノロジーを使ってどのように解決できるのかを提案してください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 参加申し込み */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">参加申し込み</h2>
          <p className="text-xl mb-8">この機会に、価値創造のプロセスを体験してみませんか？</p>
          <div className="max-w-md mx-auto">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              お問い合わせ・申し込み
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
