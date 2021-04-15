import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
  children?: ReactNode;
};

const Main = styled.div`
  min-height: 85vh;
`;
export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Out With Gout" />
        <meta name="og:title" content="Out With Gout" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
