import React from 'react';
import { Section, Container, ParagraphTextPortfolio, TitleTextPortfolio, TitleText, Title } from '@components/global';
import sentimentHonk from '../../images/portfolio/sentiment_honk.jpg';
import cat1 from '../../images/portfolio/cat1.jpg';
import cat2 from '../../images/portfolio/cat2.jpg';
import cat3 from '../../images/portfolio/cat3.jpg';
import balls from '../../images/portfolio/balls.jpg';

import resultsStyles from './results.module.css';

const Portfolio = () => (
    <Section id="results">
        <Container style={{ position: 'relative' }}>

            <Title className={resultsStyles.portfolioTitle}><TitleText>Examples of Work</TitleText></Title>
            <TitleTextPortfolio>Face / On (2020) Webcam, Face Recognition System (Microsoft), Arduino, Face changing Apps</TitleTextPortfolio>
            <ParagraphTextPortfolio>Face / On is an interactive installation exploring Facial Recognition Technology. On approaching the door, you are given a challenge persona. For example, female aged 56 - 70. The door will only open for faces that it considers belong to these categories. To gain entry you may have to adopt a disguise. Face / On is a hands-on approach to interrogating hidden algorithms which make decisions about out identities. What are these categories in the eyes of the algorithm and how do they compare to our own ideas about identity? <br/><a href="http://rachelsmith.xyz/face-on" target="_blank" rel="noreferrer">rachelsmith.xyz/face-on</a></ParagraphTextPortfolio>
            <iframe className={resultsStyles.resultsImage+ ' ' + resultsStyles.video} src="https://player.vimeo.com/video/475515877" width="800" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            
            <TitleTextPortfolio>Weather Report, Studio Meineck (2020), Web App (Software Developer and Team Member)</TitleTextPortfolio>
            <ParagraphTextPortfolio>Weather Report is a self reflection tool primarily aimed at men from 35- 55 to address the two decade high in england and wales of men taking their lives.<br /> <a href="https://myweatherreport.org/" target="_blank" rel="noreferrer">https://myweatherreport.org/</a></ParagraphTextPortfolio>
            <iframe className={resultsStyles.resultsImage+ ' ' + resultsStyles.video} src="https://player.vimeo.com/video/468571472" width="800" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

            <TitleTextPortfolio>Sentiment Honk (2019) Party Horns, Sentiment Analysis Platform (Google), Microphone, Arduino, Silicone ear, LED</TitleTextPortfolio>
            <ParagraphTextPortfolio>‘Sentiment Honk’ is sensitive to negativity. Having a conversation nearby may lead to a series of interruptions or nudges, indicative of the tone of your words. Negativity will be honked. <a href="https://www.watershed.co.uk/studio/projects/sentiment-honk" target="_blank" rel="noreferrer">https://www.watershed.co.uk/studio/projects/sentiment-honk</a></ParagraphTextPortfolio>
            <img className={resultsStyles.resultsImage} src={sentimentHonk} alt="a yellow horn with 'negative' written on it blows next to a radio and a silicone ear"></img>

            <TitleTextPortfolio>Cat: Collaborating with a Neural Network (2018) Paintings, Convolutional Neural Network, Marker pens</TitleTextPortfolio>
            <ParagraphTextPortfolio>Here the 'hidden layers' of a Neural Network are exposed and tampered with. Neural Networks are a type of Artifical Intelligence based on the human brain. This one has been trained to recognise cats. By accessing the decsion-making process and making it visible, it is possible to see how the 'mind' of the network works. Through painterly intervention, a dialogue is established. <a href="http://website.kunstverein-tiergarten.de/archiv/ausstellung/membrane/" target="_blank" rel="noreferrer">http://website.kunstverein-tiergarten.de/archiv/ausstellung/membrane/</a></ParagraphTextPortfolio>
            <div className={resultsStyles.twoImages}>
            <img className={resultsStyles.resultsImageTwo} src={cat3} alt="close up of a painting"></img>
            </div>
            <div className={resultsStyles.twoImages}>
            <img className={resultsStyles.resultsImageTwo} src={cat1} alt="paintings of Cat hung in a gallery space"></img>
            <img className={resultsStyles.resultsImageTwo} src={cat2} alt="paintings of Cat hung in a gallery space"></img>
            </div>

            <TitleTextPortfolio>40,000! (2017) Ball pit balls, Raspberry Pi, Webcam, Projector (Collaborative Project)</TitleTextPortfolio>
            <ParagraphTextPortfolio>The floor of a gallery space is covered with 40,000 ball pit balls. Over the course of the exhibition (3 months), the traces of the visitors' paths layer on top of one another. Mathematical simulations used to describe the physical world lie side by side with the actual. Here the entropy (order of chaos) is measured. Visitors can interact with this number by organising the balls into colours or by causing disruption.</ParagraphTextPortfolio>
            <img className={resultsStyles.resultsImage} src={balls} alt="ball pit balls fill the floor of a gallery space. The number 6264 is projected on the wall"></img>

    
            </Container>
    </Section>
);
export default Portfolio;