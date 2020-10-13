import React from 'react';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';

const PrivacyStatement = () => (
  <Section id="howTo">
    <Container style={{ position: 'relative' }}>
      <Title><TitleText>PRIVACY</TitleText></Title>
      <ParagraphText>
        <h2>Face / On takes a picture every few seconds and stores it locally. Images are sent to Microsoft Azure Face API for analysis. No pictures will be used without permission.</h2>
      </ParagraphText>
    </Container>
  </Section>
);
export default PrivacyStatement;
