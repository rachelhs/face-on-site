import React from 'react';
import logoStyles from './logo.module.css';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';
import aceLogo from '../../images/logos/lottery_Logo.png';
import swctnLogo from '../../images/logos/swctn.svg';
import pmsLogo from '../../images/logos/pmsLogo.png'

const SupportedBy = () => (
  <Section id="supportedBy">
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>SUPPORTED BY</TitleText></Title>
    <a href="https://www.artscouncil.org.uk/" target="_blank" rel="noopener noreferrer"><img className={logoStyles.supportedLogo} src={aceLogo} alt="arts council logo"></img></a>
    <a href="https://www.swctn.org.uk/" target="_blank" rel="noopener noreferrer"><img className={logoStyles.supportedLogo} src={swctnLogo} alt="south west creative technology network logo"></img></a>
    <a href="https://www.watershed.co.uk/studio/" target="_blank" rel="noopener noreferrer"><img className={logoStyles.supportedLogoTall} src={pmsLogo} alt="pervasive media studio logo"></img></a>
    <ParagraphText><h4>Visual Design for Face / On has been develop with <a href="https://copa-ipa.de/" target="_blank" rel="noopener noreferrer">Copa Ipa. </a>Metalwork by Tom Cherry. Produced with support from <a href="https://www.control-shift.network/index.html" target="_blank" rel="noopener noreferrer">Control Shift</a>. Thank you to Ruby Soho for lending your workshop and Professor Andrew Charlesworth for sharing your knowledge and ideas around facial recognition.</h4></ParagraphText>
    </Container>
  </Section>
);
export default SupportedBy;
