import Head from 'next/head';

import HeaderContrast from '../componentsTemplated/HeaderContrast/HeaderContrast';
import DisclaimerSection from '../components/DisclaimerSection/DisclaimerSection';

export default function Disclaimer(): JSX.Element {
  return (
    <>
      <Head>
        <title>Out with Gout - Disclaimer </title>
      </Head>
      <HeaderContrast title="Disclaimer" subtitle="Out with gout's disclaimer information" />
      <DisclaimerSection />
    </>
  );
}
