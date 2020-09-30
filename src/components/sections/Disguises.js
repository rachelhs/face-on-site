import React from 'react';
import teamStyles from './team.module.css';
import { Section, Container, Title, TitleText, ParagraphText } from '@components/global';
import listStyles from './list.module.css';

const Disguises = () => (
  <Section id="howTo" className={teamStyles.sectionCollective}>
    <Container style={{ position: 'relative' }}>
      <Title><TitleText>DISGUISES</TitleText></Title>
      <ParagraphText><h2>Here are a few ways to change your face using free browser based apps from the web</h2></ParagraphText>
      <div className={listStyles.spacer}></div>
      <div className={listStyles.listContainer}><a href="https://reflect.tech/faceswap" target="_blank" rel="noopener noreferrer"><h3>Swap faces with a celebrity</h3></a></div>
        <div className={listStyles.listContainer}><a href="https://sdk.developer.deepar.ai/beautyDemo/index.html" target="_blank" rel="noopener noreferrer"><h3>Add some make up</h3></a></div>
        <div className={listStyles.listContainer}><a href="https://sdk.developer.deepar.ai/virtualTryOn/index.html" target="_blank" rel="noopener noreferrer"><h3>Add a pair of glasses</h3></a></div>
        <div className={listStyles.listContainer}><a href="https://sdk.developer.deepar.ai/preview/index.html?e=./effects/gold_face" target="_blank" rel="noopener noreferrer"><h3>Paint your face gold</h3></a></div>
        <div className={listStyles.listContainer}><a href="https://www.photofunny.net/cat-stickers/photomontage-bearded-man-sticker#logo2" target="_blank" rel="noopener noreferrer"><h3>Grow a beard</h3></a></div>
        <div className={listStyles.listContainer}><a href="https://changemyface.com/demo.php" target="_blank" rel="noopener noreferrer"><h3>Get older</h3></a></div>
        <div className={listStyles.listContainer}><a href="https://makeup.pho.to/" target="_blank" rel="noopener noreferrer"><h3>Smooth out wrinkles</h3></a></div>
        <div className={listStyles.listContainer}><a href="https://sdk.developer.deepar.ai/preview/index.html?e=./effects/bot" target="_blank" rel="noopener noreferrer"><h3>Be a robot</h3></a></div>
    </Container>
  </Section>
);

export default Disguises;









