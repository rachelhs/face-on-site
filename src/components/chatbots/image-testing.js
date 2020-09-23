import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import chatbotStyles from './chatbots.module.css';
import styled from 'styled-components';

//CD1
import cdgang from '../../images/art/cdGangcolour.png';
import clouds from '../../images/chatbots/clouds.jpg';
import mikeTV1 from '../../images/chatbots/mike_tv_1.gif';
import mikeTV2 from '../../images/chatbots/mike_tv_2.gif';
//Astro
import dataCentres from '../../images/chatbots/data-centres-google-images.png';
import climateGif from '../../images/chatbots/200w_d.gif';
import astroImage from '../../images/art/astroColour.png';
import satellite from '../../images/chatbots/satellite.jpg';
//Data
import dataCentre from '../../images/art/inside-data-centre.jpg'
import airCon from '../../images/art/airconditioning.jpeg'
import dataImage from '../../images/art/dataColour.png'
//Eco
import Cows from '../../images/art/cows1.jpg';
import Deforestation from '../../images/art/deforestation.jpg';
import FossilFuels from '../../images/art/fossil-fuels.jpg';
import ecoImage from '../../images/art/ecoColour.png'
//Nemo
import nemoImage from '../../images/art/nemoColour.png';
import underwatercables from '../../images/chatbots/underwatercables.gif';
import telegraph from '../../images/chatbots/telegraph.gif'
//Postie
import postieImage from '../../images/art/PostieColour.png'; 
import womenTelephone from '../../images/chatbots/women_telephone.gif';
import atusa from '../../images/chatbots/Atusa.jpg';
import pennyBlack from '../../images/chatbots/penny_black.jpg';
import youGotMail from '../../images/chatbots/you_got_mail.gif';
import timBernersLee from '../../images/chatbots/Tim_Berners_Lee.jpg';
import dialUp from '../../images/chatbots/dial_up.gif';
import internet from '../../images/chatbots/internet.gif';
import staceyHorn from '../../images/chatbots/stacey_horn.jpg';
import globalNetwork from '../../images/chatbots/global_network.gif';
import cloudRain from '../../images/chatbots/cloud_rain_photos.gif';

const lightBotColour = "#9cd3d4";
const darkBotColour = "#00a6a7"; 
const lightUserColour = "#9f9fcf";
const DarkUserColour = "#404d9c";

