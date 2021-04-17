import HeaderContrast from '../../../componentsTemplated/HeaderContrast/HeaderContrast';
import TreatmentInformationSection from '../../../componentsTemplated/TreatmentInformationSection/TreatmentInformationSection';
import TreatmentPDFDownloadSection from '../../../componentsTemplated/TreatmentPDFDownloadSection/TreatmentPDFDownloadSection';

type Props = {
  content: {
    headerText: {
      title: string;
      subtitle: string;
      caption: string;
    };
    patientPDFLink: string;
    clinicianPDFLink: string;
    information: {
      title: string;
      body: JSX.Element;
    }[];
  };
};
export default function TreatmentResult({ content }: Props): JSX.Element {
  return (
    <>
      <HeaderContrast
        title={content.headerText.title}
        subtitle={content.headerText.subtitle}
        caption={content.headerText.caption}
      />
      <TreatmentPDFDownloadSection
        patientInformationLink={content.patientPDFLink}
        clincianInformationLink={content.clinicianPDFLink}
      />
      <TreatmentInformationSection
        informationList={content.information}
        patientInformationLink={content.patientPDFLink}
        clincianInformationLink={content.clinicianPDFLink}
      />
    </>
  );
}
