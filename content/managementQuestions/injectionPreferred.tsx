import {
  INJECTION_PREFERRED_NO,
  INJECTION_PREFERRED_YES
} from '../../constants/tracking/treatmentAnswer';

export const injectionPreferredContent = {
  title:
    'Do you have access to, and would you prefer to have an anti-inflammatory injection into your joint?',
  body: (
    <>
      <p>
        Not all doctors can perform injections into joints and there can be delays as well as out of
        pocket costs involved. Joint injections can only be performed for large joints like a knee,
        ankle, wrist or elbow
      </p>
      <p>
        Joint injections can only be performed for large joints like a knee, ankle, wrist or elbow
      </p>
    </>
  ),
  yesText: 'Yes',
  yesTrackingString: INJECTION_PREFERRED_YES,
  noText: 'No',
  noTrackingString: INJECTION_PREFERRED_NO
};
