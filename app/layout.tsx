"use client"

import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "./components/header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const queryClient = new QueryClient()
const metadata: Metadata = {
  title: "Product page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl m-auto`}
      >
        <QueryClientProvider client={queryClient}>
          <section className="max-w-7xl m-auto">
            <header>
              <Header title="Website Title" />
            </header>
            <main className="h-full">{children}</main>
            <footer></footer>
          </section>
        </QueryClientProvider>
      </body>
    </html>
  )
}
