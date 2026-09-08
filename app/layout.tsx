import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth-context";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { title: "T-San Management", description: "Không gian quản lý vận hành T-San Tea & Coffee." };
export const viewport: Viewport = { themeColor: "#f6f8f7", userScalable: false };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className="bg-background"><body className={`${geistSans.variable} ${geistMono.variable}`}><AuthProvider>{children}</AuthProvider></body></html>;
}
