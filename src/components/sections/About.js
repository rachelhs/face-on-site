import React from 'react';
import { FirstSection, Title, TitleText, FirstContainer, ParagraphText } from '@components/global';

import resultsStyles from './results.module.css';

const About = () => (
  <FirstSection id="about">
    <FirstContainer>
      <Title><TitleText>ABOUT</TitleText></Title>
      <ParagraphText><h2>How do AI systems decide on personal labels such as age and gender based on looks alone? Face / On is an interactive installation that explores what systems see. It takes the form of a closed door embedded with a facial recognition system. Face/On is a gatekeeper deciding on who looks like they fit its criteria, and who will be permitted entry past the threshold. It may be necessary to adopt a disguise to fool the system.
      </h2></ParagraphText>
      <iframe className={resultsStyles.resultsImage + ' ' + resultsStyles.videoAbout} width="800" height="480" src="https://www.youtube.com/embed/SyXWody2rSQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </FirstContainer>
  </FirstSection>
);
export default About;
