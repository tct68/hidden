import '@sushiswap/ui/index.css'
import 'styles/index.css'
import '../variables.css'

import { useIsSmScreen } from '@sushiswap/hooks'
import { App, ThemeProvider } from '@sushiswap/ui'
import { client } from '@sushiswap/wagmi/client'
import { Analytics } from '@vercel/analytics/react'
import { MotionConfig } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import React, { FC, useEffect } from 'react'
import { WagmiConfig } from '@sushiswap/wagmi'

import { Header } from '../components'
import SEO from '../next-seo.config.mjs'
import { ToastContainer } from '@sushiswap/ui/future/components/toast'
import { QueryClientProvider } from 'components/QueryClientProvider'

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

export { reportWebVitals } from 'next-axiom'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const isSmallScreen = useIsSmScreen()
  const router = useRouter()

  useEffect(() => {
    const handler = (page: any) => {
      window.dataLayer.push({
        event: 'pageview',
        page,
      })
    }
    router.events.on('routeChangeComplete', handler)
    router.events.on('hashChangeComplete', handler)
    return () => {
      router.events.off('routeChangeComplete', handler)
      router.events.off('hashChangeComplete', handler)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
        <link rel="manifest" href="/site.webmanifest?v=1" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#fa52a0" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-JW8KWJ48EF`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JW8KWJ48EF', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <WagmiConfig client={client}>
        <QueryClientProvider>
          <ThemeProvider>
            <App.Shell>
              <DefaultSeo {...SEO} />
              <Header />
              <MotionConfig reducedMotion={isSmallScreen ? 'always' : 'user'}>
                <Component {...pageProps} />
              </MotionConfig>
              <App.Footer />
            </App.Shell>
          </ThemeProvider>
        </QueryClientProvider>
      </WagmiConfig>
      <Analytics />
    </>
  )
}

export default MyApp
