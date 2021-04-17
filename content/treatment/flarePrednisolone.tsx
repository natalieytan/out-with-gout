import { managingFlareHeader } from './headers/managingFlare';
import { genericFlareInformation } from './information/genericFlareInformation';

const patientPDFLink = '/#';
const clinicianPDFLink = '/#';
const information = [
  {
    title: 'Managing a flare of gout with prednisolone tablets',
    body: (
      <>
        <p>
          Prednisolone tablets can be helpful in managing a flare of gout. Prednisolone can often be
          preferred in people with low kidney function or reasons to avoid other medications.
        </p>
        <p>Talk with your doctor if this is the best approach for you.</p>
      </>
    )
  },
  ...genericFlareInformation
];

export const flarePrednisoloneContent = {
  headerText: managingFlareHeader,
  patientPDFLink,
  clinicianPDFLink,
  information
};
