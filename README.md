# ポートフォリオサイト

フリーランス向けのポートフォリオ（Next.js + TypeScript + Tailwind CSS）。

## 掲載プロジェクト

- [Chat App](https://chat-app-xi-ashen-92.vercel.app/login)（メイン）
- [勤怠管理アプリ](https://attendance-app-two-ruby.vercel.app/login)（サブ）
- [OAuth 2.0 / OIDC 認可サーバー](https://oauth-server-ver-2.vercel.app/dev/oauth-client)

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で表示されます。

## ビルド

```bash
npm run build
npm run start
```

## Vercel デプロイ

1. このリポジトリを GitHub に push
2. [Vercel](https://vercel.com) で Import
3. Framework: Next.js（デフォルト）
4. Root Directory: リポジトリルート

## カスタマイズ

- 表示名・文言: `src/data/projects.ts` の `siteConfig`
- 実績の追加・編集: 同ファイルの `projects` 配列
