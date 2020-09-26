import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';
import listStyles from './list.module.css';

const HowTo = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
      <Title><TitleText>HOW TO</TitleText></Title>
      <ParagraphText><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec augue non nisi porttitor dictum. Nulla quis turpis justo. Nullam tempor sed est nec hendrerit. Pellentesque nec velit elementum, lacinia elit id, tempor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim nunc, sagittis sit amet placerat vitae.</h2></ParagraphText>
      <br />
      <div className={listStyles.listContainer}><h3>Approach the door</h3></div>
      <div className={listStyles.listContainer}><h3>You will be allocated an age and gender</h3></div>
      <div className={listStyles.listContainer}><h3>Only this persona is allowed through; a disguise may be necessary</h3></div>
      <div className={listStyles.listContainer}><h3>The decisions are made by an AI. Where are the boundaries?</h3></div>
      <div className={listStyles.listContainer}><h3>Use the available means to change your face</h3></div>
    </Container>
  </Section>
);
export default HowTo;
