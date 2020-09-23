import React from 'react';
import styled from 'styled-components';
import contactStyles from './contact.module.css';

import { Section, Container } from '@components/global';

const Contact = () => (
  <Section id="contact">
    <Container>
      <Grid>
        <div>
          <h1 className={contactStyles.title}>Get in touch</h1>
          <p> If you would like to get in touch or if you have any questions about this project we'd love to hear from you.</p>
          <p>Please contact us by emailing <a className={contactStyles.link} href="mailto:contact@lftc.com">contact@lftc.com</a></p>
        </div>
      </Grid>
    </Container>
  </Section>  
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 2fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

export default Contact;
