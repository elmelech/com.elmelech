import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Roey Elmelech',
    default:
      'Roey Elmelech',
  },
  description:
    'Hello! My name is Roey Elmelech, and I am a New York based senior Computer Science major at Columbia University in New York, specializing in intelligent systems. I am passionate about leveraging my technical expertise and problem-solving skills to contribute to innovative software solutions. As I approach the completion of my degree, I am eager to explore opportunities where I can apply my knowledge in real-world applications and further develop my skills as a software engineer.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2XLSFDNVKV"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2XLSFDNVKV');
      </script>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
