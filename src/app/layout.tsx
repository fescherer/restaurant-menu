import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Disclaimer } from '@/components/disclaimer'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiosque Parque da Juventude Itatiba',
  description: 'Cardápio do Quiosque do Parque da Juventude Itatiba',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative flex size-full min-h-screen flex-col bg-background text-text`}>
        <Disclaimer />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
