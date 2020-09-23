import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';
import cdgang from '../../images/art/cdGangcolour.png';
import LinkComponent from './LinkComponent';

const lightBotColour = "#9cd3d4";
const darkBotColour = "#00a6a7";
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const CD2Bot = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Join us</Title>
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
        botAvatar = {cdgang}
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
  botBubbleColor: darkBotColour, // colour of CD Gang's speech
  userBubbleColor: lightUserColour, // colour of user's speech (light)
  botFontColor: 'white', // font colour of CD Gang's speech
  userFontColor: 'black', // font colour when user has selected answer
  headerFontColor: lightBotColour,
};

const steps = [
  {
    id: '1',
    message: "Hi!",
    trigger: '2',
  },
  {
    id: '2',
    message: "We are sooooo happy to talk to you again 😃",
    trigger: '3'

  },
  {
    id: '3',
    message: "We hope you have learned lots of things about The Cloud",
    trigger: '4'
  },
  {
    id: '4',
    message: "and the environment 🌍",
    trigger: '5'
  },
  {
    id: '5',
    message: "To join the Cloud Detective Gang",
    trigger: '6',
  },
  {
    id: '6',
    message: "You just need to answer 4 questions",
    trigger: '7',
  },
  {
    id: '7',
    message: "and if you get them all right",
    trigger: '8',
  },
  {
    id: '8',
    message: "you can join the gang",
    trigger: '9',
  },
  {
    id: '9',
    message: "and get your Cloud Detectives Badge!",
    trigger: '10',
  },
    {
    id: '10',
    message: "are you ready to take the test and join the Cloud Detective Gang?",
    trigger: '11'
  },
  {
    id: '11',
    options: [
      { value: 1, label: "Yes ", trigger: '12' },
      { value: 2, label: "No", trigger: '14' },
    ],
  },
  {
    id: '12',
    message: "Ok, first question",
    trigger: '23',
  },
  {
    id: '14',
    message: "No worries!",
    trigger: '15'
  },
  {
    id: '15',
    message: "Why not go back and talk to one of the other chatbots again",
    trigger: '16'
  },
  {
    id: '16',
    message: "Click the link to open the chatbot in a new tab",
    trigger: '17'
  },
  {
    id: '17',
    message: "Then you can come back to this page and take the quiz when you are ready",
    trigger: '18'
  },
  {
    id: '18',
    component: 
    <LinkComponent url="postie-bot" text="Talk to Postie"/>
   ,
    trigger: '19',
  },
  {
    id: '19',
    component: 
    <LinkComponent url="nemo-bot" text="Talk to Nemo"/>
    ,
    trigger: '20',
  },
    {
    id: '20',
    component: 
    <LinkComponent url="astro-bot" text="Talk to Astro"/>
   ,
    trigger: '21',
  },
  {
    id: '21',
    component: 
    <LinkComponent url="data-bot" text="Talk to Data"/>

    ,
    trigger: '22',
  },
  {
    id: '22',
    component: 
    <LinkComponent url="eco-bot" text="Talk to Eco"/>
    ,
    trigger: '10',
  },
  {
    id: '23',
    message: "What is The Cloud?",
    trigger: '24',
  },
  {
    id: '24',
    options: [
      { value: 1, label: "The Cloud is the Internet", trigger: '25' },
      { value: 2, label: "The Cloud is in the sky", trigger: '31' },
      { value: 3, label: "The Cloud is where rain is made", trigger: '36' },
    ],
  },
  {
    id: '25',
    message: "Correct",
    trigger: '26',
  },
  {
    id: '26',
    message: "The Cloud is another way of saying the Internet",
    trigger: '27',
  },
  {
    id: '27',
    message: "The Cloud is lots and lots of computers located all around the world that store and distribute data around the Internet",
    trigger: '28',
  },
  {
    id: '28',
    message: "Data is constantly moved around the Internet",
    trigger: '29',
  },
  {
    id: '29',
    message: "Which uses lots of energy",
    trigger: '30',
  },
  {
    id: '31',
    message: "Incorrect. The Cloud is not in the sky",
    trigger: '32',
  },
  {
    id: '32',
    message: "It is on land - and even under the sea - in countries all around the world",
    trigger: '33',
  },
  {
    id: '33',
    message: "Try again",
    trigger: '34',
  },
  {
    id: '34',
    message: "Or try talking to Postie again",
    trigger: '35',
  },
  {
    id: '35',
    component: 
    <LinkComponent url="postie-bot" text="Talk to Postie"/>
   ,
    trigger: '23',
  },
  {
    id: '36',
    message: "The Cloud is not like real clouds!",
    trigger: '37',
  },
  {
    id: '37',
    message: "It can help us to predict when it will rain",
    trigger: '38',
  },
  {
    id: '38',
    message: "But it cannot make it rain",
    trigger: '33',
  },
  {
    id: '30',
    message: "Next question",
    trigger: '39',
  },
  {
    id: '39',
    message: "Can The Cloud help us with climate change?",
    trigger: '40',
  },
  {
    id: '40',
    options: [
      { value: 1, label: "Yes", trigger: '41' },
      { value: 2, label: "No", trigger: '48' },
    ],
  },
  {
    id: '41',
    message: "Correct!",
    trigger: '42',
  },
  {
    id: '42',
    message: "The Cloud is helping scientists better understand the environment",
    trigger: '43',
  },
  {
    id: '43',
    message: "and work out ways of slowing down climate change",
    trigger: '44',
  },
  {
    id: '44',
    message: "The Cloud can also help us find information on climate change",
    trigger: '45',
  },
  {
    id: '45',
    message: "and help us to make better choices and live more sustainably",
    trigger: '47',
  },
  {
    id: '47',
    message: "Ok. Next question",
    trigger: '52',
  },
  {
    id: '48',
    message: "The Cloud does use energy but it can help us learn about climate change",
    trigger: '49',
  },
  {
    id: '49',
    message: "Try again",
    trigger: '50',
  },
  {
    id: '50',
    message: "Or try talking to Astro again",
    trigger: '51',
  },
  {
    id: '51',
    component: 
    <LinkComponent url="astro-bot" text="Talk to Astro"/>
   ,
    trigger: '39',
  },
  {
    id: '52',
    message: "What is the main way that data travels around the internet?",
    trigger: '53', 
  },
  {
    id: '53',
    options: [
      { value: 1, label: "Through the air", trigger: '57' },
      { value: 2, label: "Through cables", trigger: '54' },
      { value: 3, label: "Through satellites in space", trigger: '57' },
    ],
  },
  {
    id: '54',
    message: "Correct!",
    trigger: '55', 
  },
  {
    id: '55',
    message: "You are doing great!",
    trigger: '56', 
  },
  {
    id: '56',
    message: "Next question",
    trigger: '61', 
  },
  {
    id: '57',
    message: "Incorrect",
    trigger: '58', 
  },
  {
    id: '58',
    message: "Try again",
    trigger: '59',
  },
  {
    id: '59',
    message: "Or try talking to Nemo again",
    trigger: '60',
  },
  {
    id: '60',
    component: 
    <LinkComponent url="nemo-bot" text="Talk to Nemo"/>
   ,
    trigger: '53',
  },
  {
    id: '61',
    message: "Can The Cloud be powered using sustainable energy?",
    trigger: '62',
  },
  {
    id: '62',
    options: [
      { value: 1, label: "Yes", trigger: '63' },
      { value: 2, label: "No", trigger: '73' },
    ],
  },
  {
    id: '63',
    message: "Correct!",
    trigger: '64',
  },
  {
    id: '64',
    message: "The Cloud is powered using electricity",
    trigger: '65',
  },
  {
    id: '65',
    message: "and electricity can be made using entirely renewable energy",
    trigger: '66',
  },
  {
    id: '66',
    message: "Like solar 🌞, wind 🌬️ and hyrdo 🌊 energy",
    trigger: '67',
  },
  {
    id: '67',
    message: "The Cloud can be completely sustainable",
    trigger: '68'
  },
  {
    id: '68',
    message: "If we make sure that internet companies choose host their websites and webservices at renewable data centres",
    trigger: '69',
  },
  {
    id: '69',
    message: "Well done!",
    trigger: '70',
  },
  {
    id: '70',
    message: "You have passed the test!",
    trigger: '71',
  },
  {
    id: '71',
    message: "You are now officially and Cloud Detective!",
    trigger: '72',
  },
  {
    id: '72',
    message: "Here is your badge",
    trigger: '78',
  },
  {
    id: '73',
    message: "Incorrect",
    trigger: '74',
  },
  {
    id: '74',
    message: "Try again",
    trigger: '75',
  },
  {
    id: '75',
    message: "Or try talking to Data or Eco again",
    trigger: '76',
  },
  {
    id: '76',
    component: 
    <LinkComponent url="eco-bot" text="Talk to Eco"/>
   ,
    trigger: '77',
  },
  {
    id: '77',
    component: 
    <LinkComponent url="data-bot" text="Talk to Data"/>
   ,
    trigger: '61',
  },
  {
    id: '78',
    message: "It is time to learn the Green Cloud Code",
    end: true,
  },
];

export default CD2Bot;
