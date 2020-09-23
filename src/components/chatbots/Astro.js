import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';
import dataCentres from '../../images/chatbots/data-centres-google-images.png';
import climateGif from '../../images/chatbots/200w_d.gif'
import astroIcon from '../../images/art/astroIcon.png'
import astroImage from '../../images/art/astroColour.png'
import satellite from '../../images/chatbots/satellite.jpg';
import LinkComponent from './LinkComponent';

const lightBotColour = "#c6a0cb";
const darkBotColour = "#953d8f";
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const AstroBot = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Astro</Title>
    <div className = { chatbotStyles.container } >
      <ThemeProvider theme = { theme }>
        <ChatBot 
        headerTitle = "this will not be hereeeeeeeeee" // workaround for setting width to 100% for mobile view
        width = '70vw' // width is for outercontainer
        contentStyle = {{'width': '100%', 'height': '90%'}} // this width sets the inner container for chatbot bubbles, height 90% stops strange footer thing
        bubbleOptionStyle = {{ 'background': DarkUserColour, fontSize: '16px' }} //styling of user options text
        bubbleStyle = {{ fontSize: '16px', 'max-width': '80%' }} //size of bot text
        hideUserAvatar = "true" //hide user avatar
        hideHeader = "true"
        botAvatar = { astroIcon }
        userDelay = "200" //delay before displaying user's selected response
        steps = { steps }
        style = {{ 'height': '90vh', 'box-shadow': 'none', 'width': '80vw' }} //prevents white space at bottom on mobiles
        />
      </ThemeProvider>
    </div>
  </Wrapper>
);

const Title = styled.h2`
  color: ${darkBotColour};
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colour.blue.dark};
  padding-top: 75px; /* to accommodate 75px fixed navigation */
  @media (max-width: ${props => props.theme.screen.sm}) {
    background-color: ${lightBotColour};
  }
`;

const theme = {
  background: lightBotColour, //background of whole chat window
  botBubbleColor: darkBotColour, // colour of Astro's speech
  userBubbleColor: lightUserColour, // colour of user's speech (light)
  botFontColor: 'white', // font colour of Astro's speech
  userFontColor: 'black', // font colour when user has selected answer
  headerFontColor: lightBotColour,
};

