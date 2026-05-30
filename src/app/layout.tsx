import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/projects";
import "./globals.css";

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
    <html lang="ja" className="h-full antialiased" suppressHydrationWarning>
      <body className="relative min-h-full flex flex-col bg-bg text-fg">
        <ThemeProvider>
          <div className="relative z-10 flex min-h-full flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
