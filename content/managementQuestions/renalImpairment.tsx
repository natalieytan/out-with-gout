import {
  RENAL_IMPAIRMENT_NO,
  RENAL_IMPAIRMENT_YES
} from '../../constants/tracking/treatmentAnswer';

export const renalImpairmentContent = {
  title: 'Do you have low kidney function?',
  body: (
    <p>
      Low kidney function can also be known as renal impairment or chronic kidney disease. Check
      with your doctor if you are not sure.
    </p>
  ),
  yesText: 'Yes',
  yesTrackingString: RENAL_IMPAIRMENT_YES,
  noText: 'No',
  noTrackingString: RENAL_IMPAIRMENT_NO
};
