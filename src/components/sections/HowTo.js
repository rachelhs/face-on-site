import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText } from '@components/global';

const HowTo = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>HOW TO</TitleText></Title>
<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec augue non nisi porttitor dictum. Nulla quis turpis justo. Nullam tempor sed est nec hendrerit. Pellentesque nec velit elementum, lacinia elit id, tempor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim nunc, sagittis sit amet placerat vitae.</h2>
    </Container>
  </Section>
);
export default HowTo;
