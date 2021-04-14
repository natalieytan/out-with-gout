import { ReactNode } from 'react';
import Head from 'next/head';

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
      <main>{children}</main>
    </div>
  );
}
