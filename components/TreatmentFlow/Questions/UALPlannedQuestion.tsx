import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function UALPlannedQuestion({ yesHandler, noHandler }: Props): JSX.Element {
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
    <Question title="Has your doctor planned to start you on gout prevention medication?">
      <Typography variant="body1">
        Gout prevention medications are also known as uric acid lowering medications. These include
        allopurinol (Progout, Zyloprim), febuxostat (Adenuric) and probenacid (Pro-Cid)
      </Typography>
      <Typography variant="body1">
        If you are not sure of any questions, it can be helpful to go through the questions with
        your doctor or health professional
      </Typography>
      <AnswerBox answers={answers} />
    </Question>
  );
}
