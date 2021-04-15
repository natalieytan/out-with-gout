import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function ColchicineIntoleranceQuestion({
  yesHandler,
  noHandler
}: Props): JSX.Element {
  const answers = [
    {
      text: 'Yes',
      handler: yesHandler
    },
    {
      text: 'No',
      handler: noHandler
    }
  ];
  return (
    <Question title="Have you had a previous intolerance to colchicine (Colgout or Lengout)?">
      <Typography variant="body1">Check with your doctor if you are not sure.</Typography>
      <AnswerBox answers={answers} />
    </Question>
  );
}
