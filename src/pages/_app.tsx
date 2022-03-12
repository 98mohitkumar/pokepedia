import type { AppProps } from "next/app";
import { useEffect, useLayoutEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { Loader } from "../styles/GlobalComponents";
import theme from "../theme/default";

export type ThemeType = typeof theme;

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setIsloading] = useState(false);

  useLayoutEffect(() => {
    setIsloading(true);
  }, [router.asPath]);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1500);
  }, [router.asPath]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {loading && (
        <Loader>
          <div className="loadingAnimation"></div>
        </Loader>
      )}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
