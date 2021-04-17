import { goutPreventionMedicationInfoBody } from './goutPreventionMedicationInfoBody';

export const genericChronicGoutManagementInformation = [
  {
    title: 'If you have had problems with gout before, often gout prevention medications are used',
    body: goutPreventionMedicationInfoBody
  },
  {
    title: 'Gout prevention medications need to be adjusted regularly',
    body: (
      <>
        <p>
          Using gout prevention medication to lower your uric acid level to a target is the best
          approach.
        </p>
        <p>Target uric acid levels are:</p>
        <ul>
          <li> &lt; 0.36mmol/L for most people</li>
          <li> &lt; 0.30mmol/L for people with tophi or evidence of joint damage due to gout</li>
        </ul>

        <p>
          When starting, regular checking of your uric acid level and adjustment of your medications
          is required:
        </p>
      </>
    )
  },
  {
    title: 'Medications are used to help prevent flares when starting gout prevention medications',
    body: (
      <>
        <p>
          Quick changes in your uric acid levels when starting gout prevention medications can
          result in a flare.
        </p>
        <p>
          Prednisolone can be helpful in preventng flares while starting gout prevention medications
        </p>
        <p>Speak with your doctor if these apply to you</p>
      </>
    )
  }
];
