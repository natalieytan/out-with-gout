import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function OnUALQuestion({ yesHandler, noHandler }: Props): JSX.Element {
  const answers = [
    {
      text: 'I am already on gout prevention medication',
      handler: yesHandler
    },
    {
      text: 'I am not on gout prevention medication',
      handler: noHandler
    }
  ];
  return (
    <Question title="Do you have a current flare of gout?">
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
