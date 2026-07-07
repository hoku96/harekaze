import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  weight: ['300', '400', '500', '600'],
  preload: false,
  variable: '--font-noto-serif',
})

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  preload: false,
  variable: '--font-zen-kaku',
})

const title = 'ご飯処 晴れ風 ｜ 富里・日吉台 名物"生鯖"と魚の店'
const description =
  '千葉県富里市日吉台。名物の生鯖と旬の魚、日本酒50種を愉しむご飯処 晴れ風。ランチもディナーも営業する定食屋×居酒屋。'

export const metadata: Metadata = {
  title,
  description,
  generator: 'v0.app',
  openGraph: {
    title,
    description,
    siteName: 'ご飯処 晴れ風',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#faf7f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${zenKakuGothicNew.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
