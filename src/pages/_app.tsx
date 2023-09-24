import { NextUIProvider } from '@nextui-org/react';
import Script from 'next/script';
import '../styles/index.css';

// HACK: AppPropsを使用するとエラーが発生していたため、独自で型定義をしました。
function MyApp({
  Component,
  pageProps,
}: {
  Component: (props: object) => JSX.Element;
  pageProps: object;
}) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Script
        src='https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.map'
        strategy='beforeInteractive'
      />
    </NextUIProvider>
  );
}

export default MyApp;
