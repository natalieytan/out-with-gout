import Head from 'next/head';

import HeaderContrast from '../componentsTemplated/HeaderContrast/HeaderContrast';
import ClinicianResourcesSection from '../components/ClinicianResourcesSection/ClincianResourcesSection';

export default function ClinicianResources(): JSX.Element {
  return (
    <>
      <Head>
        <title>Out with Gout - Patient information handouts</title>
      </Head>
      <HeaderContrast
        title="Clinician resources"
        subtitle="Here are some resources for clinicians"
      />
      <ClinicianResourcesSection />
    </>
  );
}
