import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './styles.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'T-SAN Restaurant OS',
  description: 'Quản lý nhà hàng và bán hàng tại T-SAN',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className="bg-[#f6f7f4]"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>
}
