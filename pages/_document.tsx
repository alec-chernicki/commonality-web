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
      <Html>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/hrd8sxz.css" />

          <script src="/segment.js" />
        </Head>
        <NextSeo
          title="Commonality | Goal and alignment software for companies of all sizes."
          description="Unify data from the software your employees love and tie SMART goals or OKRs from every team back to key company metrics."
          canonical="https://www.commonality.co"
          openGraph={{
            url: 'https://www.commonality.co',
            title:
              'Commonality | Goal and alignment software for companies of all sizes.',
            description:
              'Unify data from the software your employees love and tie SMART goals or OKRs from every team back to key company metrics.',
            images: [{ url: 'https://www.commonality.co/meta-image.jpg' }],
            site_name: 'Commonality',
          }}
          twitter={{
            site: 'https://www.commonality.co',
            cardType: 'summary_large_image',
          }}
        />
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
