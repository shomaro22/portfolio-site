export type Project = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "attendance-app",
    title: "勤怠管理アプリ",
    description:
      "打刻・修正申請・管理者承認・監査ログを一貫して扱う勤怠管理システム。フロントは Vercel、API は Render、DB は Neon で本番運用しています。",
    highlights: [
      "JWT + Refresh Token による認証",
      "管理者承認フローと監査ログ",
      "GitHub Actions による CI/CD と Vercel デプロイ",
    ],
    tech: ["Go", "React", "TypeScript", "PostgreSQL", "Redis", "Vercel", "Render"],
    demoUrl: "https://attendance-app-two-ruby.vercel.app/login",
    githubUrl: "https://github.com/shomaro22/Attendance_App",
  },
  {
    id: "oauth-server",
    title: "OAuth 2.0 / OIDC 認可サーバー",
    description:
      "認可コードフロー・PKCE (S256)・OpenID Connect を実装した認可サーバー。フロントは Vercel、API は Render、DB は Neon、キャッシュは Redis で本番運用しています。",
    highlights: [
      "OAuth 2.0 + PKCE + OpenID Connect",
      "JWT (RS256) と開発用 OAuth テストクライアント",
      "GitHub Actions による CI/CD と Vercel デプロイ",
    ],
    tech: [
      "Go",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Vercel",
      "Render",
    ],
    demoUrl: "https://oauth-server-ver-2.vercel.app/dev/oauth-client",
    githubUrl: "https://github.com/shomaro22/OAuth-Server-Ver.2",
  },
  {
    id: "chat-app",
    title: "Chat App",
    description:
      "リアルタイムチャットを想定した Web アプリケーション。認証・メッセージ送受信など、フルスタックで実装・デプロイしています。",
    highlights: [
      "本番環境での動作確認済み",
      "Vercel へのデプロイ",
      "GitHub によるバージョン管理",
    ],
    tech: ["Go", "React", "TypeScript", "Vercel"],
    demoUrl: "https://chat-app-xi-ashen-92.vercel.app/login",
    githubUrl: "https://github.com/shomaro22/Chat_App",
  },
];

export const siteConfig = {
  name: "ポートフォリオサイト",
  title: "ポートフォリオサイト | Webエンジニア",
  description:
    "フリーランス向けポートフォリオ。設計・実装・デプロイまで一貫して対応できる Web アプリケーションの実績を掲載しています。",
  githubUrl: "https://github.com/shomaro22",
  tagline: "設計から本番デプロイまで、一人で届けられる Web エンジニア",
};
