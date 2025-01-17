import React from 'react';
import { Section, Container, GenderContainer, Title, TitleText, OpensForContainer, GenderSelected, GenderNotSelected, ResultsText } from '@components/global';
import image1 from '../../images/results/001.png';
import image2 from '../../images/results/002.png';
import image3 from '../../images/results/003.png';
import image4 from '../../images/results/004.png';
import image5 from '../../images/results/005.png';
import image51 from '../../images/results/0051.png';
import image6 from '../../images/results/006.png';
import image7 from '../../images/results/007.png';
import image8 from '../../images/results/008.png';
import image9 from '../../images/results/009.png';
import image10 from '../../images/results/010.png';
import image11 from '../../images/results/011.png';
import image12 from '../../images/results/012.png';
import image13 from '../../images/results/013.png';
import image14 from '../../images/results/014.png';
import image15 from '../../images/results/015.png';
import image16 from '../../images/results/016.png';
import image17 from '../../images/results/017.png';
import image18 from '../../images/results/018.png';
import image19 from '../../images/results/019.png';
import image20 from '../../images/results/020.png';
import image21 from '../../images/results/021.png';
import image22 from '../../images/results/022.png';
import image23 from '../../images/results/023.png';
import image24 from '../../images/results/024.png';
import image25 from '../../images/results/025.png';
import image26 from '../../images/results/026.png';
import image27 from '../../images/results/027.png';
import image28 from '../../images/results/028.png';
import image29 from '../../images/results/029.png';
import image30 from '../../images/results/030.png';
import image31 from '../../images/results/031.png';


import resultsStyles from './results.module.css';

const Results = () => (
    <Section id="results">
        <Container style={{ position: 'relative' }}>
            <Title><TitleText>RESULTS</TitleText></Title>
            <div className={resultsStyles.space}></div>
            {/* CHALLENGE 1 FEMALE 56 - 70 */}

            <OpensForContainer>
                <ResultsText>Opens For:</ResultsText>
                <GenderContainer className={resultsStyles.genderContainer}>
                    <GenderSelected>FEMALE</GenderSelected>
                    <GenderNotSelected>GENDERLESS</GenderNotSelected>
                    <GenderNotSelected>MALE</GenderNotSelected>
                </GenderContainer>
                <ResultsText>Age: </ResultsText>
                <GenderSelected>56 - 70</GenderSelected>
            </OpensForContainer>

            {/* FEMALE 56 - 70 IMAGES GO BELOW HERE */}
            <img className={resultsStyles.resultsImage} src={image5} alt="person accepted entry"></img>
            {/* CHALLENGE 2 MALE 11 - 25 */}

            <OpensForContainer>
                <ResultsText>Opens For:</ResultsText>
                <GenderContainer>

                <GenderNotSelected>FEMALE</GenderNotSelected>
                <GenderNotSelected>GENDERLESS</GenderNotSelected>
                <GenderSelected>MALE</GenderSelected>
                </GenderContainer>

                <ResultsText>Age: </ResultsText>
                <GenderSelected>11 - 25</GenderSelected>
            </OpensForContainer>

            {/* MALE 11 - 25 IMAGES GO BELOW HERE */}


            <img className={resultsStyles.resultsImage} src={image2} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image24} alt="person denied entry"></img>

            {/* CHALLENGE 3 GENDERLESS 26 - 40 */}

            <OpensForContainer>
                <ResultsText>Opens For:</ResultsText>
                <GenderContainer>

                <GenderNotSelected>FEMALE</GenderNotSelected>
                <GenderSelected>GENDERLESS</GenderSelected>
                <GenderNotSelected>MALE</GenderNotSelected>
                </GenderContainer>

                <ResultsText>Age: </ResultsText>
                <GenderSelected>26 - 40</GenderSelected>
            </OpensForContainer>

            {/* GENDERLESS 26 - 40 IMAGES GO BELOW HERE */}


            {/* ACCESS DENIED */}
            {/* IMAGES GO BELOW HERE */}


            <img className={resultsStyles.resultsImage} src={image1} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image3} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image4} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image51} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image6} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image7} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image8} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image9} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image10} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image11} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image12} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image13} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image14} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image15} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image16} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image17} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image18} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image19} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image20} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image21} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image22} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image23} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image25} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image26} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image27} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image28} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image29} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image30} alt="person denied entry"></img>
            <img className={resultsStyles.resultsImage} src={image31} alt="person denied entry"></img>


        </Container>
    </Section>
);
export default Results;