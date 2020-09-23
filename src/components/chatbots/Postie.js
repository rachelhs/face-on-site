import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';
import postieIcon from '../../images/art/postieIcon.png'; 
import postieImage from '../../images/art/PostieColour.png'; 
import womenTelephone from '../../images/chatbots/women_telephone.gif';
import atusa from '../../images/chatbots/Atusa.jpg';
import modemSound from '../../images/chatbots/modemSound.mp3';
import pennyBlack from '../../images/chatbots/penny_black.jpg';
import youGotMail from '../../images/chatbots/you_got_mail.gif';
import timBernersLee from '../../images/chatbots/Tim_Berners_Lee.jpg';
import dialUp from '../../images/chatbots/dial_up.gif';
import internet from '../../images/chatbots/internet.gif';
import staceyHorn from '../../images/chatbots/stacey_horn.jpg';
import globalNetwork from '../../images/chatbots/global_network.gif';
import cloudRain from '../../images/chatbots/cloud_rain_photos.gif';
import LinkComponent from './LinkComponent';

const lightBotColour = "#f6b7ad";
const darkBotColour = "#eb6160";
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const PostieBot = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Postie</Title>
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
        botAvatar = {postieIcon}
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
  botBubbleColor: darkBotColour, // colour of Postie's speech
  userBubbleColor: lightUserColour, // colour of user's speech (light)
  botFontColor: 'white', // font colour of Postie's speech
  userFontColor: 'black', // font colour when user has selected answer
  headerFontColor: lightBotColour,
};

