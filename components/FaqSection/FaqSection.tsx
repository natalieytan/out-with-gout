import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

import { faqs } from '../../content/faqs';

const FaqsContentContainer = styled(Container).attrs({ maxWidth: 'md' })`
  padding: 2rem 0;
`;

const FaqTextWrapper = styled.div`
  padding: 1rem 0;
`;

export default function FaqSection(): JSX.Element {
  return (
    <Container maxWidth={false}>
      <FaqsContentContainer>
        <Typography variant="h5" color="textPrimary" align="center">
          Frequently asked questions about gout
        </Typography>

        {faqs.map((faq, i) => (
          <div key={i}>
            <FaqTextWrapper>
              <Typography variant="h6" color="textSecondary">
                {faq.heading}
              </Typography>
              {faq.text}
            </FaqTextWrapper>
            <Divider />
          </div>
        ))}
      </FaqsContentContainer>
    </Container>
  );
}
