import { Typography } from '@material-ui/core';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function InjectionPreferedQuestion({ yesHandler, noHandler }: Props): JSX.Element {
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
    <Question title="Do you have access to, and would you prefer to have an anti-inflammatory injection into your joint?">
      <Typography variant="body1">
        Not all doctors can perform injections into joints and there can be delays as well as out of
        pocket costs involved. Joint injections can only be performed for large joints like a knee,
        ankle, wrist or elbow
      </Typography>
      <Typography variant="body1">
        Joint injections can only be performed for large joints like a knee, ankle, wrist or elbow
      </Typography>
      <AnswerBox answers={answers} />
    </Question>
  );
}
