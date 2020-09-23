import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import partnerStyles from './partners.module.css';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as SwctnLogo } from '@images/logos/swctn.svg';
import { ReactComponent as EdenLogo } from '@images/logos/eden-project.svg';
import { ReactComponent as BathLogo } from '@images/logos/bath-spa.svg';

const LOGOS = [
  {
    logo: SwctnLogo,
    link: 'https://swctn.org.uk/',
  },
  {
    logo: EdenLogo,
    link: 'https://www.edenproject.com/',
  },
  {
    logo: BathLogo,
    link: 'https://www.bathspa.ac.uk/',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section className={partnerStyles.section} id="partners" accent="dark">
        <StyledContainer>
          <div>
            <p className={partnerStyles.subTitle}>supported by:</p>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 0px;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  margin-bottom: -40px;
  margin-top: -40px;

  a {
    svg {
      width: 50%;
      height: 50%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: 0px;
    margin-top: 0px;
    a {
      svg {
        width: 80%;
        height: 80%;
      }
    }
    grid-template-columns: 2fr 2fr 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default UsedBy;
