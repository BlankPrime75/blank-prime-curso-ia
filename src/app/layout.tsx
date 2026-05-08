import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MetaPixel } from "@/components/meta-pixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blankprime.com"),
  title: "IA para Empresários | Blank Prime",
  description:
    "4 encontros presenciais. Você sai com IA funcionando no seu negócio — não com mais um certificado na gaveta. Turma de no máximo 30 empresários. Método já aplicado na Bondmann Química.",
  keywords: [
    "IA para empresários",
    "curso de inteligência artificial",
    "Blank Prime",
    "automação para empresas",
    "ChatGPT para negócios",
    "agente inteligente",
  ],
  authors: [{ name: "Blank Prime" }],
  openGraph: {
    title: "IA para Empresários | Blank Prime",
    description:
      "4 encontros presenciais. Você sai com IA funcionando no seu negócio. Turma limitada a 30 empresários.",
    url: "https://blankprime.com",
    siteName: "Blank Prime",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Empresários | Blank Prime",
    description:
      "4 encontros presenciais. Você sai com IA funcionando no seu negócio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-bp-bg text-bp-text-primary antialiased`}
      >
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
