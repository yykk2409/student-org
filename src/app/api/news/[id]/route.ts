import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ← await が必要になりました

  try {
    const news = await prisma.news.findUnique({ where: { id } });
    if (!news) {
      return NextResponse.json({ error: 'ニュースが見つかりません' }, { status: 404 });
    }
    return NextResponse.json({ news });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: '取得に失敗しました' }, { status: 500 });
  }
}
