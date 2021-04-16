import SectionContainer from '../../componentsTemplated/SectionContainer/SectionContainer';
import LinksSubSection from '../../componentsTemplated/LinksSubsection/LinksSubSection';
import { patientInformation } from '../../content/patientInformation';

export default function PatientInformationSection(): JSX.Element {
  return (
    <SectionContainer>
      {patientInformation.map((resourceGroup) => (
        <LinksSubSection resourceGroup={resourceGroup} key={resourceGroup.subSection} />
      ))}
    </SectionContainer>
  );
}
