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
    <Question title="How many joints are affected?">
      <div>
        <Typography variant="body1">
          If you are not sure of any questions, it can be helpful to go through the questions with
          your doctor or health professional.
        </Typography>
      </div>
      <AnswerBox answers={answers} />
    </Question>
  );
}
