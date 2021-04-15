import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { TREATMENT_PATH } from '../../constants/paths';
import { ImageWrapper, ContentWrapper, ButtonWrapper } from './landingHero.style';

export default function LandingHero(): JSX.Element {
  return (
    <ImageWrapper>
      <ContentWrapper>
        <Typography variant="h3" color="inherit" gutterBottom>
          Out with gout
        </Typography>
        <Typography variant="h6" color="inherit" gutterBottom>
          Gout can be painful, interfere with your life, <br /> and be a real nuisance.
        </Typography>
        <Typography variant="h6" color="inherit" gutterBottom>
          Here is some information to help.
        </Typography>
        <ButtonWrapper>
          <Button variant="contained" color="secondary" size="large" href="#">
            I want to diagnose gout
          </Button>
          <Button variant="contained" color="secondary" size="large" href={TREATMENT_PATH}>
            I want to treat gout
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </ImageWrapper>
  );
}
