import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout/Layout';
import { GlobalStyle } from '../styles/GlobalStyle';
import materialTheme from '../styles/materialTheme';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.gtagPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyle />
      <MaterialThemeProvider theme={materialTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MaterialThemeProvider>
    </>
  );
}
