import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '@components/global';

import UncontrolledLottie from '@components/sections/UncontrolledLottie';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "lftc-header" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <SectionWrapper id="header" >
      <HeaderWrapper>
        <Container>
        <Art>
          <UncontrolledLottie />
        </Art>
        </Container>
      </HeaderWrapper>
      <Arrow>&#x2193;</Arrow>
      </SectionWrapper>
    )}
  />
);

const Arrow = styled.header`
  color: white;
  font-size: 30px;
  text-align: center;
  height: 40px;
`;

const SectionWrapper = styled.header`
  background-color: ${props => props.theme.colour.blue.dark};
  padding-bottom: 15px;
  `;

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colour.blue.dark};
  height: calc(100vh - 55px);
  padding-top: 75px; /* to accommodate fixed navigation */
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    height: calc(100vh - 130px);
    }
  `;

const Art = styled.figure`
display: flex;
align-items: center;
justify-content: center;
  path{
    stroke: white;
    fill: white;
  }
  width: 100%;
  margin: auto;
  > div {
    width: 70%;
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

export default Header;