import React from 'react';
import ChatBot from 'react-simple-chatbot';
import LinkComponent from './LinkComponent';
//styles
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';
//images
import Cows from '../../images/art/cows1.jpg';
import Deforestation from '../../images/art/deforestation.jpg';
import FossilFuels from '../../images/art/fossil-fuels.jpg';
import ecoIcon from '../../images/art/ecoIcon.png'
import ecoImage from '../../images/art/ecoColour.png'

const lightBotColour = "#f5daa2";
const darkBotColour = "#e8b534";
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const EcoBot = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Eco</Title>
    <div className = { chatbotStyles.container } >
      <ThemeProvider theme = { theme }>
        <ChatBot 
        headerTitle = "this will not be hereeeeeeeeee" // workaround for setting width to 100% for mobile view
        width = '70vw' // width is for outercontainer
        contentStyle = {{'width': '100%', 'height': '90%'}} // this width sets the inner container for chatbot bubbles, height 90% stops strange footer thing
        bubbleOptionStyle = {{ 'background': DarkUserColour, fontSize: '16px', 'color': '#FFFFFF' }} //styling of user options text
        bubbleStyle = {{ fontSize: '16px', 'max-width': '80%' }} //size of bot text
        hideUserAvatar = "true" //hide user avatar
        hideHeader = "true"
        botAvatar = { ecoIcon }
        userDelay = "200" //delay before displaying user's selected response
        botDelay = "1200" //delay before displaying bot's response
        steps = { steps }
        style = {{ 'height': '90vh', 'box-shadow': 'none', 'width': '80vw'}} //prevents white space at bottom on mobiles
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
  botBubbleColor: darkBotColour, // colour of Eco's speech
  userBubbleColor: lightUserColour, // colour of user's speech (light)
  botFontColor: '#38437d', // font colour of Eco's speech
  userFontColor: DarkUserColour, // font colour when user has selected answer
  headerFontColor: lightBotColour,
};

