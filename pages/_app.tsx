import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Windmill } from '@windmill/react-ui'
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    // suppress useLayoutEffect warnings when running outside a browser
    // if (!process.browser) React.useLayoutEffect = React.useEffect;
    if (typeof process !== 'undefined' && !process.browser) {
      React.useLayoutEffect = useEffect;
    }
  return (
    <Windmill usePreferences={true}>
      <Component {...pageProps} />
    </Windmill>
  )
}
