import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import styled from 'styled-components';

const LinksSubSectionWrapper = styled.section`
  margin-bottom 2.5rem;
`;

const LinkWrapper = styled.p`
  line-height: 1.2;
`;

type Props = {
  resourceGroup: {
    subSection: string;
    links: {
      url: string;
      text: string;
    }[];
  };
};

export default function LinksSubSection({ resourceGroup }: Props): JSX.Element {
  return (
    <LinksSubSectionWrapper key={resourceGroup.subSection}>
      <Typography variant="h6" align="left">
        {resourceGroup.subSection}
      </Typography>
      {resourceGroup.links.map((link) => (
        <LinkWrapper>
          <Link href={link.url}>{link.text}</Link>
        </LinkWrapper>
      ))}
    </LinksSubSectionWrapper>
  );
}
