import { managiningChronicGoutHeader } from './headers/managingChronicGout';
import { goutPreventionMedicationInfoBody } from './information/goutPreventionMedicationInfoBody';

const patientPDFLink = '/#';
const clinicianPDFLink = '/#';
const information = [
  {
    title: 'Lifestyle changes have a role in helping manage your gout',
    body: (
      <>
        <p>If you have gout it is helpful to:</p>
        <ul>
          <li>Limit alcohol intake</li>
          <li>Eat a balanced, healthy diet</li>
          <li>If you are overweight, aim for gradual weight reduction</li>
        </ul>
        <p>Speak with your doctor if you need help with these things</p>
      </>
    )
  },
  {
    title: 'Watch out for and manage flares when they happen',
    body: (
      <>
        <p>
          Know your management approach for when you have a flare of gout so you can quickly get on
          top of it.
        </p>
      </>
    )
  },
  {
    title: 'If you have more flares, think about if you need gout prevention medication',
    body: goutPreventionMedicationInfoBody
  }
];

export const UALNoIndicationContent = {
  headerText: managiningChronicGoutHeader,
  patientPDFLink,
  clinicianPDFLink,
  information
};
