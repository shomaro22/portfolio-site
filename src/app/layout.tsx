import type { Metadata } from "next";
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/projects";
import "./globals.css";

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const zenSans = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerif.variable} ${zenSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col font-sans text-ink">
        <ThemeProvider>
          <div className="relative z-10 flex min-h-full flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
