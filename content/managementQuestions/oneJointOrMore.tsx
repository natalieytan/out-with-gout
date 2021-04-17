import {
  JOINTS_AFFECTED_MULTI,
  JOINTS_AFFECTED_ONE
} from '../../constants/tracking/treatmentAnswer';

export const oneJointOrMoreContent = {
  title: 'How many joints are affected?',
  body: (
    <p>
      If you are not sure of any questions, it can be helpful to go through the questions with your
      doctor or health professional.
    </p>
  ),
  yesText: 'I have one joint affected',
  yesTrackingString: JOINTS_AFFECTED_ONE,
  noText: 'I have more than one joint affected',
  noTrackingString: JOINTS_AFFECTED_MULTI
};
