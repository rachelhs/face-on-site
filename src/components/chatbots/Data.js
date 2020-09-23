import React from 'react';
import ChatBot from 'react-simple-chatbot';
import LinkComponent from './LinkComponent';
// styles
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';
// images
import dataCentre from '../../images/art/inside-data-centre.jpg'
import airCon from '../../images/art/airconditioning.jpeg'
import dataIcon from '../../images/art/dataIcon.png'
import dataImage from '../../images/art/dataColour.png'

const lightBotColour = "#b0d5a8";
const darkBotColour = "#3aab50";
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const DataBot = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Data</Title>
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
        botAvatar = { dataIcon }
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
  botBubbleColor: darkBotColour, // colour of Data's speech
  userBubbleColor: lightUserColour, // colour of user's speech (light)
  botFontColor: 'white', // font colour of Data's speech
  userFontColor: 'black', // font colour when user has selected answer
  headerFontColor: lightBotColour,
};

const steps = [
  {
    id: '1',
    message: "Hello, I'm Data.",
    trigger: '1.5',
  },
  {
    id: '1.5',
    component: 
    <img src = {dataImage} className = { chatbotStyles.image } alt = "Data" />,
    trigger: '2',
  },
  {
    id: '2',
    message: "It's great to meet you!",
    trigger: '3'

  },
  {
    id: '3',
    message: "I'm here to help you on your quest to become a cloud detective! 🕵️",
    trigger: '4'

  },
  {
    id: '4',
    options: [
      { value: 1, label: "👋", trigger: '5' },
      { value: 2, label: "Hello", trigger: '5' },
    ],
  },
  {
    id: '5',
    message: " You're probaby here because you've already spoken to my friends, and now you want to know about data centers.",
    trigger: '6',
  },
  {
    id: '6',
    options: [
      { value: 1, label: "That's right!", trigger: '8' },
      { value: 2, label: "No, not really!", trigger: '7' },
      { value: 3, label: "I already know about data centers!", trigger: '10' },

    ],
  },
  {
    id: '7',
    message: "Data centers are fascinating!",
    trigger: '8',
  },
  {
    id: '8',
    message: "Do you know what a data center is?",
    trigger: '9',
  },
  {
    id: '9',
    options: [
      { value: 1, label: "Yes", trigger: '10' },
      { value: 2, label: "No idea!", trigger: '12' },
    ],
  },
  {
    id: '10',
    message: "That's great! Try and explain out loud what you think a data center is.",
    trigger: '11',
  },
  {
    id: '11',
    options: [
      { value: 1, label: "Now you tell me", trigger: '12' },
      { value: 2, label: "Done it!", trigger: '12' },
    ],
  },
  {
    id: '12',
    message: "A data center is a big building where lots of computers are stored. These computers work together to solve complex problems that one computer can't do alone.",
    trigger: '13',
  },
  {
    id: '13',
    message: "They also store information like vidoes, photos and websites. Every time you look at a website, the website is actually stored in a data center.",
    trigger: '14',
  },
  {
    id: '14',
    message: "These computers are always switched on and using energy.",
    trigger: '15',
  },
  {
    id: '15',
    message: "Another way of saying this, is that this information is stored in 'The Cloud'",
    trigger: '16',
  },
  {
    id: '16',
    options: [
      { value: 1, label: "I don't understand...", trigger: '17' },
      { value: 2, label: "What do they look like?", trigger: '17' },
    ],
  },
  {
    id: '17',
    component: 
    <img src = { dataCentre } className = { chatbotStyles.image } alt = "Inside a data centre" />,
    trigger: '18',
  },
  {
    id: '18',
    message: "Here's a photo. Each isle contains many many computers, you can see them in this photo  🖥️🖥️🖥️🖥️",
    trigger: '19',
  },
  {
    id: '19',
    options: [
      { value: 1, label: "Why are they always switched on? 💡", trigger: '21' },
      { value: 2, label: "Do I use data centers?", trigger: '20' },
      { value: 3, label: "Why is it called 'The Cloud'? ☁️", trigger: '24' },
    ],
  },
  //Do I use data centers?
  {
    id: '20',
    message: "Yes. Every time you look at your favourite website, a video on youtube, play a game online or listen to music online, your computer is showing you information that is actually stored in a data centre.",
    trigger: '26',
  },
  //Why are they always switched on? 💡
  {
    id: '21',
    message: "When you're not using your computer or ipad at home, you turn it off.",
    trigger: '22',
  },
  {
    id: '22',
    message: "but the computers in data centers can't be turned off because people from all over the world are using them all the time.",
    trigger: '23',
  },
  {
    id: '23',
    message: "For example, when it's night time here, it's still the day time in Australia, so a child in Australia might be playing Minecraft.",
    trigger: '28',
  },
  //Why is it called 'The Cloud'? 
  {
    id: '24',
    message: "That's a good question because 'The Cloud' is just a collection of computers which store data. It's nothing like the clouds in the sky.",
    trigger: '25',
  },
  {
    id: '25',
    message: "The cloud is a metaphor for a network of computers connecting with each other.",
    trigger: '27',
  },
  // replies to above 3
  {
    id: '26',
    options: [
      { value: 1, label: "Are data centers bad for the environment? 🌲☀️", trigger: '32' },
      { value: 2, label: "Where do data centers live?", trigger: '29' },
    ],
  },
  {
    id: '27',
    options: [
      { value: 1, label: "Do I use 'The Cloud' and data centers?", trigger: '20' },
      { value: 2, label: "☁️☁️☁️☁️", trigger: '31' },
      { value: 3, label: "Why are they always switched on? 💡", trigger: '21' },
    ],
  },
  {
    id: '28',
    options: [
      { value: 1, label: "Woah weird!", trigger: '26' },
      { value: 2, label: "Where do data centers live?", trigger: '29' },
    ],
  },
  //Where do data centers live?
  {
    id: '29',
    message: "There are data centers all around the world. 🌍🌎🌏",
    trigger: '30',
  },
  //Where do data centers live?
  {
    id: '30',
    options: [
      { value: 1, label: "Tell me more about the energy they use", trigger: '32' },
    ],
  },
  // Do I use data centers?
  {
    id: '31',
    options: [
      { value: 1, label: "Do I use 'The Cloud' and data centers?", trigger: '20' },
    ],
  },
  //next part of flow
  {
    id: '32',
    message: "Data centers use a lot of electricity.",
    trigger: '33',
  },
  {
    id: '33',
    message: "Why do you  think they need a lot of power to run?",
    trigger: '34',
  },
  {
    id: '34',
    options: [
      { value: 1, label: "1. because all computers need electricity to run", trigger: '35' },
      { value: 2, label: "2. because there's so many computers!", trigger: '35' },
      { value: 3, label: "3. to cool the computers down and prevent them overheating", trigger: '35' },
    ],
  },
  {
    id: '35',
    message: "The two main uses of energy are:",
    trigger: '36',
  },
  {
    id: '36',
    message: "1.  The energy it takes for computers to respond to all the requests needed - like showing you the right website when you search for it.",
    trigger: '37',
  },
  {
    id: '37',
    message: "2. Computers get really hot working so hard. To stop the computers overheating, every data center has a cooling system. These cooling systems use a lot of energy. The more efficent the system is, the better for the environment",
    trigger: '38',
  },
  {
    id: '38',
    message: "This is a photo of an airconditioning unit cooling a data center",
    trigger: '39',
  },
  {
    id: '39',
    component: 
    <img src = { airCon } className = { chatbotStyles.imageLowRes } alt = "Air conditioning unit for cooling data center" />,
    trigger: '40',
  },
  {
    id: '40',
    message: "Guess how much fuel all the data centers in the world need to keep working?",
    trigger: '41',
  },
  {
    id: '41',
    options: [
      { value: 1, label: " the same amount of fuel as all the aeroplanes in the world need to fly ✈️✈️✈️✈️✈️", trigger: '43' },
      { value: 2, label: " The same amount of fuel as my car needs to drive for a year 🚗🚗🚗🚗", trigger: '42' },
      { value: 3, label: " The same amount of fuel as all the lightbulbs use in my house 🏠🏠🏠🏠", trigger: '42' },
    ],
  },
  {
    id: '42',
    message: "Data centers actually use the same amount of fuel as all the aeroplanes in the world need to fly.",
    trigger: '45',
  },
  {
    id: '43',
    message: "Yes, that's right! You'll make a great member of the CG Gang!",
    trigger: '44',
  },
  {
    id: '44',
    message: "Data centers use the same amount of fuel per year as all the aeroplanes in the world.",
    trigger: '45',
  },
  {
    id: '45',
    message: "  Do you think that data centers are bad for the enivornment?",
    trigger: '46',
  },
  {
    id: '46',
    options: [
      { value: 1, label: "Yes", trigger: '47' },
      { value: 2, label: "No", trigger: '47' },
    ],
  },
  {
    id: '47',
    message: "Data Centers can be good for environment because it means people can share the same computers.",
    trigger: '48',
  },
  {
    id: '48',
    message: "I want you to imagine something for me...",
    trigger: '49',
  },
  {
    id: '49',
    options: [
      { value: 1, label: "Okay!", trigger: '50' },
      { value: 2, label: "🤯", trigger: '50' },
      { value: 3, label: "Imagine what?", trigger: '50' },
    ],
  },
  {
    id: '50',
    message: " Imagine you have a big box of lego,  it has all the blocks you need to make everything you want.  🎁",
    trigger: '51',
  },
  {
    id: '51',
    message: "Now imagine that instead of having that box in your bedroom, you store that lego in a big box where other children can also use the bricks. ",
    trigger: '52',
  },
  {
    id: '52',
    message: "You all share the same box to store the lego and everone can access the blocks whenever they like. It's good for you because your bedroom's not full of lego, but you can still use any lego you want when you want to play.",
    trigger: '53',
  },
  {
    id: '53',
    message: "That's similar with data centers. Before 'The Cloud', people still stored their information in data centers, but companies would have their own server (box of lego). Even when they weren't using it, it will still be switched on and using energy.",
    trigger: '54',
  },
  {
    id: '54',
    message: "So in many ways data centers have the potential to save energy.",
    trigger: '55',
  },
  {
    id: '55',
    options: [
      { value: 1, label: "I like lego!", trigger: '56' },
      { value: 2, label: "🤯", trigger: '56' },
      { value: 3, label: "...so are all data centers good for the environment?", trigger: '57' },
    ],
  },
  {
    id: '56',
    options: [
      { value: 1, label: "...so are all data centers good for the environment?", trigger: '57' },
    ],
  },
  {
    id: '57',
    message: "It depends on the data center!",
    trigger: '58',
  },
  {
    id: '58',
    message: "The type of energy which powers data centers is electricity.",
    trigger: '59',
  },
  {
    id: '59',
    message: " Using electricity means that data centers can be run on energy that doesn’t hurt the environment, like wind and solar power.  The problem is that most data centers currently use fossil fuels to generate electricity, which are bad for the environment.",
    trigger: '60',
  },
  {
    id: '60',
    options: [
      { value: 1, label: "Tell me more about bad data centers", trigger: '65' },
      { value: 2, label: "Tell me more about good data centers", trigger: '61' },
    ],
  },
  // good data centers
  {
    id: '61',
    message: "If you spoke to my friend Astro earlier, they will have told you about Goonhilly Data Center!",
    trigger: '62',
  },
  {
    id: '62',
    message: "Goonhilly is a great example of a green data center 🌱",
    trigger: '63',
  },
  {
    id: '63',
    message: "Data centers can be renewable if they use 100% renewable energy to power them",
    trigger: '64',
  },
  {
    id: '64',
    options: [
      { value: 1, label: "🙌", trigger: '69' },
      { value: 2, label: "😃", trigger: '69' },
      { value: 3, label: "🌳🌲🌴", trigger: '69' },
    ],
  },
  // bad data centers
  {
    id: '65',
    message: "It often depends on the location of the data centers and how much renewable energy they use.",
    trigger: '66',
  },
  {
    id: '66',
    message: "For example, Northern Virginia in the USA has many data centers. In fact, 70% of the world’s internet searches pass through a place called “Data Center Alley” in  Northern Virginia",
    trigger: '67',
  },
  {
    id: '67',
    message: "Sadly, this isn't good for the environment because Virginia generates less than 2 percent of its energy from renewable sources.",
    trigger: '68',
  },
  {
    id: '68',
    options: [
      { value: 1, label: "wow, that's not good", trigger: '69' },
      { value: 2, label: "😟", trigger: '69' },
      { value: 3, label: "🌳🌲🌴", trigger: '69' },
    ],
  },
  // back to general path
  {
    id: '69',
    message: "My friend Eco told me that you know all about how you can help the environment and live more sustainably!",
    trigger: '70',
  },
  {
    id: '70',
    options: [
      { value: 1, label: "Yes!", trigger: '72' },
      { value: 2, label: "💪", trigger: '72' },
      { value: 3, label: "I don't remember learning about that!", trigger: '71' },
    ],
  },
  {
    id: '71',
    message: "Talk to Eco! Or if you have already spoken to Eco, you can read back over your conversation.",
    trigger: '73',
  },
  {
    id: '72',
    message: "You're amazing! You now know all about how the internet uses energy!!",
    trigger: '73',
  },
  {
    id: '73',
    message: "It's been really nice to meet you 👋. Talk to my other friends, or if you're ready, take the quiz and get your CD detective badge!",
    trigger: '74',
  },
  {
    id: '74',
    component: 
    <LinkComponent url="eco-bot" text="Take me to Eco!"/>,
    trigger: '75',
  },
  {
    id: '75',
    component: 
    <LinkComponent url="astro-bot" text="Take me to Astro!"/>,
    trigger: '76',
  },
  {
    id: '76',
    component: 
    <LinkComponent url="nemo-bot" text="Take me to Nemo!"/>,
    trigger: '77',
  },
  {
    id: '77',
    component: 
    <LinkComponent url="cd-gang-quiz-bot" text="I'm ready for the quiz! ⭐"/>,
    end: true,
  },
];

export default DataBot;
