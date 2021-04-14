import Link from '@material-ui/core/Link';

import { FooterContainer, FooterTitle, FooterLinksContainer } from './footer.style';
import { footerLinks } from '../../../content/layout/footerLinks';

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <FooterTitle>OUT WITH GOUT</FooterTitle>
      <FooterLinksContainer>
        {footerLinks.map((footerLink) => (
          <Link color="secondary" href={footerLink.link}>
            {footerLink.text}
          </Link>
        ))}
      </FooterLinksContainer>
    </FooterContainer>
  );
}
