import { findingOutHeader } from './headers/findingOut';

const patientPDFLink = '/#';
const clinicianPDFLink = '/#';
const information = [
  {
    title: 'It is important to diagnose gout to be able to manage it well',
    body: (
      <>
        <p>
          There are some conditions that can also give you a red, hot, swollen and painful joint
          like infection or other crystals in your joint. Being sure it is gout helps to manage gout
          well.
        </p>
      </>
    )
  },
  {
    title: 'Gout is treatable',
    body: (
      <>
        <p>
          Gout is treatable with lifestyle changes, managing flares of gout when they happen and
          gout prevention medications if required.
        </p>
      </>
    )
  },
  {
    title: 'Gout is best diagnosed by getting fluid from your joint  to look at under a microscope',
    body: (
      <>
        <p>
          This is done by a procedure called a joint aspiration. While it can be difficult to get
          fluid from the joint sometimes, seeing the uric acid crystals of gout helps to be sure
          that you do have gout.
        </p>
      </>
    )
  }
];

export const getDiagnosedContent = {
  headerText: findingOutHeader,
  patientPDFLink,
  clinicianPDFLink,
  information
};
