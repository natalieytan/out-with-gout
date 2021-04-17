import { Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

import SectionContainer from '../SectionContainer/SectionContainer';

const BackgroundCountainer = withTheme(styled.div`
  background: ${(props) => props.theme.palette.secondary.light};
`);

export const ButtonWrapper = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    margin-bottom: 1rem;
  }
  margin: 2rem 0rem;
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-direction: row;
    justify-content: center;
    & > a {
      margin-bottom: 0;
    }
    & > a:not(:last-child) {
      margin-right: 1rem;
    }
  }
`);

type Props = {
  patientInformationLink: string;
  clincianInformationLink: string;
};

export default function TreatmentPDFDownloadSection({
  patientInformationLink,
  clincianInformationLink
}: Props): JSX.Element {
  return (
    <BackgroundCountainer>
      <SectionContainer>
        <Typography variant="h5" color="textPrimary" align="center" gutterBottom paragraph>
          Download PDF handouts
        </Typography>
        <Typography variant="subtitle2" color="textPrimary" align="center" gutterBottom paragraph>
          Download patient or clinician information
        </Typography>
        <ButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={patientInformationLink}
            target="_blank"
          >
            Patient Information
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={clincianInformationLink}
            target="_blank"
          >
            Clinician Information
          </Button>
        </ButtonWrapper>
      </SectionContainer>
    </BackgroundCountainer>
  );
}
