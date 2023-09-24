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
      <Script src='https://kit.fontawesome.com/6c2b9a1b1f.js' strategy='beforeInteractive' />
    </NextUIProvider>
  );
}

export default MyApp;
