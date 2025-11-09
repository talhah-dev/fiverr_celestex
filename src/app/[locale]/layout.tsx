// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CelesteIQ – Intelligent Microsoft + AI Solutions",
  description:
    "CelesteIQ helps businesses automate, analyze, and scale with AI-powered solutions built on the Microsoft ecosystem, including Microsoft 365, Power Platform, and Copilot.",
};

type Props = {
  children: React.ReactNode;
  // 👇 params is a Promise in Next 16
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  // 👇 unwrap the Promise
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        {/* messages are wired up via src/i18n/request.ts */}
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
