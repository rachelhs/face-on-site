import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <StyledContainer>
    </StyledContainer>
  </FooterWrapper>
);

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 90%;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 90%;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 95%;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colour.blue.dark};
  padding: 32px 0;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 15px 0;
  }
`;

const StyledContainer = styled(Container)`
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
