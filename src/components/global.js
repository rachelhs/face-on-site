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
`;

export const TitleText = styled.div`
padding: 15px;
padding-top: 18px;
line-height: 20px;
${props => props.theme.font_size.regular};

@media (min-width: ${props => props.theme.screen.sm}) {
  padding: 40px;
}`
;

export const ParagraphText = styled.div`
margin-top: 40px;
margin-left: 50px;
margin-right: 50px;
@media (min-width: ${props => props.theme.screen.sm}) {
  margin-top: 70px;
}`;


