import Typography from '@material-ui/core/Typography';

import SectionContainer from '../../componentsTemplated/SectionContainer/SectionContainer';
import { disclaimer } from '../../content/disclaimer';

export default function DisclaimerSection(): JSX.Element {
  return (
    <SectionContainer>
      <Typography variant="h5" color="textPrimary" align="center" gutterBottom paragraph>
        {disclaimer.title}
      </Typography>
      <Typography variant="body1" color="textPrimary" align="left" component="div">
        {disclaimer.body}
      </Typography>
    </SectionContainer>
  );
}
