import {
  COLCHICINE_INTOLERANCE_NO,
  COLCHICINE_INTOLERANCE_YES
} from '../../constants/tracking/treatmentAnswer';

export const colchicineIntoleranceContent = {
  title: 'Have you had a previous intolerance to colchicine (Colgout or Lengout)?',
  body: <p>Check with your doctor if you are not sure.</p>,
  yesText: 'Yes',
  yesTrackingString: COLCHICINE_INTOLERANCE_YES,
  noText: 'No',
  noTrackingString: COLCHICINE_INTOLERANCE_NO
};
