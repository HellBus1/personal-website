
import './globals.css'
import { poppins } from './lib/fonts'

export const metadata = {
  title: 'Syubban Fakhriya',
  description: 'This personal website is utilized for the showcase of portfolios.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="myDark">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
