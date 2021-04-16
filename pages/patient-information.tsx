import Head from 'next/head';

import HeaderContrast from '../componentsTemplated/HeaderContrast/HeaderContrast';
import PatientInformationSection from '../components/PatientInformationSection/PatientInformationSection';

export default function PrivaPatientInformation(): JSX.Element {
  return (
    <>
      <Head>
        <title>Out with Gout - Patient information handouts</title>
      </Head>
      <HeaderContrast
        title="Patient information handouts"
        subtitle="Here is some information to help manage your gout"
      />
      <PatientInformationSection />
    </>
  );
}
