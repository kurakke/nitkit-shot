import { NextUIProvider } from '@nextui-org/react';
import '../styles/index.css';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

import { cuprum, dotGothic16, frijole, inter, nosifer, roadRage } from '../styles/fonts';


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
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-cuprum: ${cuprum.style.fontFamily};
            --font-dotGothic16: ${dotGothic16.style.fontFamily};
            --font-frijole: ${frijole.style.fontFamily};
            --font-nosifer: ${nosifer.style.fontFamily};
            --font-roadRage: ${roadRage.style.fontFamily};
          }
        `}
      </style>
      <Analytics />
    </NextUIProvider>
  );
}

export default MyApp;
