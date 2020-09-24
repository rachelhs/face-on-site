import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';

const FAQ = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>FAQ</TitleText></Title>
    <ParagraphText>
      <h2>link 1</h2>
      </ParagraphText>
    </Container>
  </Section>
);
export default FAQ;
