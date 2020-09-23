import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import bookStyles from './book.module.css';

import { Section, Container } from '@components/global';
import TextScroll from '../common/TextScroll';

const Book = () => (
  <StaticQuery
    query={graphql`
      query {
        art_book1: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "book-spread1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_booka: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "book-spread1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1074) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_bookb: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "book-spread2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1074) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_bookc: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "book-spread3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1074 ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_cdgang: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cdGangcolour" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="book">
        <Container>
        <h1>Looking for The Cloud Book</h1>
              <TextScroll text={<p>Looking for The Cloud is an augmented reality children’s book (ages 5-8) which invites readers on a quest with The Cloud Detectives Gang.</p>}></TextScroll>
              <TextScroll text={<p>
                <Art>
                    <Img fluid={data.art_booka.childImageSharp.fluid} />
                </Art>  
              </p>}></TextScroll>
              <TextScroll text={<p>To learn how the Internet works and how we can make it more environmentally sustainable.</p>}></TextScroll>
              <TextScroll text={<p>
                <Art>
                    <Img fluid={data.art_bookb.childImageSharp.fluid} />
                </Art>  
              </p>}></TextScroll>
              <TextScroll text={<p>Readers can hold up your phone or tablet’s camera to the pages of the book and you to can join in the adventure through fun chatbot characters and pages that come to life with a 3D virtual experience.</p>}></TextScroll>            
              <TextScroll text={<p>
                <Art>
                    <Img fluid={data.art_bookc.childImageSharp.fluid} />
                </Art>  
               </p>}></TextScroll>
                <TextScroll text={
                <div>
                <p>Looking for The Cloud is written by the children’s author Dr Jo Elworthy and the LFTC Team. Illustrations by Poppy Crew.</p>         
                <p>Dr Jo Elworthy is author of many children’s’ books about the environment, horticulture and botany. She is Director of Interpretation at Eden Project Cornwall.</p>
                </div>
                }></TextScroll>        
            <Grid>
              <TextScroll text={
                <div>
                  <h2>Be a part of the cloud detective gang!</h2>
                  <p>Join Jada, Dalia, Kai and Holly the dog on their quest to find out about The Cloud and how we can make it more sustainable.</p>
                  <p>Click <a className={bookStyles.link} href="/cd-gang-first-bot" target="_blank" rel="noopener noreferrer">here</a> to join the cloud detective gang!</p>
                </div>
              }></TextScroll>
              <ArtSmall>
                  <Img fluid={ data.art_cdgang.childImageSharp.fluid }/>
              </ArtSmall>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  padding-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  h2 {
    margin-bottom: 16px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    padding-top: 0px;
    margin-bottom: 96px;
    margin: 0px 0;

    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 100%;
  width: 100%;
`;

const ArtSmall = styled.figure`
  margin: 0;
  max-width: 1074px;
  width: 85%;
  @media (max-width: ${props => props.theme.screen.md}) {
    max-width: 70%;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    max-width: 100%;
  }
`;

export default Book;