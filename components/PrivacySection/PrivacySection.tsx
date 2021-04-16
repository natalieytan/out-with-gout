import Typography from '@material-ui/core/Typography';

import SectionContainer from '../../componentsTemplated/SectionContainer/SectionContainer';
import { privacy } from '../../content/privacy';

export default function PrivacySection(): JSX.Element {
  return (
    <SectionContainer>
      <Typography variant="h5" color="textPrimary" align="center" gutterBottom paragraph>
        {privacy.title}
      </Typography>
      <Typography variant="body1" color="textPrimary" align="left" component="div">
        {privacy.body}
      </Typography>
    </SectionContainer>
  );
}
