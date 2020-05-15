import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { UIApp } from '@alecortega/design-system';
import { NextSeo } from 'next-seo';

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
      <Html lang="en">
        <Head>
          <title>
            Commonality | Goal and alignment software for companies of all
            sizes.
          </title>
          <meta
            content="Unify data from the software your employees love and tie SMART goals or OKRs from every team back to key company metrics."
            name="description"
          />
          <meta property="og:title" content="Build your company's north star" />
          <meta
            property="og:description"
            content="Unify data from the software your employees love and tie SMART goals or OKRs from every team back to key company metrics."
          />
          <meta
            property="og:image"
            content="https://www.commonality.co/meta-image.jpg"
          />
          <meta property="og:type" content="website" />
          <meta
            property="twitter:title"
            content="Build your company's north star"
          />
          <meta
            property="twitter:description"
            content="Unify data from the software your employees love and tie SMART goals or OKRs from every team back to key company metrics."
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
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
