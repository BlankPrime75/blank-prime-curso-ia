import type { Metadata } from "next";
import { Anton, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
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

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blankprime.com"),
  title: "IA para Empresários | Blank Prime",
  description:
    "4 encontros presenciais. Você sai com IA funcionando no seu negócio, não com mais um certificado na gaveta. Turma reduzida e limitada. Método já aplicado na Bondmann Química.",
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
      "4 encontros presenciais. Você sai com IA funcionando no seu negócio. Turma limitada.",
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
    <html
      lang="pt-BR"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${anton.variable} ${cormorant.variable}`}
    >
      <body className="bg-bp-bg text-bp-text-primary antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
