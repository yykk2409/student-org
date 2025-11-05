import { notFound } from 'next/navigation';

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/news/${params.id}`, { cache: 'no-store' });

  if (!res.ok) return notFound();

  const { news } = await res.json();

  return (
    <section className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{news.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(news.createdAt).toLocaleDateString('ja-JP')}
        </p>
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{news.content}</p>
      </div>
    </section>
  );
}
