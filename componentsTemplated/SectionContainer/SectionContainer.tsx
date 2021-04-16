import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const ContentContainer = styled(Container).attrs({ maxWidth: 'md' })`
  padding: 2rem 0;
`;

type Props = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: Props): JSX.Element {
  return (
    <Container maxWidth={false}>
      <ContentContainer>
        <>{children}</>
      </ContentContainer>
    </Container>
  );
}
