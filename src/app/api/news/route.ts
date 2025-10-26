import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const news = await prisma.news.findMany({
      where: {
        published: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({ news });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
