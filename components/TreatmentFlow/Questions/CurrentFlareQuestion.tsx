import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';
import { CURRENT_FLARE_NO, CURRENT_FLARE_YES } from '../../../constants/tracking/treatmentAnswer';

type Props = {
  yesHandler: (eventName: string) => void;
  noHandler: (eventName: string) => void;
};

export default function CurrentFlareQuestion({ yesHandler, noHandler }: Props): JSX.Element {
  const answers = [
    {
      text: 'I currently have a flare of gout',
      handler: () => yesHandler(CURRENT_FLARE_YES)
    },
    {
      text: 'I have gout but do not currently have a flare',
      handler: () => noHandler(CURRENT_FLARE_NO)
    }
  ];
  return (
    <Question title="Do you have a current flare of gout?">
      <div>
        <Typography variant="body1">
          If you are not sure of any questions, it can be helpful to go through the questions with
          your doctor or health professional
        </Typography>
      </div>
      <AnswerBox answers={answers} />
    </Question>
  );
}
