import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return 
  <div>
    <Component {...pageProps} />
  <Analytics />
    </div>
}

export default MyApp
