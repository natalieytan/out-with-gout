import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

export const ImageWrapper = styled.div`
  width: 100%;
  background-image: url('/images/landing-background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
`;

export const ContentWrapper = withTheme(styled.div`
  margin: 0 auto;
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme.palette.primary.contrastText};
  ${(props) => props.theme.breakpoints.up('md')} {
    text-align: center;
    max-width: 800px;
  }
`);

export const ButtonWrapper = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    margin-bottom: 1rem;
  }
  align-items: flex-start;
  margin: 2rem 0rem;
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-direction: row;
    justify-content: center;
    & > a:not(:last-child) {
      margin-right: 1rem;
    }
  }
`);
