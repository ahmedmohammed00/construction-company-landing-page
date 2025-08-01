import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './fonts.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'إليت فينيش - تصميم داخلي وتشطيبات عصرية',
  description: 'تصاميم داخلية استثنائية وتشطيبات فاخرة تعكس شخصيتك وأسلوب حياتك. خبرة تزيد عن 15 عاماً في إبداع مساحات تلهم وتبهر.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} font-arabic`}>
        {children}
      </body>
    </html>
  )
} 