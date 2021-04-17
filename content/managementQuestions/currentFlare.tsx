import { CURRENT_FLARE_NO, CURRENT_FLARE_YES } from '../../constants/tracking/treatmentAnswer';

export const currentFlareContent = {
  title: 'Do you have a current flare of gout?',
  body: (
    <p>
      If you are not sure of any questions, it can be helpful to go through the questions with your
      doctor or health professional
    </p>
  ),
  yesText: 'I currently have a flare of gout',
  yesTrackingString: CURRENT_FLARE_YES,
  noText: 'I have gout but do not currently have a flare',
  noTrackingString: CURRENT_FLARE_NO
};
