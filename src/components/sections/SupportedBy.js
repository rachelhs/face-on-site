import React from 'react';
import logoStyles from './logo.module.css';
import { Section, Container, Title, TitleText } from '@components/global';
import aceLogo from '../../images/logos/lottery_Logo.png';
import swctnLogo from '../../images/logos/swctn.svg';
import pmsLogo from '../../images/logos/pmsLogo.png'

const SupportedBy = () => (
  <Section id="supportedBy">
    <Container style={{ position: 'relative' }}>
    <Title><TitleText>SUPPORTED BY</TitleText></Title>
    <a href="https://www.artscouncil.org.uk/"><img className={logoStyles.supportedLogo} src={aceLogo} alt="arts council logo"></img></a>
    <a href="https://www.swctn.org.uk/"><img className={logoStyles.supportedLogo} src={swctnLogo} alt="south west creative technology network logo"></img></a>
    <a href="https://www.watershed.co.uk/studio/"><img className={logoStyles.supportedLogoTall} src={pmsLogo} alt="pervasive media studio logo"></img></a>
    </Container>
  </Section>
);
export default SupportedBy;
