import { Fragment, useEffect, useState } from "react";
import { Loader } from "../styles/GlobalComponents";
import { AppProps } from "next/app";
import Theme from "../styles/theme";
import Head from "next/head";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);

    setTimeout(() => {
      setIsloading(false);
    }, 1750);
  }, [router.asPath]);

  return (
    <Fragment>
      <Head>
        <title>Pokemon Database</title>
      </Head>

      <Theme>
        {loading ? (
          <Loader>
            <div className='loadingAnimation' />
          </Loader>
        ) : (
          <Component {...pageProps} />
        )}
      </Theme>
    </Fragment>
  );
}
