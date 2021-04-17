import { managingFlareHeader } from './headers/managingFlare';
import { genericFlareInformation } from './information/genericFlareInformation';

const patientPDFLink = '/#';
const clinicianPDFLink = '/#';
const information = [
  {
    title: 'Managing a flare of gout when there are several medications to avoid',
    body: (
      <>
        <p>
          Sometimes it can be difficult to find the right medication to help with your flare of
          gout. Usually a safe and effective management plan can be found.
        </p>
        <p>Talk with your doctor if this is the best approach for you.</p>
      </>
    )
  },
  ...genericFlareInformation
];

export const flareMultipleContraIndicationContent = {
  headerText: managingFlareHeader,
  patientPDFLink,
  clinicianPDFLink,
  information
};
