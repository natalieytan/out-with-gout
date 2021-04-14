import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import React from 'react';

import Layout from '../components/Layout/Layout';
import { GlobalStyle } from '../styles/GlobalStyle';
import materialTheme from '../styles/materialTheme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

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
