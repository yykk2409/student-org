'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  summary?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/news');
      if (!response.ok) {
        throw new Error('ニュースの取得に失敗しました');
      }

      const data = await response.json();
      setNews(data.news || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">読み込み中...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchNews}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            再試行
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">お知らせ</h2>
          <p className="text-lg text-gray-600">最新のニュースとお知らせをお届けします</p>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">お知らせはありません</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="flex items-center gap-6 p-6 hover:bg-gray-50 transition"
              >
                {/* 日付 */}
                <div className="text-sm text-gray-500 w-32 text-center">
                  {new Date(item.createdAt).toLocaleDateString('ja-JP')}
                </div>

                {/* 縦線 */}
                <div className="h-8 border-l border-gray-300"></div>

                {/* タイトルと要約 */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
