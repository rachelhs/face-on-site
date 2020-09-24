import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

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
    padding: 0 36px;
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
  margin-top: 107px;
  padding: 0 16px;

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
    padding: 0 36px;
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

    ${props => {
    if (props.accent === 'green') {
      return `
        background-color: ${props.theme.colour.green};
        color: ${props.theme.colour.text.black}
    `
    }  else {
      return `
      background-color: ${props.theme.colour.white};
      color: ${props.theme.colour.text.black}
    `
    }
  }}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 50px;
`;

export const TitleText = styled.div`
padding: 10px;
${props => props.theme.font_size.regular};
`;


