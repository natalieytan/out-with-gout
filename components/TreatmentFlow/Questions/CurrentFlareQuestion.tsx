import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';
import { gtagEvent } from '../../../lib/gtag';

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function CurrentFlareQuestion({ yesHandler, noHandler }: Props): JSX.Element {
  function yesHandlerWithTracking() {
    gtagEvent({
      action: 'current_flare_yes',
      category: 'Treatment Questions',
      label: 'test label'
    });
    yesHandler();
  }

  const answers = [
    {
      text: 'I currently have a flare of gout',
      handler: yesHandlerWithTracking
    },
    {
      text: 'I have gout but do not currently have a flare',
      handler: noHandler
    }
  ];
  return (
    <Question title="Do you have a current flare of gout?">
      <Typography variant="body1">
        If you are not sure of any questions, it can be helpful to go through the questions with
        your doctor or health professional
      </Typography>
      <AnswerBox answers={answers} />
    </Question>
  );
}
