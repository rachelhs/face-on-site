import React from 'react';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';
import listStyles from './list.module.css';
import arrow from '../../images/art/arrow.png';

const FAQContainer = () => (
  <Section id="FAQ">
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>FAQ</TitleText></Title>
    <ParagraphText>
    <div className={listStyles.listContainer}><img className={listStyles.arrow} src={arrow} alt="arrow"></img><a className={listStyles.text} href="/faq" target="_blank" rel="noopener noreferrer"><h3>Facial Recognition FAQ</h3></a></div>
    </ParagraphText>
    </Container>
  </Section>
);
export default FAQContainer;
