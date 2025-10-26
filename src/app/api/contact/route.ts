import { NextRequest, NextResponse } from 'next/server';

// お問い合わせデータの型定義
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// お問い合わせデータを保存するための仮のデータベース（実際のプロダクションではデータベースを使用）
let contactSubmissions: (ContactFormData & { id: string; createdAt: Date })[] = [];

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // バリデーション
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください' },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // 新しいお問い合わせデータを作成
    const newSubmission = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date(),
    };

    // データベースに保存（実際のプロダクションではデータベースを使用）
    contactSubmissions.push(newSubmission);

    // 管理者にメール送信（実際のプロダクションではメールサービスを使用）
    console.log('新しいお問い合わせ:', newSubmission);

    // 成功レスポンス
    return NextResponse.json(
      { 
        message: 'お問い合わせを受け付けました。ありがとうございます。',
        id: newSubmission.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('お問い合わせ処理エラー:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。しばらくしてから再度お試しください。' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // 管理者用：お問い合わせ一覧を取得
    return NextResponse.json({
      submissions: contactSubmissions.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
      total: contactSubmissions.length
    });
  } catch (error) {
    console.error('お問い合わせ取得エラー:', error);
    return NextResponse.json(
      { error: 'データの取得に失敗しました' },
      { status: 500 }
    );
  }
}