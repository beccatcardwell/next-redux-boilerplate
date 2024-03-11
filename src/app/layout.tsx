import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import StoreProvider from "@/components/StoreProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://next-redux-boilerplate.vercel.app'),
  title: "Next Redux Boilerplate",
  description: "A boilerplate for Next.js and Redux using App Router, @reduxjs/toolkit, and react-redux.",
  keywords: ['Next.js', 'React', 'Redux', 'TypeScript', '@reduxjs/toolkit', 'react-redux', 'app router'],
  creator: 'Becca Cardwell',
  openGraph: {
    title: 'Next Redux Boilerplate',
    type: 'website',
    description: "A boilerplate for Next.js and Redux using App Router, @reduxjs/toolkit, and react-redux.",
    siteName: 'Next.js',
    url: '/',
    locale: 'en_US',
    images: {
      url: '/images/screenshot.png',
      alt: 'Next.js Redux Boilerplate homepage'
    },
  },
  twitter: {
    title: 'Next Redux Boilerplate',
    description: "A boilerplate for Next.js and Redux using App Router, @reduxjs/toolkit, and react-redux.",
    creator: '@beccatcardwell',
    images: '/images/screenshot.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
