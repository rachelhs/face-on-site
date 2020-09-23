import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';
import cdgang from '../../images/art/cdGangcolour.png';
import clouds from '../../images/chatbots/clouds.jpg';
import mikeTV1 from '../../images/chatbots/mike_tv_1.gif';
import mikeTV2 from '../../images/chatbots/mike_tv_2.gif';
import LinkComponent from './LinkComponent';

const lightBotColour = "#9cd3d4";
const darkBotColour = "#00a6a7"; 
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const CD1Bot = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Welcome to the CD Gang</Title>
    <div className = { chatbotStyles.container } >
      <ThemeProvider theme = { theme }>
        <ChatBot 
        headerTitle = "this will not be hereeeeeeeeee" // workaround for setting width to 100% for mobile view
        width = '70vw' // width is for outercontainer
        contentStyle = {{'width': '100%', 'height': '90%' }} // this width sets the inner container for chatbot bubbles, height 90% stops strange footer thing
        bubbleOptionStyle = {{ 'background': DarkUserColour, 'fontSize': '16px' }} //styling of user options text
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
  color: ${lightBotColour};
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
    message: "We are the Cloud Detectives Gang",
    trigger: '3',
  },
  { 
    id: '3',
    message: "or CD Gang for short",
    trigger: '4',
  },
  { 
    id: '4',
    message: "I'm Dalia",
    trigger: '5',
  },
  { 
    id: '5',
    message: "I'm Jada",
    trigger: '6',
  },
  { 
    id: '6',
    message: "I'm Kai and this is Holly the dog",
    trigger: '7',
  },
  { 
    id: '7',
    message: "Woof!",
    trigger: '7.5',
  },
    {
    id: '7.5',
    component: 
       <img src={cdgang} className={chatbotStyles.image} alt="Cloud Detectives Gang" />
    ,        
    trigger: '8',
  },
  { 
    id: '8',
    message: "What's your name?",
    trigger: '9',
  }, 
  { 
    id: '9',
    message: "Would you like to join the CD Gang?",
    trigger: '10',
  },
  {
    id: '10',
    options: [
      { value: 1, label: 'Yes', trigger: '11' },
      { value: 2, label: "No", trigger: '12' },
    ],
  },
  { 
    id: '12',
    message: "Ok. Lovely to meet you and please come back and see us again sometime",
    trigger: '13',
  },
  {
    id: '13',
    component: 
    <LinkComponent url="/" text="Click to finish"/>
   ,
    trigger: '9',
  },
 { 
    id: '11',
    message: "Ace!",
    trigger: '14',
  },
 { 
    id: '14',
    message: "We are finding out about The Cloud",
    trigger: '15',
  },
 { 
    id: '15',
    message: "But not clouds in the sky",
    trigger: '16',
  },
  {
    id: '16',
    component: 
       <img src={clouds} className={chatbotStyles.image} alt="clouds in the sky" />
    ,        
    trigger: '17',
  },
 { 
    id: '17',
    message: "The Computer Cloud",
    trigger: '18',
  },
 { 
    id: '18',
    message: "Although some people thing the computer Cloud is in the sky! ",
    trigger: '19',
  },
 { 
    id: '19',
    message: "The Cloud is very much on the ground",
    trigger: '20',
  },
 { 
    id: '20',
    message: "Although it is hard to know where it is",
    trigger: '21',
  },
 { 
    id: '21',
    message: "It exists all around the world",
    trigger: '22',
  },
 { 
    id: '22',
    message: "and it is growing all the time!",
    trigger: '23',
  },
  { 
    id: '23',
    message: "Which of these are computers?",
    trigger: '24', 
  },  
  {
    id: '24',
    options: [
      { value: 1, label: 'Laptop', trigger: '25' },
      { value: 2, label: 'PC', trigger: '25' },
      { value: 3, label: 'Mac', trigger: '25' },
      { value: 4, label: 'Smart phone', trigger: '25' },
      { value: 5, label: 'Tablet', trigger: '25' },
      { value: 6, label: 'Raspberry Pi', trigger: '25' },
      { value: 7, label: 'All of them', trigger: '25' },
    ],
  },
  { 
    id: '25',
    message: "All of them are!",
    trigger: '26', 
  },  
  { 
    id: '25',
    message: "Computers are everywhere",
    trigger: '26', 
  }, 
  { 
    id: '26',
    message: "and if they are online",
    trigger: '27', 
  }, 
  { 
    id: '27',
    message: "(online is another way of saying on the Internet)",
    trigger: '28', 
  }, 
  { 
    id: '28',
    message: "they can be connected to The Cloud",
    trigger: '29', 
  }, 
  { 
    id: '29',
    message: "Have you heard of data?",
    trigger: '30', 
  },  
  {
    id: '30',
    options: [
      { value: 1, label: 'Yes', trigger: '31' },
      { value: 2, label: 'No', trigger: '31' },
      { value: 3, label: 'Maybe', trigger: '31' },
    ],
  },
  { 
    id: '31',
    message: "Computers talk to each other using data",
    trigger: '32', 
  }, 
  { 
    id: '32',
    message: "Data looks a bit like this",
    trigger: '33', 
  }, 
  { 
    id: '33',
    message: "010000100010001001000010010001000",
    trigger: '34', 
  }, 
  { 
    id: '34',
    message: "Data is how we send stuff through the internet",
    trigger: '35', 
  }, 
  { 
    id: '35',
    message: "For example when you watch your favourtie film online",
    trigger: '36', 
  }, 
  { 
    id: '36',
    message: "It is broken down into data",
    trigger: '37', 
  }, 
  { 
    id: '37',
    message: "sent through the internet to your computer",
    trigger: '38', 
  }, 
  {
    id: '38',
    component: 
       <img src={mikeTV1} className={chatbotStyles.image} alt="scene from the film Charlie and the Chocolate Factory where Mike TV is broken into tiny pieces and sent to a television" />
    ,        
    trigger: '39',
  },
  { 
    id: '39',
    message: "and them arranged on your screen as a film again",
    trigger: '40', 
  }, 
  {
    id: '40',
    component: 
       <img src={mikeTV2} className={chatbotStyles.imageLong} alt="scene from the film Charlie and the Chocolate Factory where Mike TV is broken into tiny pieces and sent to a television" />
    ,        
    trigger: '41',
  },
  { 
    id: '41',
    message: "Do you think using the Internet has an impact on the environment?",
    trigger: '42', 
  }, 
  {
    id: '42',
    options: [
      { value: 1, label: 'Yes', trigger: '43' },
      { value: 2, label: 'No', trigger: '43' },
      { value: 3, label: 'Maybe', trigger: '43' },
    ],
  },
  { 
    id: '43',
    message: "Well it does take energy to move data around the world",
    trigger: '44', 
  }, 
  { 
    id: '44',
    message: "and using energy that is not sustainable can speed up climate change",
    trigger: '45', 
  }, 
  { 
    id: '45',
    message: "and we want to help the environment and slow down climate change",
    trigger: '46', 
  }, 
  { 
    id: '46',
    message: "Do you think the internet can be sustainable?",
    trigger: '47', 
  }, 
  {
    id: '47',
    options: [
      { value: 1, label: 'Yes', trigger: '48' },
      { value: 2, label: 'No', trigger: '48' },
      { value: 3, label: 'Maybe', trigger: '48' },
    ],
  },
  { 
    id: '48',
    message: "We need to learn as much about the Internet and The Cloud as possible",
    trigger: '49', 
  }, 
  { 
    id: '49',
    message: "To see if it can help us to slow down climate change",
    trigger: '50', 
  }, 
  { 
    id: '50',
    message: "To do this we have some chatbots for you to talk to",
    trigger: '51', 
  }, 
  { 
    id: '51',
    message: "Do you know what a chatbot is?",
    trigger: '52', 
  }, 
  {
    id: '52',
    options: [
      { value: 1, label: 'Yes', trigger: '53' },
      { value: 2, label: 'No', trigger: '53' },
      { value: 3, label: 'Maybe', trigger: '53' },
    ],
  },
  { 
    id: '53',
    message: "A chatbot is a piece of computer program you can talk to",
    trigger: '54', 
  }, 
  { 
    id: '54',
    message: "You may think you are talking to another person",
    trigger: '55', 
  }, 
  { 
    id: '55',
    message: "but it is a software a person has programmed to act and sound like a human",
    trigger: '56', 
  }, 
  { 
    id: '56',
    message: "Do you know what software or a computer program is?",
    trigger: '57', 
  }, 
  {
    id: '57',
    options: [
      { value: 1, label: 'Yes', trigger: '58' },
      { value: 2, label: 'No', trigger: '59' },
      { value: 3, label: 'Maybe', trigger: '53' },
    ],
  },
  { 
    id: '58',
    message: "Cool 😎",
    trigger: '61', 
  }, 
  { 
    id: '59',
    message: "It is a collection of instructions a person writes for a computer that are used to perform a task or instruct the computer on how to behave",
    trigger: '60', 
  }, 
  { 
    id: '60',
    message: "a chatbot is a computer program written with instructions on how to talk to and understand humans",
    trigger: '61', 
  }, 
  { 
    id: '61',
    message: "By talking to the chatbots you can find out about The Cloud and the environment",
    trigger: '62', 
  }, 
  { 
    id: '62',
    message: "When you have talked to them all you will need to take a small test",
    trigger: '63', 
  }, 
  { 
    id: '63',
    message: "To see if you are ready to be a Cloud Detective",
    trigger: '64', 
  }, 
  { 
    id: '64',
    message: "and get your Cloud Detective badge",
    trigger: '65', 
  },
  { 
    id: '65',
    message: "and learn the Green Cloud Code",
    trigger: '66', 
  },
  { 
    id: '66',
    message: "The first chatbot you need to talk to is Postie",
    trigger: '67', 
  },
  { 
    id: '67',
    message: "are you ready?",
    trigger: '68', 
  },
  {
    id: '68',
    component: 
    <LinkComponent url="postie-bot" text="Talk to Postie"/>
   ,
    end: true,
  },
];

export default CD1Bot;
