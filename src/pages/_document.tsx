import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta name="keywords" content="Pokemon Wikipedia, pokemon"></meta>
          <meta property="og:title" content="Pokemon Database"></meta>
          <meta name="description" content="TPDB - The Pokemon Database" />

          <meta
            property="og:description"
            content="TPDB - The Pokemon Database"
          />

          <meta property="og:image" content="https://i.imgur.com/mvOzIAR.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Pokemon Database" />
          <meta
            property="twitter:description"
            content="TPDB - The Pokemon Database"
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/mvOzIAR.jpg"
          />
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
