import React from 'react';
import { Section, Title, TitleText, Container, ParagraphText } from '@components/global';

const About = () => (
  <Section id="about">
    <Container>
    <Title><TitleText>ABOUT</TitleText></Title>
      <ParagraphText><h2>How do AI systems decide on personal labels such as age and gender based on looks alone? Face / On is an interactive installation that explores what systems see. It takes the form of a closed door embedded with a facial recognition system. Face/On is a gatekeeper deciding on who looks like they fit its criteria, and who will be permitted entry past the threshold. It may be necessary to adopt a disguise to fool the system.
      </h2></ParagraphText>
    </Container>
  </Section>
);
export default About;
