import { NextRequest, NextResponse } from 'next/server';

// 管理者認証（実際のプロダクションでは適切な認証システムを使用）
function authenticateAdmin(request: NextRequest): boolean {
  // 簡単な認証チェック（実際のプロダクションではJWTやセッションを使用）
  const authHeader = request.headers.get('authorization');
  return authHeader === 'Bearer admin-token-123';
}

export async function GET(request: NextRequest) {
  try {
    // 認証チェック
    if (!authenticateAdmin(request)) {
      return NextResponse.json(
        { error: '認証が必要です' },
        { status: 401 }
      );
    }

    // お問い合わせデータを取得（実際のプロダクションではデータベースから取得）
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/contact`);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('管理者お問い合わせ取得エラー:', error);
    return NextResponse.json(
      { error: 'データの取得に失敗しました' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // 認証チェック
    if (!authenticateAdmin(request)) {
      return NextResponse.json(
        { error: '認証が必要です' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'IDが必要です' },
        { status: 400 }
      );
    }

    // お問い合わせを削除（実際のプロダクションではデータベースから削除）
    // ここでは簡単な実装のため、成功レスポンスを返す
    console.log(`お問い合わせ ${id} を削除しました`);

    return NextResponse.json(
      { message: 'お問い合わせを削除しました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('お問い合わせ削除エラー:', error);
    return NextResponse.json(
      { error: '削除に失敗しました' },
      { status: 500 }
    );
  }
}