import React from 'react';
import { Section, FirstContainer, Title, TitleText } from '@components/global';
import listStyles from './list.module.css';
import arrow from '../../images/art/arrow.png';

const HowTo = () => (
  <Section id="howTo">
    <FirstContainer style={{ position: 'relative' }}>
      <Title><TitleText>HOW TO</TitleText></Title>
      <div className={listStyles.spacer}></div>
      <div className={listStyles.listContainer}><img className={listStyles.arrow} src={arrow} alt="arrow"></img><h3 className={listStyles.text}>Approach the door</h3></div>
      <div className={listStyles.listContainer}><img className={listStyles.arrow} src={arrow} alt="arrow"></img><h3 className={listStyles.text}>You will be allocated an age and gender</h3></div>
      <div className={listStyles.listContainer}><img className={listStyles.arrow} src={arrow} alt="arrow"></img><h3 className={listStyles.text}>Only this persona is allowed through; a disguise may be necessary</h3></div>
      <div className={listStyles.listContainer}><img className={listStyles.arrow} src={arrow} alt="arrow"></img><h3 className={listStyles.text}>The decisions are made by an AI. Where are the boundaries?</h3></div>
      <div className={listStyles.listContainer}><img className={listStyles.arrow} src={arrow} alt="arrow"></img><h3 className={listStyles.text}>Use the available means to change your face</h3></div>
      </FirstContainer>
  </Section>
);
export default HowTo;
