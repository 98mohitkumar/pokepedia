import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
            rel='stylesheet'
          />

          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />

          <meta name='keywords' content='Pokemon Wikipedia, pokemon'></meta>
          <meta property='og:title' content='Pokemon Database'></meta>
          <meta name='description' content='TPDB - The Pokemon Database' />

          <meta property='og:description' content='TPDB - The Pokemon Database' />

          <meta property='og:image' content='https://i.imgur.com/mvOzIAR.jpg' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:title' content='Pokemon Database' />
          <meta property='twitter:description' content='TPDB - The Pokemon Database' />
          <meta property='twitter:image' content='https://i.imgur.com/mvOzIAR.jpg' />
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
