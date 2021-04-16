import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

const StyledHeading = withTheme(styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.palette.secondary.dark};
  color: ${(props) => props.theme.palette.secondary.contrastText};

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: 1.5rem;
  }
`);

type Props = {
  title: string;
  subtitle?: string;
};

export default function HeaderContrast({ title, subtitle }: Props): JSX.Element {
  return (
    <StyledHeading>
      <Typography variant="h4" color="textPrimary" align="left">
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary" align="left">
        {subtitle ?? ''}
      </Typography>
    </StyledHeading>
  );
}
