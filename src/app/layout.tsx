import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UFC Fighter Profile | Alex Pereira',
  description: 'Comprehensive UFC fighter profile for Alex Pereira - Light Heavyweight Champion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}