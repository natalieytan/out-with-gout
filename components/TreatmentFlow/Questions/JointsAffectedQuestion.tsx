import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  oneJointHandler: () => void;
  multiJointHandler: () => void;
};

export default function JointsAffectedQuestion({
  oneJointHandler,
  multiJointHandler
}: Props): JSX.Element {
  const answers = [
    {
      text: 'I have one joint affected',
      handler: oneJointHandler
    },
    {
      text: 'I have more than one joint affected',
      handler: multiJointHandler
    }
  ];
  return (
    <Question title="Have you had a previous intolerance to colchicine (Colgout or Lengout)?">
      <Typography variant="body1">Check with your doctor if you are not sure.</Typography>
      <AnswerBox answers={answers} />
    </Question>
  );
}
