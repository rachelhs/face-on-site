import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText } from '@components/global';

const FAQ = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>FAQ</TitleText></Title>
      <h2>link 1</h2>
    </Container>
  </Section>
);
export default FAQ;
