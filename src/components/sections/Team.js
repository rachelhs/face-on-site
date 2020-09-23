import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container } from '@components/global';
import contactStyles from './contact.module.css';
import recollective from '../../images/logos/recollective.png';
import TextScroll from '../common/TextScroll';

const Team = () => (
  <Section id="team" accent="dark" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
      <h1>The Team</h1>
      <TextScroll text={
      <div>
      <p>This project was carried out by Re+Collective in collaboration with the Eden Project.</p>      
      <p>We are a design activist community who work together to advocate, upskill, and create opportunities for womxn in creative technology. We deliver projects and workshops to challenge the development and impact of new technologies on society, the environment and the individual. </p> 
      <p>Members include B Aga, Coral Manton, Nema Hart, Sam Howey Nunn, Rachel Smith & Ellie Foreman.</p>
      <p>Collaborators on this project include Jo Elworthy, Misha Curson, Sarah Peake & Intercity.</p>
      </div>
      }></TextScroll>
      <img src={recollective} className={teamStyles.recollectiveLogo} alt="Re-collective logo" />
      <p>Please contact us by emailing <a className={contactStyles.link} href="mailto:contact@lftc.com">contact@lftc.com</a></p>
    </Container>
  </Section>
);
export default Team;
