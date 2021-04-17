import { DIAGNOSED_YES, DIAGNOSED_NO } from '../../constants/tracking/treatmentAnswer';

export const diagnosedOrNotContent = {
  title: 'Have you been formally diagnosed with gout by a qualified medical practicioner?',
  body: <p>Check with your doctor if you are not sure.</p>,
  yesText: 'Yes',
  yesTrackingString: DIAGNOSED_YES,
  noText: 'No',
  noTrackingString: DIAGNOSED_NO
};
