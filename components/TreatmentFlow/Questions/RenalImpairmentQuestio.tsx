import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function renalImpairmentQuestion({ yesHandler, noHandler }: Props): JSX.Element {
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
    <Question title="Do you have low kidney function?">
      <Typography variant="body1">
        Low kidney function can also be known as renal impairment or chronic kidney disease. Check
        with your doctor if you are not sure.
      </Typography>
      <AnswerBox answers={answers} />
    </Question>
  );
}
