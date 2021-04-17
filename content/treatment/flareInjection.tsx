import { managingFlareHeader } from './headers/managingFlare';
import { genericFlareInformation } from './information/genericFlareInformation';

const patientPDFLink = '/#';
const clinicianPDFLink = '/#';
const information = [
  {
    title: 'Managing a flare of gout with anti-inflammatory injections into your joint',
    body: (
      <>
        <p>
          Injections of anti-inflammatory medications like corticosteroids can be helpful in
          managing a flare of gout.
        </p>
        <p>
          This is generally preferred if you have one or two large joints involved and have access
          to a joint injection.
        </p>
      </>
    )
  },
  ...genericFlareInformation
];

export const flareInjectionContent = {
  headerText: managingFlareHeader,
  patientPDFLink,
  clinicianPDFLink,
  information
};
