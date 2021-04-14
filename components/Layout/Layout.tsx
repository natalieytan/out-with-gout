import { ReactNode } from 'react';
import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Out With Gout" />
        <meta name="og:title" content="Out With Gout" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
