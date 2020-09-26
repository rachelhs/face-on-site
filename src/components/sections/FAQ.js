import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';
import listStyles from './list.module.css';

const FAQ = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>FAQ</TitleText></Title>
    <ParagraphText>
    <div className={listStyles.listContainer}><h3>Link to FAQ</h3></div>
    </ParagraphText>
    </Container>
  </Section>
);
export default FAQ;