const steps = [
  {
    id: '1',
    message: "🚀 Astro here!",
    trigger: '1.5',
  },
    {
    id: '1.5',
    component: 
    <img src={astroImage} className={chatbotStyles.image} alt="Astro" />
    ,
    trigger: '2',
  },
  {
    id: '2',
    message: "I'm an astronaut and I'm up in space right now! 🧑🏿‍🚀",
    trigger: '3'

  },
  {
    id: '3',
    message: "The Earth looks so small from here 🌍",
    trigger: '4'

  },
  {
    id: '4',
    options: [
      { value: 1, label: "😲 Can you see me?", trigger: '5' },
      { value: 2, label: "Can you see the internet?", trigger: '8' },
      { value: 3, label: "Can you see climate change? 🔥", trigger: '12' },
    ],
  },
  {
    id: '5',
    message: "I can't see you from here, you're too small!",
    trigger: '6',
  },
  {
    id: '6',
    message: "But I can see big things like huge data centres and the effects of climate change",
    trigger: '7',
  },
  {
    id: '7',
    options: [
      { value: 1, label: "What do the data centres look like? 🤖", trigger: '8' },
      { value: 2, label: "What does climate change look like?", trigger: '12' },
    ],
  },
  {
    id: '8',
    message: "I can see huge data centres which house most of the internet from up here ",
    trigger: '9',
  },
  {
    id: '9',
    component: 
    <img src={dataCentres} className={chatbotStyles.image} alt="Data Centres from google maps" />
    ,
    trigger: '10',
  },
  {
    id: '10',
    message: "Here are some in Virginia in the US",
    trigger: '11',
  },
  {
    id: '11',
    message: "A lot of internet traffic from all around the world passes through these buildings filled with computers",
    trigger: '14',
  },
  {
    id: '12',
    message: 'Here is a timelapse of the polar ice caps from space over the last few years 😕',
    trigger: '13',
  },
  {
    id: '13',
    component: 
       <img src={climateGif} className={chatbotStyles.image} alt="Data Centres from google maps" />
      ,        
    trigger: '15a',
  },
  {
    id: '15a',
    message: '🌏',
    trigger: '15',
  },
  {
    id: '14',
    options: [
      { value: 1, label: "Are they in the UK too?", trigger: '16' },
      { value: 2, label: "👍🏾", trigger: '12' },
    ],
  },
  {
    id: '15',
    options: [
      { value: 1, label: "🙁", trigger: '17' },
      { value: 2, label: "what can we do?", trigger: '17' },
    ],
  },
  {
    id: '16',
    message: 'Yes they are, in fact',
    trigger: '17',
  },
  {
    id: '17',
    message: 'There is a special data centre at Goonhilly Earth Station in Cornwall',
    trigger: '18',
  },
  {
    id: '18',
    message: "This one runs on solar energy so it doens't harm the planet☀️",
    trigger: '19',
  },
  {
    id: '19',
    message: "Scientific solutions like these can help us with climate change",
    trigger: '20',
  },
  {
    id: '20',
    options: [
      { value: 1, label: "can't the internet help with climate change?", trigger: '21a' },
      { value: 2, label: "can you do science from space?", trigger: '22a' },
      { value: 3, label: "tell me about an important space scientist!", trigger: '23a' },
    ],
  },
  {
    id: '21a',
    message: "Yes!",
    trigger: '21b',
  },
  {
    id: '21b',
    message: "Weather data stored in big data centres can help scientists make better predictions about the climate 🌪",
    trigger: '21c',
  },
  {
    id: '21c',
    message: "The internet can also help us to automate things like air conditioning and lighting so we use less energy ⚡️",
    trigger: '21d',
  },
  {
    id: '21d',
    message: "And monitor the health of forests so we can look after them better 🌲",
    trigger: '28',
  },
  {
    id: '22a',
    message: "Yes!",
    trigger: '22b',
  },
  {
    id: '22b',
    message: "Look at this satellite I can see out the window 👇🏾",
    trigger: '22c',
  },
  {
    id: '22c',
    component: 
       <img src={satellite} className={chatbotStyles.image} alt="Data Centres from google maps" />
      , 
    trigger: '22d',
  },
  {
    id: '22d',
    message: "Scientists are experimenting with satellite internet",
    trigger: '22e',
  },
  {
    id: '22e',
    message: "This might be a way to get every body in the world online!",
    trigger: '22f',
  },
  {
    id: '22f',
    message: "Even in hard to reach places 🏝️",
    trigger: '24',
  },
  {
    id: '23a',
    message: "Sure!",
    trigger: '23b',
  },
  {
    id: '23b',
    message: "Have you heard of Katherine Johnson?",
    trigger: '23c',
  },
  {
    id: '23c',
    message: "She helped to calculate the flight path of the rocket which carried the very first people to the moon! 🌖",
    trigger: '23d',
  },
  {
    id: '23d',
    options: [
      { value: 1, label: "When was that?", trigger: '23e' },
      { value: 2, label: "Cool! 👍", trigger: '23f' },
    ],
  },
  {
    id: '23e',
    message: "That was back in 1969",
    trigger: '23f',
  },
  {
    id: '23f',
    message: "Before the first American to orbit space embarked on their journey, they requested that Katherine check the computers calculations by hand",
    trigger: '23g',
  },
  {
    id: '23g',
    message: "She was known as a human computer!",
    trigger: '23h',
  },
  {
    id: '23h',
    message: "She was also one of the first African-American women to work as a NASA scientist",
    trigger: '23i',
  },
  {
    id: '23i',
    options: [
      { value: 1, label: "Great! What can you see outside?", trigger: '22b' },
    ],
  },
  {
    id: '24',
    options: [
      { value: 1, label: "Can science help with climate change too?", trigger: '21a' },
      { value: 2, label: "Even in the North Pole?", trigger: '25' },
    ],
  },
  {
    id: '25',
    message: "Sure! ❄",
    trigger: '26',
  },
  {
    id: '26',
    options: [
      { value: 1, label: "Cool! But what can the internet do to help climate change??", trigger: '27' },
    ],
  },
  {
    id: '27',
    message: "Well...",
    trigger: '21b',
  },
  {
    id: '28',
    options: [
      { value: 1, label: "Cool 😎", trigger: '29' },
      { value: 2, label: "Thanks, Astro! 🚀", trigger: '29' },
    ],
  },
  {
    id: '29',
    message: "You're welcome 👋🏾",
    trigger: '30',
  },
  {
    id: '30',
    message: "Good luck with getting your CD badge!",
    trigger: '31',
  },
  {
    id: '31',
    message: "Are you ready to visit another bot?",
    trigger: '32',
  },
  {
    id: '32',
    component: 
    <LinkComponent url="nemo-bot" text="Take me to Nemo!"/>
    ,
    trigger: '33',
  },
  {
    id: '33',
    component: 
    <LinkComponent url="eco-bot" text="I want to speak to Eco"/>
    ,
    trigger: '34',
  },
  {
    id: '34',
    component: 
    <LinkComponent url="data-bot" text="I'd like to talk to Data now"/>
    ,
    end: true,
  },
];

export default AstroBot;
