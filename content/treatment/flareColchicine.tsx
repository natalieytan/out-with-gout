import { managingFlareHeader } from './headers/managingFlare';
import { genericFlareInformation } from './information/genericFlareInformation';

const patientPDFLink = '/#';
const clinicianPDFLink = '/#';
const information = [
  {
    title: 'Managing a flare of gout with colchicine (Colgout, Lengout)',
    body: (
      <>
        <p>Colchicine tablets can be helpful in managing a flare of gout.</p>
        <p>Talk with your doctor if this is the best approach for you.</p>
      </>
    )
  },
  ...genericFlareInformation
];

export const flareColchicineContent = {
  headerText: managingFlareHeader,
  patientPDFLink,
  clinicianPDFLink,
  information
};