const steps = [
  {
    id: '1',
    message: "Hello I'm Eco 👋",
    trigger: '1.5',
  },
  {
    id: '1.5',
    component: 
    <img src = { ecoImage } className = { chatbotStyles.image } alt = "Eco" />,
    trigger: '2',
  },
  {
    id: '2',
    message: "... I know all about climate change. I can't wait to talk to you 🤓",
    trigger: '3'

  },
  {
    id: '3',
    message: "do you know what climate change is?",
    trigger: '4'

  },
  {
    id: '4',
    options: [
      { value: 1, label: "Yes", trigger: '5' },
      { value: 2, label: "No, what is it?", trigger: '8' },
    ],
  },
  {
    id: '5',
    message: "Great, can you try to explain it out loud?",
    trigger: '6',
  },
  {
    id: '6',
    options: [
      { value: 1, label: "I'm finished", trigger: '7' },
      { value: 2, label: "I give up!", trigger: '8' },
    ],
  },
  {
    id: '7',
    message: "nice one!",
    trigger: '8',
  },
  {
    id: '8',
    message: "Climate change is the process of our planet heating up. It's also  called global warming",
    trigger: '9',
  },
  {
    id: '9',
    message: "Do you think it is human activity that's making the earth warmer? 👩‍🔧",
    trigger: '10',
  },
  {
    id: '10',
    options: [
      { value: 1, label: "Yes", trigger: '11' },
      { value: 2, label: "I don't think so", trigger: '11' },
      { value: 3, label: "No idea!", trigger: '11' },

    ],
  },
  {
    id: '11',
    message: "The earth’s climate has constantly been changing, even before humans exsited.",
    trigger: '12',
  },
  {
    id: '12',
    message: "However, these changes are now happening at a much faster pace and scientists agree this is due to human activites.",
    trigger: '13',
  },
  {
    id: '13',
    options: [{
      value: 1,
      label: "What kind of thing do humans do that causes climate change?",
      trigger: '14' 
    }],
  },
  {
    id: '14',
    message: "Many factors contribute to climate change. Which would you like to learn about?",
    trigger: '15',
  },
  {
    id: '15',
    options: [
      { value: 1, label: "Buring fossil fuels 🏭🚌", trigger: '16' },
      { value: 2, label: "Farming 🐄🐐🐖", trigger: '19' },
      { value: 3, label: "Deforestation 🌲🌳", trigger: '25' },

    ],
  },
  // Fossil Fuel Route
  {
    id: '16',
    message: "Humans burn fossil fuels to power many things, like factories,  cars, buses and areoplanes.",
    trigger: '17',
  },
  {
    id: '17',
    component: 
    <img src = { FossilFuels } className = { chatbotStyles.image } alt = "Factory" />,
    trigger: '18',
  },
  {
    id: '18',
    message: "when these fuels are burnt, they release gases into the atmosphere. These gases create an 'invsible blanket' around the earth trapping heat from the sun and heating up the earth",
    trigger: '32',
  },
  // Farming Route
  {
    id: '19',
    message: "Farming impacts the environment in many ways. It is thought that cows, sheep and goats are responsible for up to 14% of all greenhouse emissions.",
    trigger: '20',
  },
  {
    id: '20',
    component: 
    <img src = { Cows } className = { chatbotStyles.image } alt = "Cows" />,
    trigger: '21',
  },
  {
    id: '21',
    message: "It sounds funny, but cows release a lot of methane into the atmosphere by burping and farting. Each day a cow releases enough methane gas to fill 500 empty litre bottles!",
    trigger: '22',
  },
  {
    id: '22',
    options: [
      { value: 1, label: "🤢Ew so many farts!", trigger: '23' },
      { value: 2, label: "Is methane bad?", trigger: '23' },
    ],
  },
  {
    id: '23',
    message: "Methane is a greenhouse gas, like carbon dioxide.",
    trigger: '24',
  },
  {
    id: '24',
    message: "These gases create an 'invsible blanket' around the earth trapping heat from the sun and heating up the earth.",
    trigger: '32',
  },
  // Deforestation Route
  {
    id: '25',
    component: 
    <img src = { Deforestation } className = { chatbotStyles.image } alt = "Forest being cut down" />,
    trigger: '26',
  },
  {
    id: '26',
    message: "Deforestation is when humans cut down huge numbers of trees, like in this photo",
    trigger: '27',
  },
  {
    id: '27',
    options: [
      { value: 1, label: "Why do people cut down forests?", trigger: '28' },
      { value: 2, label: "Why is that bad for the environment?", trigger: '31' },
    ],
  },
  {
    id: '28',
    message: "It could be to use wood from the trees to build buildings, or to burn the wood for heat.",
    trigger: '29',
  },
  {
    id: '29',
    message: "It might also be to make space on the land for agriculture, roads or bigger cities",
    trigger: '30',
  },
  {
    id: '30',
    options: [
      { value: 1, label: "Why is that bad for the environment?", trigger: '31' },
    ],
  },
  {
    id: '31',
    message: "Forests are very important to absorb carbon dioxide and release oxygen back into the air. This means forests play a major role in cleaning the air and stopping greenhouse gasses getting trapped in the atmosphere.",
    trigger: '32',
  },
  {
    id: '32',
    options: [
      { value: 1, label: "Eek that sounds scary", trigger: '33' },
      { value: 2, label: "How can I help the environment?", trigger: '34' },
    ],
  },
  {
    id: '33',
    message: "It can seem scary, but you can make a difference to help the earth 🌎💪",
    trigger: '34',
  },
  {
    id: '34',
    message: "There are many things you can do to make a difference",
    trigger: '35',
  },
  {
    id: '35',
    message: "This could be eating less meat, saving energy, cycling more instead of driving, recycling.",
    trigger: '36',
  },
  {
    id: '36',
    options: [{ 
      value: 1,
      label: "How does the internet impact the environment?",
      trigger: '37' 
    }]
  },
  {
    id: '37',
    message: "My friend Data can tell you all about the impact that computers and cloud computing have on the environment 🖥️ 🖥️",
    trigger: '38',
  },
  {
    id: '38',
    message: "It's been great to meet you. Data, Astro & Nemo would love to talk to you too",
    trigger: '39',
  },
  {
    id: '39',
    message: "If you're ready, you can take the quiz to become a Cloud Detective. You'll be great!",
    trigger: '40',
  },
  {
    id: '40',
    message: "Goodbye 🌱👋",
    trigger: '41',
  },
  {
    id: '41',
    options: [
      { value: 1, label: "👋", trigger: '42' },
      { value: 2, label: "Byyyye Eco", trigger: '42' },
    ],
  },
  {
    id: '42',
    component: 
    <LinkComponent url="data-bot" text="Take me to talk to Data!"/>,
    trigger: '43',
  },
  {
    id: '43',
    component: 
    <LinkComponent url="astro-bot" text="Take me to talk to Astro!"/>,
    trigger: '44',
  },
  {
    id: '44',
    component: 
    <LinkComponent url="nemo-bot" text="Take me to talk to Nemo!"/>,
    trigger: '45',
  },
  {
    id: '45',
    component: 
    <LinkComponent url="cd-gang-quiz-bot" text="I'm ready for the quiz! ⭐"/>,
    end: true,
  },
];

export default EcoBot;
