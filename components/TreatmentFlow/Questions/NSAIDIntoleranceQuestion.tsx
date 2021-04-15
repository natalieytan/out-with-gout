import styled from 'styled-components';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

const ListBox = styled.div`
  text-align: left;
  margin: 0 auto;
  display: inline-block;
`;

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function NSAIDIntoleranceQuestion({ yesHandler, noHandler }: Props): JSX.Element {
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
    <Question title="Do you have any of the following?">
      <ListBox>
        <ul>
          <li>A history of peptic ulcer</li>
          <li>Heart failure</li>
          <li>Difficult to control high blood pressure</li>
          <li>Chronic liver disease with scarring (Cirrhosis)</li>
          <li>Taking a blood thinning medication (anti-coagulants)</li>
          <li>Previous intolerance to non-steroidal anti-inflammatories (NSAIDs)</li>
        </ul>
      </ListBox>
      <AnswerBox answers={answers} />
    </Question>
  );
}
