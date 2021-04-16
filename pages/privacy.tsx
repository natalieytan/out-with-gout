import Head from 'next/head';

import HeaderContrast from '../componentsTemplated/HeaderContrast/HeaderContrast';
import PrivacySection from '../components/PrivacySection/PrivacySection';

export default function Privacy(): JSX.Element {
  return (
    <>
      <Head>
        <title>Out with Gout - Privacy </title>
      </Head>
      <HeaderContrast title="Privacy" subtitle="Out with gout's privacy information" />
      <PrivacySection />
    </>
  );
}
