import React from 'react';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';
import listStyles from './list.module.css';
import arrow from '../../images/art/arrow.png';

const ResultsContainer = () => (
  <Section id="ResultsContainer">
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>Results</TitleText></Title>
    <ParagraphText>
    <div className={listStyles.listContainer}><img className={listStyles.arrow} src={arrow} alt="arrow"></img><a className={listStyles.text} href="/face-on-results" target="_blank" rel="noopener noreferrer"><h3>Take a look at some attempts to make it through the door</h3></a></div>
    </ParagraphText>
    </Container>
  </Section>
);
export default ResultsContainer;