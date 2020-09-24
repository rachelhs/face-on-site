import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText } from '@components/global';

const Disguises = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>DISGUISES</TitleText></Title>
      <h2>link 1</h2>
      <h2>link 2</h2>
      <h2>link 3</h2>
    </Container>
  </Section>
);
export default Disguises;
