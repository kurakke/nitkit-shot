import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head prefix='og: https://ogp.me/ns#'>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:site_name" content="nit-kit-shot" />
          <meta property="og:title" content="nit-kit-shot" />
          <meta property="og:image" content="https://nitkit-shot-ioacngrr3-kurakke.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.baf38126.png&w=128&q=75" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nitkit-shot.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="nit-kit-shot" />
          <meta name="twitter:description" content="Twitterユーザーの皆様へ！ビタミンラッシュの開発で監修者としてご協力いただいているPLUMさんで頭皮診断・ヘッドスパをうけてきました。" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
