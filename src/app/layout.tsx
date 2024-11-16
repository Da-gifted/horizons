import type { Metadata } from "next";
import { Nunito, Roboto } from "next/font/google";

import 'primeicons/primeicons.css';
import "./globals.css";
import AppProvider from "@/providers/AppProvider";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: "--font-roboto",
})

const nunito = Nunito({
  weight: ['400', '600', '700'],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Horizons",
  description: "Horizons is a platform that connects visually impaired individuals with businesses and individuals who are committed to creating a more inclusive world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${nunito.variable} antialiased`}
      >
          <div className="min-h-screen bg-[#EEEEEE] text-black">
            <main>
              <AppProvider>
                {children}
              </AppProvider>
            </main>
          </div>
      </body>
    </html>
  );
}
