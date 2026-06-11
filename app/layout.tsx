import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaditya Mohan — Software Engineer",
  description:
    "Frontend-focused software engineer (SDE-1 @ PayRange) building production-grade web apps with React, TypeScript, and Firebase.",
  icons: {
    icon: "/favicon.ico",
  },
};

const themeInitScript = `
try {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
