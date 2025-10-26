const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function createAdmin(name, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'admin',
      },
    });

    console.log('\n✅ 管理者ユーザーが作成されました！');
    console.log('ユーザーID:', admin.id);
  } catch (error) {
    if (error.code === 'P2002') {
      console.log('\n⚠️ すでにこのメールアドレスのユーザーが存在します。');
    } else {
      console.error('\n❌ エラーが発生しました:', error);
    }
  }
}

async function deleteAdmin(email) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      console.log('\n⚠️ 該当ユーザーが見つかりません。');
      return;
    }

    await prisma.user.delete({ where: { email } });
    console.log('\n🗑️ 管理者ユーザーを削除しました:', email);
  } catch (error) {
    console.error('\n❌ 削除中にエラーが発生しました:', error);
  }
}

async function main() {
  console.log('=== 管理者ユーザー管理ツール ===');
  const action = await ask('作成しますか？削除しますか？(create/delete): ');

  if (action === 'create') {
    const name = await ask('名前を入力してください: ');
    const email = await ask('メールアドレスを入力してください: ');
    const password = await ask('パスワードを入力してください: ');
    await createAdmin(name, email, password);
  } else if (action === 'delete') {
    const email = await ask('削除したいユーザーのメールアドレスを入力してください: ');
    await deleteAdmin(email);
  } else {
    console.log('\n❌ 無効な操作です。create または delete を入力してください。');
  }

  rl.close();
  await prisma.$disconnect();
}

main();
