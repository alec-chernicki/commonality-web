import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { UIApp } from '@alecortega/design-system';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            content="Unify data from the software your employees love and tie goals from every team back to key company metrics."
            name="description"
          />
          <link rel="dns-prefetch" href="https://use.typekit.net/" />
          <meta property="og:title" content="Build your company's north star" />
          <meta
            property="og:description"
            content="Unify data from the software your employees love and tie goals from every team back to key company metrics."
          />
          <meta
            property="og:image"
            content="https://commonality.co/meta-image.jpg"
          />
          <meta property="og:type" content="website" />
          <meta
            property="twitter:title"
            content="Build your company's north star"
          />
          <meta
            property="twitter:description"
            content="Unify data from the software your employees love and tie goals from every team back to key company metrics."
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/hrd8sxz.css" />

          <script src="/segment.js" />
        </Head>
        <body>
          <UIApp>
            <Main />
          </UIApp>
          <NextScript />
        </body>
      </Html>
    );
  }
}
