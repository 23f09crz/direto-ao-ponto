import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const featherBold = localFont({
  src: "./fonts/Feather-Bold.ttf",
  variable: "--font-feather-bold",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Direto ao Ponto",
  description: "Solução para vendas diretas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${featherBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
