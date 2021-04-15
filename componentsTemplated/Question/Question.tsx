import { Typography, Container } from '@material-ui/core';
import styled from 'styled-components';

const QuestionContainer = styled(Container).attrs({ maxWidth: 'md' })`
  text-align: center;
  padding: 1.5rem 0;
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
    <Container maxWidth={false}>
      <QuestionContainer>
        <Typography variant="h5">{title}</Typography>
        <QuestionBody>{children}</QuestionBody>
      </QuestionContainer>
    </Container>
  );
}
