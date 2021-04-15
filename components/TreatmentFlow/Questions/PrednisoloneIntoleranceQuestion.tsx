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

export default function PrednisoloneIntoleranceQuestion({
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
    <Question title="Do you have any of the following?">
      <ListBox>
        <ul>
          <li>Difficult to control diabetes mellitus</li>
          <li>Recent surgery (surgical wound still healing for example)</li>
          <li>Previous intolerance to prednisolone or another corticosteroid</li>
        </ul>
      </ListBox>
      <AnswerBox answers={answers} />
    </Question>
  );
}
