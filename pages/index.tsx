import Head from 'next/head';

import LandingHero from '../components/LandingHero/LandingHero';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Out with Gout</title>
      </Head>
      <LandingHero />
    </>
  );
}
