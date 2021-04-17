import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

import SectionContainer from '../SectionContainer/SectionContainer';

const SubSectionWrapper = styled.section`
  margin-bottom 2.5rem;
`;

type TitledSubsectionProps = {
  title: string;
  children: React.ReactNode;
};

function TitledSubsection({ title, children }: TitledSubsectionProps): JSX.Element {
  return (
    <SubSectionWrapper>
      <Typography variant="h6" align="left">
        {title}
      </Typography>
      <>{children}</>
    </SubSectionWrapper>
  );
}

type Props = {
  informationList: {
    title: string;
    body: JSX.Element;
  }[];
  patientInformationLink: string;
  clincianInformationLink: string;
};

export default function TreatmentInformationSection({
  informationList,
  patientInformationLink,
  clincianInformationLink
}: Props): JSX.Element {
  return (
    <SectionContainer>
      {informationList.map((information) => (
        <TitledSubsection title={information.title} key={information.title}>
          {information.body}
        </TitledSubsection>
      ))}
      <TitledSubsection title="Please click below to download some more information:">
        <>
          <p>
            <Link href={patientInformationLink} target="_blank" color="textSecondary">
              Information for patients
            </Link>
          </p>
          <p>
            <Link href={clincianInformationLink} target="_blank" color="textSecondary">
              Information for health professionals
            </Link>
          </p>
        </>
      </TitledSubsection>
      <TitledSubsection title="More information">
        <>
          <p>Arthritis Australia have great resources with more information available from:</p>
          <p>
            <Link
              href="https://arthritisaustralia.com.au/types-of-arthritis/gout/"
              target="_blank"
              color="textSecondary"
            >
              https://arthritisaustralia.com.au/types-of-arthritis/gout/
            </Link>
          </p>
        </>
      </TitledSubsection>
    </SectionContainer>
  );
}
