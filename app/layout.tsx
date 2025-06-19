import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Anastasia's HR Contracting",
  description: "Professional HR consulting services specializing in aboriginal and creative studio environments",
  keywords: [
    'HR consulting',
    'recruitment',
    'people and culture',
    'policy development',
    'Nanaimo BC HR',
  ],
  authors: [{ name: "Anastasia's HR Contracting" }],
  openGraph: {
    title: "Anastasia's HR Contracting",
    description:
      'Professional HR consulting services specializing in aboriginal and creative studio environments',
    url: 'https://anastasia-hr.example.com',
    siteName: "Anastasia's HR Contracting",
    locale: 'en_CA',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  generator: 'v0.dev',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: [{ rel: 'mask-icon', url: '/favicon/favicon.svg' }],
  },
  manifest: '/favicon/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
