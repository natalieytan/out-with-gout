import { Typography, Container } from '@material-ui/core';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

const OuterContainer = withTheme(styled.div`
  padding: 1.5rem 0;
  width: 100%;

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: 2.5rem 0;
  }
`);

const QuestionContainer = styled(Container).attrs({ maxWidth: 'md' })`
  text-align: center;
`;

const QuestionBody = styled.div`
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: space-between;
  align-items: space-between;
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
