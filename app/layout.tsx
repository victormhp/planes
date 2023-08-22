import { Providers } from '@/components/providers'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Planes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute='class' defaultTheme="system" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  )
}
