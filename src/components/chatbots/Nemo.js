import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';
import nemoIcon from '../../images/art/nemoIcon.png';
import nemoImage from '../../images/art/nemoColour.png';
import underwatercables from '../../images/chatbots/underwatercables.gif';
import telegraph from '../../images/chatbots/telegraph.gif'
import LinkComponent from './LinkComponent';

const lightBotColour = "#fac89f";
const darkBotColour = "#EF6C00";
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const NemoBot = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Nemo</Title>
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
        botAvatar = {nemoIcon}
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
  botBubbleColor: darkBotColour, // colour of Nemo's speech
  userBubbleColor: lightUserColour, // colour of user's speech (light)
  botFontColor: 'white', // font colour of Nemo's speech
  userFontColor: 'black', // font colour when user has selected answer
  headerFontColor: lightBotColour,
};

const steps = [
  {
    id: '1',
    message: "Hi! My name's Nemo 👋",
    trigger: '1.5',
  },
  {
    id: '1.5',
    component: 
    <img src={nemoImage} className={chatbotStyles.image} alt="Nemo" />
    ,
    trigger: '2',
  },
  {
    id: '2',
    message: "Postie told me you're looking to join the CD gang!",
    trigger: '3'

  },
  {
    id: '3',
    message: "Let me see if I can help you on your quest",
    trigger: '3a'

  },
  {
    id: '3a',
    message: "I'm a submarine and I live at the Porthcurno Telegraph Museum in Cornwall",
    trigger: '4'

  },
  {
    id: '4',
    options: [
      { value: 1, label: "What's a Telegraph?!", trigger: '5' },
      { value: 2, label: "What's a submarine?!", trigger: '9a' },
      { value: 3, label: "Great! 👋", trigger: '8a' },
    ],
  },
  {
    id: '5',
    message: "Telegraphs are a very old way of communicating",
    trigger: '6',
  },
  {
    id: '6',
    message: "They allowed people to send coded messages with dots and dashes representing letters",
    trigger: '6a',
  },
  {
    id: '6a',
    message: "The first public telegraph was sent in 1844!",
    trigger: '7',
  },
  {
    id: '7',
    options: [
      { value: 1, label: "What did it say?", trigger: '7a' },
      { value: 2, label: "Got it", trigger: '8a' },
    ],
  },
  {
    id: '7a',
    message: "It said 'What hath God wrought!'",
    trigger: '8a',
  },
  {
    id: '8a',
    options: [
      { value: 1, label: "But what's a Telegraph Museum got to do with the internet?", trigger: '10' },
    ],
  },
  {
    id: '9a',
    message: "We submarines are vessels that can roam around deep at sea 🐳",
    trigger: '10a',
  },
  {
    id: '10a',
    message: "Like underwater boats!",
    trigger: '8a',
  },
  {
    id: '10',
    message: "People used to communicate with Telegraph by sending electrical signals down cables",
    trigger: '11',
  },
  {
    id: '11',
    component: 
    <img src={telegraph} className={chatbotStyles.image} alt="entering telegraph data" />
    ,
    trigger: '11a',
  },
  {
    id: '11a',
    message: "To talk to someone far away, you needed a long cable to reach them",
    trigger: '12a',
  },
  {
    id: '12a',
    options: [
      { value: 1, label: "Could they reach other countries?", trigger: '13a' },
      { value: 2, label: "Did it take a long time?", trigger: '14a' },
    ],
  },
  {
    id: '13a',
    message: 'Yes! In fact, as early as 1870, a cable was layed from Porthcurno all the way to India 🇮🇳',
    trigger: '14',
  },
  {
    id: '14',
    message: '🐟 Under the sea! 🐟',
    trigger: '15',
  },
  {
    id: '14a',
    message: 'It was much slower than the internet but quicker than you might think!',
    trigger: '14b',
  },
  {
    id: '14b',
    message: 'It was possible to send around 15 words per minute',
    trigger: '14c',
  },
  {
    id: '14c',
    message: "That's about one word every 4 seconds",
    trigger: '14d',
  },
  {
    id: '14d',
    message: "Try speaking like that! 😁",
    trigger: '15',
  },
  {
    id: '15',
    options: [
      { value: 1, label: "But the internet's not like Telegraph 🤔", trigger: '16' },
      { value: 2, label: "Cool!", trigger: '17' },
    ],
  },
  {
    id: '16',
    message: 'Actually, it is!',
    trigger: '17',
  },
  {
    id: '17',
    message: 'The internet needs lots of cables under the sea',
    trigger: '18',
  },
  {
    id: '18',
    message: 'Did you know that today, 99% of internet data travels through cables??',
    trigger: '19',
  },
  {
    id: '19',
    options: [
      { value: 1, label: "but what about Wifi??", trigger: '19a' },
      { value: 2, label: "😲", trigger: '19a' },
      { value: 3, label: "Sure 😎", trigger: '21' },
    ],
  },
  {
    id: '19a',
    message: 'Wifi and 4G do the last bit',
    trigger: '20',
  },
  {
    id: '20',
    message: 'They bridge the gap between the cables and your phone or computer',
    trigger: '21',
  },
  {
    id: '21',
    message: 'These days, we need lots and lots of cables to carry all the data from the internet around the world 🌏',
    trigger: '22',
  },
  {
    id: '22',
    component: 
       <img src={underwatercables} className={chatbotStyles.imageVeryLong} alt="Data Centres from google maps" />
      ,        
    trigger: '23',
  },
  {
    id: '23',
    message: 'Every time someone Tweets, sends a WhatsApp message or watches a YouTube video, data is sent along the cables',
    trigger: '24e',
  },
  {
    id: '24e',
    message: 'I know lots of facts about it - ask me some trivia!',
    trigger: '24',
  },
  {
    id: '24',
    options: [
      { value: 1, label: "How many WhatsApp messages are sent every minute?", trigger: '24a' },
      { value: 2, label: "How many people have a YouTube account?", trigger: '24b' },
      { value: 3, label: "What uses the most data?", trigger: '24c' },
      { value: 4, label: "How many views Twitch has every minute?", trigger: '24d' },
    ],
  },
  {
    id: '24a',
    message: 'Every minute, 18.1 million WhatsApp messages are sent!',
    trigger: '25',
  },
  {
    id: '24b',
    message: 'There are 2 billion active YouTube accounts',
    trigger: '25a',
  },
  {
    id: '25a',
    message: "That's around 1 in 4 people in the world!",
    trigger: '25',
  },
  {
    id: '24c',
    message: 'High quality videos use a lot of data',
    trigger: '26a',
  },
  {
    id: '26a',
    message: 'Much more than pictures, sound and text',
    trigger: '26b',
  },
  {
    id: '26b',
    message: "That's things like Netflix, Zoom and YouTube",
    trigger: '25',
  },
  {
    id: '24d',
    message: 'Every minute there are 1 million views on Twitch',
    trigger: '25',
  },
  {
    id: '25',
    options: [
      { value: 1, label: "Cool!", trigger: '26' },
      { value: 2, label: "Thanks, Nemo!", trigger: '26' },
      { value: 3, label: "👍", trigger: '26' },
    ],
  },
  {
    id: '26',
    message: 'Anytime! 😀',
    trigger: '27',
  },
  {
    id: '27',
    message: 'Which of my friends would you like to talk to now?',
    trigger: '28',
  },
  {
    id: '28',
    component: 
    <LinkComponent url="eco-bot" text="I want to talk to Eco"/>
    ,
    trigger: '29',
  },
  {
    id: '29',
    component: 
    <LinkComponent url="astro-bot" text="Astro please!"/>
    ,
    trigger: '30',
  },
  {
    id: '30',
    component: 
    <LinkComponent url="data-bot" text="I'd like to talk to Data"/>
    ,
    end: true,
  },
];

export default NemoBot;
