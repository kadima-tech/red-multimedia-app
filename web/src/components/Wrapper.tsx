import styled from 'styled-components';

import {
  Container,
  ContentBoxContainerPrimary,
  ContentBoxContainerSecondary,
} from './Container';
import Theme from './themes/defaultTheme';
import { Footer } from './Footer';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledLandingSection = styled.div`
  width: 100%;
`;

export const Wrapper = ({
  landingSection,
  landingContent,
  contentBoxPrimary,
  contentBoxPrimaryExtra,
  contentBoxSecondary,
}: {
  children?: (JSX.Element | JSX.Element)[];
  landingContent?: JSX.Element | JSX.Element[];
  landingSection?: JSX.Element | JSX.Element[];
  contentBoxPrimary?: JSX.Element | JSX.Element[];
  contentBoxPrimaryExtra?: JSX.Element | JSX.Element[];
  contentBoxSecondary?: JSX.Element | JSX.Element[];
  headerImage?: boolean;
}) => (
  <Theme>
    {landingSection && (
      <StyledLandingSection>{landingSection}</StyledLandingSection>
    )}

    <Main>
      {landingContent ? landingContent : ''}
      <Container>
        <ContentBoxContainerPrimary>
          {contentBoxPrimary}
        </ContentBoxContainerPrimary>
        <ContentBoxContainerPrimary>
          {contentBoxPrimaryExtra}
        </ContentBoxContainerPrimary>
        {contentBoxSecondary && (
          <ContentBoxContainerSecondary>
            {contentBoxSecondary}
          </ContentBoxContainerSecondary>
        )}
      </Container>
    </Main>
    <Footer />
  </Theme>
);
