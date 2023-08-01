import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  // if (!process.browser) React.useLayoutEffect = React.useEffect;
  if (typeof process !== "undefined" && !process.browser) {
    React.useLayoutEffect = useEffect;
  }
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