const steps = [
  {
    id: '1',
    message: '👋 Hello!',
    trigger: '1.5',
  },
  {
    id: '1.5',
    component: 
       <img src={postieImage} className={chatbotStyles.image} alt="Postie" />
      ,        
    trigger: '2',
  },
  {
    id: '2',
    message: 'My name is Postie',
    trigger: '3'
  },

  {
    id: '3',
    message: 'I work for the Post Office ✉️📮',
    trigger: '4'

  },
  {
    id: '4',
    message: 'Are you a Cloud Detective?',
    trigger: '5'

  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Yes', trigger: '6' },
      { value: 2, label: 'No', trigger: '7' },
      { value: 3, label: 'Not yet!', trigger: '7' },
    ],
  },
  {
    id: '7',
    message: 'Well I am sure you will be soon!',
    trigger: '8',
  },
  {
    id: '6',
    message: 'I thought so!',
    trigger: '8',
  },
  {
    id: '8',
    message: 'I had a message from the rest of the gang ',
    trigger: '9',
  },
  {
    id: '9',
    message: 'I can tell you about how people send messages all around the world 🌍',
    trigger: '10',
  },
  {
    id: '10',
    message: 'What would you like to know?',
    trigger: '11',
  },
  {
    id: '11',
    options: [
      { value: 1, label: 'Why do people send letters?', trigger: '12' },
      { value: 2, label: 'What does the Post Office do?', trigger: '15' },
      { value: 3, label: 'When was the first letter sent?', trigger: '20' },
    ],
  },
  {
    id: '12',
    message: 'People have always wanted to connect with each other',
    trigger: '13',
  },
   {
    id: '13',
    message: 'Humans have used smoke signals, drumming, flags, telegraphs, letters, and even pigeons to communicate!',
    trigger: '14',
  },
  {
    id: '14',
    options: [
      { value: 1, label: 'What does the Post Office do?', trigger: '15' },
      { value: 2, label: 'When was the first letter sent?', trigger: '12' },
      { value: 3, label: "Enough about letters! Let's talk about the internet!", trigger: '27' },
    ],
  },
  {
    id: '15',
    message: 'The Post Office can deliver your letter to anyone in the world with an address',        
    trigger: '16',
  },
  {
    id: '16',
    message: 'It was the first social media network!',
    trigger: '17',
  },
  {
    id: '17',
    message: 'The telephone was invented  in the 1870s. The Post Office ran the telephone and telegraph network up until 1969',
    trigger: '18',
  },
  {
    id: '18',
    component: 
       <img src={womenTelephone} className={chatbotStyles.image} alt="Women telephone operators in the 1951" />
      ,        
    trigger: '19',
  },
  {
    id: '19',
    options: [
      { value: 1, label: 'When was the first letter sent?', trigger: '20' },
      { value: 2, label: 'Why do people send letters?', trigger: '12' },
      { value: 3, label: "Enough about letters! Let's talk about the internet!", trigger: '27' },
    ],
  },
  {
    id: '20',
    message: 'The first recorded handwritten letter was by Persian Queen Atusa in around 500BC',
    trigger: '21',
  },
  {
    id: '21',
    component: 
       <img src={atusa} className={chatbotStyles.image} alt="Statue of the head of Queen Atusa" />
      ,        
    trigger: '22',
  },
  {
    id: '22',
    message: 'Early letters did not have stamps or envelopes',
    trigger: '23',
  },
  {
    id: '23',
    message: 'The first letter with a stamp was sent in 1840 during the reign of Queen Victoria',
    trigger: '24',
  },
  {
    id: '24',
    component: 
       <img src={pennyBlack} className={chatbotStyles.image} alt="Penny Black Stamp" />
    ,        
    trigger: '25',
  },
  {
    id: '25',
    message: "This is the Penny Black. The World's first postage stamp and it had Queen Victoria's face on",
    trigger: '26',
  },
  {
    id: '26',
    options: [
      { value: 1, label: 'What does the Post Office do?', trigger: '15' },
      { value: 2, label: 'Why do people send letters?', trigger: '12' },
      { value: 3, label: "Enough about letters ! Let's talk about the internet!", trigger: '27' },
    ],
  },
  { 
    id: '27',
    message: "People were sending messages to each other through electronic cables way before the Internet!",
    trigger: '28',
  },
  { 
    id: '28',
    message: "The Post Office was the world's first social media network",
    trigger: '29',
  },
  { 
    id: '29',
    message: "How often do you post letters?",
    trigger: '30',
  },
  {
    id: '30',
    options: [
      { value: 1, label: 'Every day', trigger: '31' },
      { value: 2, label: 'every week', trigger: '31' },
      { value: 3, label: 'once a month', trigger: '31' },
      { value: 4, label: 'once a year', trigger: '31' },
      { value: 5, label: 'never', trigger: '31' },
    ],
  },
  { 
    id: '31',
    message: "What does online mean?",
    trigger: '32',
  },
  {
    id: '32',
    options: [
      { value: 1, label: 'On the Internet', trigger: '33' },
      { value: 2, label: 'On the telephone', trigger: '33' },
      { value: 3, label: 'Hanging the wasking out on the line', trigger: '33' },
    ],
  },
  { 
    id: '33',
    message: "Online means on the Internet",
    trigger: '34',
  },
  { 
    id: '34',
    message: "Do you send messages more often online?",
    trigger: '35',
  },
  {
    id: '35',
    options: [
      { value: 1, label: 'Yes', trigger: '36' },
      { value: 2, label: 'No', trigger: '36' },
      { value: 3, label: "I don't know", trigger: '36' },
    ],
  },
  { 
    id: '36',
    message: "Can you know when the first online message was sent?",
    trigger: '37',
  },
  {
    id: '37',
    component: 
       <img src={youGotMail} className={chatbotStyles.image} alt="Sending emails in the 1998 film You've Got Mail" />
    ,        
    trigger: '38',
  },
  {
    id: '38',
    options: [
      { value: 1, label: '1940s', trigger: '39' },
      { value: 2, label: '1950s', trigger: '39' },
      { value: 3, label: '1960s', trigger: '39' },
      { value: 4, label: '1070s', trigger: '39' },
      { value: 5, label: '1980s', trigger: '39' },
      { value: 6, label: '1990s', trigger: '39' },
    ],
  }, 
  { 
    id: '39',
    message: "In 1971 Computer Scientist Ray Tomlinson sent the first online message",
    trigger: '40',
  },
  { 
    id: '40',
    message: "He sent it to himself",
    trigger: '41',
  },
  { 
    id: '41',
    message: "From one computer to another...",
    trigger: '42',
  },
  { 
    id: '42',
    message: "in the same room!",
    trigger: '43',
  },
  { 
    id: '43',
    message: "What would you have written in the first online message?",
    trigger: '44',
  },
  {
    id: '44',
    options: [
      { value: 1, label: '💡 🗣️ ✍️', trigger: '45' },
    ],
  }, 
  { 
    id: '45',
    message: "Ray's message wasn't that imaginative",
    trigger: '46',
  },
  { 
    id: '46',
    message: "Ray said:",
    trigger: '47',
  },
  { 
    id: '47',
    message: '"Most likely the first message was QWERTYIOP or something similar"',
    trigger: '48',
  },
  { 
    id: '48',
    message: 'Perhaps he did not realsie how important that message would be!',
    trigger: '49',
  },
  { 
    id: '49',
    message: 'Communication online in the 70s and 80s only really happened between people at universities',
    trigger: '50',
  },
  { 
    id: '50',
    message: 'The World Wide Web',
    trigger: '51',
  },
  { 
    id: '51',
    message: 'or the Internet as we know it',
    trigger: '52',
  },
  { 
    id: '52',
    message: 'was invented by Sir Tim Berners Lee in 1989',
    trigger: '53',
  },
  {
    id: '53',
    component: 
       <img src={timBernersLee} className={chatbotStyles.imageLong} alt="Sir Tim Berners Lee sat in front of PC" />
    ,        
    trigger: '54',
  },
  { 
    id: '54',
    message: 'The Internet became available for people to use at home in 1991',
    trigger: '55',
  },
  {
    id: '55',
    component: 
    <audio controls src={modemSound} autoPlay/>
    ,
    trigger: '56',
  },
  { 
    id: '56',
    message: 'Ask older people in your family if they remember this sound',
    trigger: '57',
  },
  {
    id: '57',
    component: 
       <img src={dialUp} className={chatbotStyles.imageLong} alt="The internet connection icon from the 1990s" />
    ,        
    trigger: '58',
  },
   { 
    id: '58',
    message: 'It is the sound of a computer connecting to the Internet in the 90s',
    trigger: '59',
  },
  { 
    id: '59',
    message: 'All of the message you send online travel through the Internet',
    trigger: '60',
  },
  { 
    id: '60',
    message: 'How many messages do you send online every day?',
    trigger: '61',
  },
  {
    id: '61',
    options: [
      { value: 1, label: 'none', trigger: '62' },
      { value: 2, label: 'less than 10', trigger: '62' },
      { value: 3, label: 'between 10 and 100', trigger: '62' },
      { value: 4, label: 'more than 100', trigger: '62' },
    ],
  }, 
  { 
    id: '62',
    message: 'How many messages do you think are sent online by everyone each day?',
    trigger: '63',
  },
  {
    id: '63',
    options: [
      { value: 1, label: 'more than 1000', trigger: '64' },
      { value: 2, label: 'more than 10 thousand', trigger: '64' },
      { value: 3, label: 'more than a million', trigger: '64' },
      { value: 4, label: 'more than a billion', trigger: '64' },
    ],
  }, 
  { 
    id: '64',
    message: 'On average 293.6 billion emails are sent everyday',
    trigger: '65',
  },
  {
    id: '65',
    component: 
       <img src={internet} className={chatbotStyles.imageLong} alt="graphic representation of online messages being sent around the world" />
    ,        
    trigger: '67',
  },
  { 
    id: '67',
    message: 'But that does not include messages sent through social media',
    trigger: '68',
  },
  { 
    id: '68',
    message: 'Do you know anyone on social media?',
    trigger: '69',
  },
  {
    id: '69',
    options: [
      { value: 1, label: 'Yes', trigger: '70' },
      { value: 2, label: 'No', trigger: '70' },
    ],
  },
  { 
    id: '70',
    message: 'The first social media network on the internet was created in 1990 by a woman named Stacy Horn on a borrowed computer in her apartment in New York',
    trigger: '71',
  },
  { 
    id: '71',
    message: 'About 40% of its users were women',
    trigger: '72',
  },
  {
    id: '72',
    component: 
       <img src={staceyHorn} className={chatbotStyles.image} alt="Stacey Horn sat in front of her PC in the 90s" />
    ,        
    trigger: '73',
  },
  { 
    id: '73',
    message: 'In 2019 3.5 billion people were users of social media',
    trigger: '74',
  },
  { 
    id: '74',
    message: "That is just less than half of the world's population",
    trigger: '75',
  },
  { 
    id: '75',
    message: 'Are you on the Internet?',
    trigger: '76',
  },
  {
    id: '76',
    options: [
      { value: 1, label: 'Yes', trigger: '77' },
      { value: 2, label: 'No', trigger: '77' },
      { value: 3, label: "I don't know", trigger: '77' },
    ],
  },
  { 
    id: '77',
    message: 'Trick question!',
    trigger: '78',
  },
  { 
    id: '78',
    message: 'I know you are on the Internet because you are talking to me!',
    trigger: '79',
  },
  { 
    id: '79',
    message: 'What kind of computer are you on?',
    trigger: '80',
  },
  {
    id: '80',
    options: [
      { value: 1, label: 'a PC', trigger: '81' },
      { value: 2, label: 'a smart phone', trigger: '81' },
      { value: 3, label: "a laptop", trigger: '81' },
      { value: 4, label: 'a Mac', trigger: '81' },
      { value: 5, label: "a tablet", trigger: '81' },
    ],
  },
  { 
    id: '81',
    message: 'Cool 😎',
    trigger: '82',
  },
  { 
    id: '82',
    message: 'they are all computers',
    trigger: '83',
  },
  { 
    id: '83',
    message: 'even a smart phone is a computer',
    trigger: '84',
  }, 
  { 
    id: '84',
    message: 'The Internet is a global network of billions of computers - including smart phones and tablets',
    trigger: '85',
  }, 
  {
    id: '85',
    component: 
       <img src={globalNetwork} className={chatbotStyles.imageLong} alt="graphic representation of data travelling around the world" />
    ,        
    trigger: '86',
  },
  { 
    id: '86',
    message: 'With the Internet, it is possible to access information and communicate with anyone around the world!',
    trigger: '87',
  },
  { 
    id: '87',
    message: '... and you can do much more!',
    trigger: '88',
  },
  { 
    id: '88',
    message: 'What do you use the Internet for?',
    trigger: '89',
  },
  {
    id: '89',
    options: [
      { value: 1, label: 'Homework 📖', trigger: '90' },
      { value: 2, label: 'play games 🎮', trigger: '90' },
      { value: 3, label: "watch films 🍿", trigger: '90' },
      { value: 4, label: 'talk to friends 🧑‍🤝‍🧑', trigger: '90' },
    ],
  },
  { 
    id: '90',
    message: 'Just connect your computer (laptop, phone, tablet etc.) to the Internet',
    trigger: '91',
  },
  { 
    id: '91',
    message: 'You can do all kinds of things on the Internet',
    trigger: '92',
  },
  { 
    id: '92',
    message: 'Lots of computers networked (or connected) together is called The Cloud',
    trigger: '92.5',
  },
  { 
    id: '92.5',
    message: 'The Cloud is basically another way of saying the Internet',
    trigger: '93',
  },
  { 
    id: '93',
    message: 'The Cloud is all over the world',
    trigger: '94',
  },
  { 
    id: '94',
    message: 'The Cloud is moves data all over the world',
    trigger: '95',
  },
  { 
    id: '95',
    message: 'Powering social media, online messaging, video streaming, storing your photos, playing games with friends',
    trigger: '96',
  },
  { 
    id: '96',
    message: 'It all takes place in The Cloud',
    trigger: '97',
  },
  {
    id: '97',
    component: 
       <img src={cloudRain} className={chatbotStyles.image} alt="Gif of a cloud raining photos" />
    ,        
    trigger: '98',
  },
  {
    id: '98',
    options: [
      { value: 1, label: 'Can you tell me more about The Cloud?', trigger: '99' },
      { value: 2, label: 'Are you in The Cloud?', trigger: '102' },
      { value: 3, label: "Do you have a Cloud Detectives Badge?", trigger: '99' },
    ],
  },
  { 
    id: '99',
    message: "Hmmmmm 🤔 ...",
    trigger: '100',
  },
  { 
    id: '100',
    message: "Why don't you talk to Astro or Nemo",
    trigger: '101',
  },
  { 
    id: '102',
    message: "Yes!",
    trigger: '103',
  },
  {
    id: '103',
    options: [
      { value: 1, label: 'Can you tell me more about The Cloud?', trigger: '99' },
      { value: 2, label: "Do you have a Cloud Detectives Badge?", trigger: '99' },
    ],
  },
  {
    id: '101',
    component: 
    <LinkComponent url="astro-bot" text="Talk to Astro"/>
   ,
    trigger: '104',
  },
  {
    id: '104',
    component: 
    <LinkComponent url="nemo-bot" text="Talk to Nemo"/>
    ,
    end: true,
  },
];

export default PostieBot;
