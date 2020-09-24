import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText } from '@components/global';

const SupportedBy = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>SUPPORTED BY</TitleText></Title>
      <h1>logo 1</h1>
      <h1>logo 2</h1>
      <h1>logo 3</h1>
    </Container>
  </Section>
);
export default SupportedBy;
