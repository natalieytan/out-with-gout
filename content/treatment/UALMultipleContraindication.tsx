import { managiningChronicGoutHeader } from './headers/managingChronicGout';
import { genericChronicGoutManagementInformation } from './information/genericChronicGoutManagementInformation';

const patientPDFLink = '/#';
const clinicianPDFLink = '/#';
const information = [
  {
    title: 'Managing gout with gout prevention medication',
    body: (
      <>
        <p>Managing gout with gout prevention medication</p>
        <p>Talk with your doctor if this is the best approach for you.</p>
      </>
    )
  },
  ...genericChronicGoutManagementInformation
];

export const UALMultipleContraindicationContent = {
  headerText: managiningChronicGoutHeader,
  patientPDFLink,
  clinicianPDFLink,
  information
};
