import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import '../node_modules/hamburgers/dist/hamburgers.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'McLauchlan Eletrical | Residential, Commercial, Marine, & Industrial',
  description: 'Eletrical Services for the Wellington Region',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="images/logo.png" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
