import { Typography, Container } from '@material-ui/core';
import styled from 'styled-components';

const OuterContainer = styled.div`
  min-height: 550px;
  padding: 4rem 0;
  width: 100%;
`;

const QuestionContainer = styled(Container).attrs({ maxWidth: 'md' })`
  text-align: center;
`;

const QuestionBody = styled.div`
  padding: 1rem 0;
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Question(props: Props): JSX.Element {
  const { title, children } = props;

  return (
    <OuterContainer>
      <QuestionContainer>
        <Typography variant="h5">{title}</Typography>
        <QuestionBody>{children}</QuestionBody>
      </QuestionContainer>
    </OuterContainer>
  );
}
