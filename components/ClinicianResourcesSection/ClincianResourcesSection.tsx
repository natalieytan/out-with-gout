import SectionContainer from '../../componentsTemplated/SectionContainer/SectionContainer';
import LinksSubSection from '../../componentsTemplated/LinksSubsection/LinksSubSection';
import { clinicianResources } from '../../content/clinicianResources';

export default function ClinicianResourcesSection(): JSX.Element {
  return (
    <SectionContainer>
      {clinicianResources.map((resourceGroup) => (
        <LinksSubSection resourceGroup={resourceGroup} key={resourceGroup.subSection} />
      ))}
    </SectionContainer>
  );
}
