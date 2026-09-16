import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aaditya Mohan — Software Engineer",
  description:
    "Software engineer (SDE-1 @ PayRange) building production-grade web products with React, TypeScript, and Firebase.",
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
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
