import './globals.css'
import { Public_Sans } from 'next/font/google'

import { Navbar } from '@/components/Navbar'

const publicSans = Public_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Sophie Demo</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="description" content="Sophie Demo" />
        <meta property="og:title" content="LangChain + Next.js Template" />
        <meta property="og:description" content="Sophie Demo" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sophie Demo" />
        <meta name="twitter:description" content="Sophie Demo" />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  )
}