const Images = () => (
  <Wrapper>
    <Title className = { chatbotStyles.title }>Testing Images</Title>
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
    // CD1
    { 
        id: '1',
        message: "CD1",
        trigger: '2', 
    },
    {
    id: '2',
    component: 
       <img src={cdgang} className={chatbotStyles.image} alt="Cloud Detectives Gang" />
    ,        
    trigger: '3',
  },
  {
    id: '3',
    component: 
       <img src={clouds} className={chatbotStyles.image} alt="clouds in the sky" />
    ,        
    trigger: '4',
  },
  {
    id: '4',
    component: 
       <img src={mikeTV1} className={chatbotStyles.image} alt="scene from the film Charlie and the Chocolate Factory where Mike TV is broken into tiny pieces and sent to a television" />
    ,        
    trigger: '5',
  },
  {
    id: '5',
    component: 
       <img src={mikeTV2} className={chatbotStyles.imageLong} alt="scene from the film Charlie and the Chocolate Factory where Mike TV is broken into tiny pieces and sent to a television" />
    ,        
    trigger: '6',
  },
  //ASTRO
  { 
    id: '6',
    message: "Astro",
    trigger: '7', 
},
{
    id: '7',
    component: 
    <img src={astroImage} className={chatbotStyles.image} alt="Astro" />
    ,
    trigger: '8',
  },
  {
    id: '8',
    component: 
    <img src={dataCentres} className={chatbotStyles.image} alt="Data Centres from google maps" />
    ,
    trigger: '9',
  },
  {
    id: '9',
    component: 
       <img src={satellite} className={chatbotStyles.image} alt="Data Centres from google maps" />
      , 
    trigger: '10',
  },
  {
    id: '10',
    component: 
       <img src={climateGif} className={chatbotStyles.image} alt="Data Centres from google maps" />
      ,        
    trigger: '11',
  },
//DATA
   // CD1
   { 
    id: '11',
    message: "data",
    trigger: '12', 
},
    {  
    id: '12',
    component: 
    <img src = {dataImage} className = { chatbotStyles.image } alt = "Data" />,
    trigger: '13',
  },
  {
    id: '13',
    component: 
    <img src = { dataCentre } className = { chatbotStyles.image } alt = "Inside a data centre" />,
    trigger: '14',
  },
  {
    id: '14',
    component: 
    <img src = { airCon } className = { chatbotStyles.imageLowRes } alt = "Air conditioning unit for cooling data center" />,
    trigger: '15',
  },
//eco
   // CD1
   { 
    id: '15',
    message: "eco",
    trigger: '16', 
},
{
    id: '16',
    component: 
    <img src = { ecoImage } className = { chatbotStyles.image } alt = "Eco" />,
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
    component: 
    <img src = { Deforestation } className = { chatbotStyles.image } alt = "Forest being cut down" />,
    trigger: '19',
  },
  {
    id: '19',
    component: 
    <img src = { Cows } className = { chatbotStyles.image } alt = "Cows" />,
    trigger: '20',
  },
// nemo
   // CD1
   { 
    id: '20',
    message: "nemo",
    trigger: '21', 
},
{
    id: '21',
    component: 
    <img src={nemoImage} className={chatbotStyles.image} alt="Nemo" />
    ,
    trigger: '22',
  },
  {
    id: '22',
    component: 
    <img src={telegraph} className={chatbotStyles.image} alt="entering telegraph data" />
    ,
    trigger: '23',
  },
  {
    id: '23',
    component: 
       <img src={underwatercables} className={chatbotStyles.imageVeryLong} alt="Data Centres from google maps" />
      ,        
    trigger: '24',
  },
//postie
   // CD1
   { 
    id: '24',
    message: "postie",
    trigger: '25', 
},
{
    id: '25',
    component: 
       <img src={postieImage} className={chatbotStyles.image} alt="Postie" />
      ,        
    trigger: '26',
  },
  {
    id: '26',
    component: 
       <img src={womenTelephone} className={chatbotStyles.image} alt="Women telephone operators in the 1951" />
      ,        
    trigger: '27',
  },
  {
    id: '27',
    component: 
       <img src={atusa} className={chatbotStyles.image} alt="Statue of the head of Queen Atusa" />
      ,        
    trigger: '28',
  },
  {
    id: '28',
    component: 
       <img src={pennyBlack} className={chatbotStyles.image} alt="Penny Black Stamp" />
    ,        
    trigger: '29',
  },
  {
    id: '29',
    component: 
       <img src={youGotMail} className={chatbotStyles.image} alt="Sending emails in the 1998 film You've Got Mail" />
    ,        
    trigger: '30',
  },
  {
    id: '30',
    component: 
       <img src={timBernersLee} className={chatbotStyles.imageLong} alt="Sir Tim Berners Lee sat in front of PC" />
    ,        
    trigger: '31',
  },
  {
    id: '31',
    component: 
       <img src={dialUp} className={chatbotStyles.imageLong} alt="The internet connection icon from the 1990s" />
    ,        
    trigger: '32',
  },
  {
    id: '32',
    component: 
       <img src={internet} className={chatbotStyles.imageLong} alt="graphic representation of online messages being sent around the world" />
    ,        
    trigger: '33',
  },
  {
    id: '33',
    component: 
       <img src={staceyHorn} className={chatbotStyles.image} alt="Stacey Horn sat in front of her PC in the 90s" />
    ,        
    trigger: '34',
  },
  {
    id: '34',
    component: 
       <img src={globalNetwork} className={chatbotStyles.imageLong} alt="graphic representation of data travelling around the world" />
    ,        
    trigger: '35',
  },
  {
    id: '35',
    component: 
       <img src={cloudRain} className={chatbotStyles.image} alt="Gif of a cloud raining photos" />
    ,        
    trigger: '36',
  },
  { 
    id: '36',
    message: "End of images",
    end: true
},
];

export default Images;
