import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';
import listStyles from './list.module.css';

const Disguises = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
      <Title><TitleText>DISGUISES</TitleText></Title>
      <br />
        <div className={listStyles.listContainer}><h3>https://reflect.tech/faceswap</h3></div>
        <div className={listStyles.listContainer}><h3>https://www.deepar.ai/demos</h3></div>
    </Container>
  </Section>
);

export default Disguises;
