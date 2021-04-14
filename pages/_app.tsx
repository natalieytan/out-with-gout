import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';

import Layout from '../components/Layout/Layout';
import { GlobalStyle } from '../styles/GlobalStyle';
import materialTheme from '../styles/materialTheme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
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
