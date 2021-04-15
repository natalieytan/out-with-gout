import Head from 'next/head';

import TreatmentFlow from '../components/TreatmentFlow/TreatmentFlow';

export default function Treatment(): JSX.Element {
  return (
    <>
      <Head>
        <title>Out with Gout</title>
      </Head>
      <TreatmentFlow />
    </>
  );
}
