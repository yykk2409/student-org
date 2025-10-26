'use client';

import React, { useState, useEffect } from 'react';

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
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">読み込み中...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchNews}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              再試行
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">お知らせ</h2>
          <p className="text-lg text-gray-600">最新のニュースとお知らせをお届けします</p>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">お知らせはありません</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">
                    {new Date(item.createdAt).toLocaleDateString('ja-JP')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                {item.summary && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                )}
                <div className="text-gray-500 text-sm">
                  {item.content.length > 100 
                    ? `${item.content.substring(0, 100)}...` 
                    : item.content
                  }
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
