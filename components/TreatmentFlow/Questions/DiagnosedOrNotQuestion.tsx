import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';
import { DIAGNOSED_YES } from '../../../constants/tracking/treatmentAnswer';

type Props = {
  yesHandler: (eventName: string) => void;
  noHandler: () => void;
};

export default function DiganosedOrNotQuestion({ yesHandler, noHandler }: Props): JSX.Element {
  const answers = [
    {
      text: 'Yes',
      handler: () => yesHandler(DIAGNOSED_YES)
    },
    {
      text: 'No',
      handler: noHandler
    }
  ];
  return (
    <Question title="Have you been formally diagnosed with gout by a qualified medical practicioner?">
      <Typography variant="body1">Check with your doctor if you are not sure.</Typography>
      <AnswerBox answers={answers} />
    </Question>
  );
}
