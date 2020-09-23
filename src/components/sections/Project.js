import React from 'react';
import styled from 'styled-components';
import projectStyles from './project.module.css';

import { Section, Container } from '@components/global';

import TextScroll from '../common/TextScroll';

const Project = () => (
  <Section className={projectStyles.sectionTop} id="project" accent="light">
    <Container>
      <Grid>
        <div>
        <h1>Our aim is to promote a more sustainable future for the Internet or ‘The Cloud’</h1>
        
        <TextScroll text={<p className={projectStyles.info}>
        The Cloud has helped us gain a better understanding of the world around us. However, as we have increased our use of the Internet the energy demands have become much greater, leading to The Cloud becoming a significant contributor to climate change. Using terms like The Cloud helps us to imagine the way data travels around the world - yet, it does not tell us about the physical nature of the Internet, its location, and the amount of energy it uses.
        </p>}></TextScroll>     
          <TextScroll text={<p className={projectStyles.info}>We believe that the Internet can be completely sustainable, and many companies are working towards this goal. The aim of this project is to educate people about the technologies behind the internet and raise awareness of the energy required to power our digital lives.</p>}></TextScroll>
          <TextScroll text={<p className={projectStyles.info}>
            We must help children to better understand the technologies they are growing up with and help to make the world a greener place for their future. We are working on an augmented childrens book, co-designed with young people, to educate people on this issue and inspire them to get involved in technology and make change. 
        </p>}></TextScroll>
          </div>
      </Grid>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  text-align: justify;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Project;
