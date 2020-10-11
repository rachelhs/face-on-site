import React from 'react';
import { Section, Container, GenderContainer, Title, TitleText, OpensForContainer, GenderSelected, GenderNotSelected, ResultsText } from '@components/global';
import image1 from '../../images/results/001.png';
import image2 from '../../images/results/002.png';
import resultsStyles from './results.module.css';

const Results = () => (
    <Section id="results">
        <Container style={{ position: 'relative' }}>
            <Title><TitleText>RESULTS</TitleText></Title>
            <div className={resultsStyles.space}></div>
            {/* CHALLENGE 1 FEMALE 56 - 70 */}

            <OpensForContainer>
                <ResultsText>Opens For:</ResultsText>
                <GenderContainer>
                    <GenderSelected>FEMALE</GenderSelected>
                    <GenderNotSelected>GENDERLESS</GenderNotSelected>
                    <GenderNotSelected>MALE</GenderNotSelected>
                </GenderContainer>
                <ResultsText>Age: </ResultsText>
                <GenderSelected>56 - 70</GenderSelected>
            </OpensForContainer>

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

            <img className={resultsStyles.resultsImage} src={image2} alt="person denied entry"></img>

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

            {/* ACCESS DENIED */}

            <img className={resultsStyles.resultsImage} src={image1} alt="person denied entry"></img>

        </Container>
    </Section>
);
export default Results;