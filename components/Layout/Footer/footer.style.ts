import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const FooterContainer = withTheme(styled('footer')`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 1.25rem 1rem;

  ${(props) => props.theme.breakpoints.up('md')} {
    align-items: center;
    justify-content: center;
  }
`);

export const FooterTitle = styled(Typography).attrs({ variant: 'h6', component: 'p' })`
  padding: 1rem 0rem;
`;

export const FooterLinksContainer = withTheme(styled('div')`
  display: flex;
  flex-direction: column;
  & > a {
    margin-bottom: 0.5rem;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-direction: row;
    & > a:not(:last-child) {
      margin-right: 1rem;
    }
  }
`);
