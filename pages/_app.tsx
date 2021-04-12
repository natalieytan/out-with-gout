import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
