import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

const ButtonWrapper = withTheme(styled.div`
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    width: 80%;
    margin-bottom: 1.5rem;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    & > button {
      width: 40%;
    }
  }
`);

type Props = {
  answers: AnswerOption[];
};

type AnswerOption = {
  text: string;
  handler: () => void;
  disabled?: boolean;
};

export default function AnswerBox(props: Props): JSX.Element {
  const { answers } = props;

  return (
    <ButtonWrapper>
      {answers.map((answer) => (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={answer.handler}
          disabled={answer.disabled}
          key={answer.text}
        >
          {answer.text}
        </Button>
      ))}
    </ButtonWrapper>
  );
}
