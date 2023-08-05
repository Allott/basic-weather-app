import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import setupLocatorUI from "@locator/runtime";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basic Weather App',
  description: 'A basic weather app ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (process.env.NODE_ENV === "development") {
    setupLocatorUI();
  }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
