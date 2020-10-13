import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 900px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1150px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const FirstContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 900px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1150px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 30px 0;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    padding: 60px 0px 0;
  }

    ${props => {
    if (props.accent === 'green') {
      return `
        background-color: ${props.theme.colour.green};
        color: ${props.theme.colour.text.black}
    `
    } else {
      return `
      background-color: ${props.theme.colour.white};
      color: ${props.theme.colour.text.black}
    `
    }
  }}
`;

export const FirstSection = styled.section`
padding: 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 0;

  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 50px;
  margin: 0 50px;
  }`
  ;

  export const TitleFAQ = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 50px;
  margin: 30px 50px;
  background-color: #00FF00;
  }`
  ;


export const OpensForContainer = styled.div`

  margin: 30px -30px;
  display: flex;
  flex-direction: rows;
  justify-content: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  `;

export const GenderContainer = styled.div`

  display: flex;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: flex;
    flex-direction: rows;
    justify-content: space-evenly;
  }

  `;

export const GenderSelected = styled.div`


@media (max-width: ${props => props.theme.screen.md}) {
  font-size: 10px;
  height: 20px;
  padding: 10px 20px;
  width: 120px;
  margin: 0;
}
  height: 30px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 50px;
  padding: 0px 30px;
  ${props => props.theme.font_size.small};
  }

`
  ;

export const GenderNotSelected = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 50px;
  padding: 10px 30px;
  color: #c8c8c8;
  height: 30px;

  ${props => props.theme.font_size.small};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    font-size: 10px;
    height: 20px;
    padding: 10px 20px;
    width: 120px;
    margin: 0;
  }
  
  `
  ;

export const ResultsText = styled.div`
${props => props.theme.font_size.small};
margin: auto 0;

@media (max-width: ${props => props.theme.screen.md}) {
  ${props => props.theme.font_size.xsmall};
  margin: 0;

}`
  ;

export const TitleText = styled.div`
padding: 15px;
padding-top: 18px;
line-height: 18px;
${props => props.theme.font_size.small};

@media (min-width: ${props => props.theme.screen.sm}) {
  padding: 30px;
  ${props => props.theme.font_size.large};

}`
  ;

export const ParagraphText = styled.div`
margin-top: 40px;
margin-left: 50px;
margin-right: 50px;
@media (min-width: ${props => props.theme.screen.sm}) {
  margin-top: 70px;
}`;

export const ParagraphTextFAQ = styled.div`
margin-top: 30px;
margin-left: 50px;
margin-right: 50px;
@media (min-width: ${props => props.theme.screen.sm}) {
  margin-top: 30px;
}`;

