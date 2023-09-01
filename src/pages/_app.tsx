import '../styles/index.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

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
    </NextUIProvider>
  );
}

export default MyApp;
