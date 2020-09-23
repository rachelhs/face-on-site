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

export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 30px 0;
  }

    ${props => {
    if (props.accent === 'dark') {
      return `
        background-color: ${props.theme.colour.blue.dark};
        color: ${props.theme.colour.text.light}
    `
    } else if (props.accent === 'mid') {
      return `
        background-color: ${props.theme.colour.blue.mid};
        color: ${props.theme.colour.text.light}
    `
    } else  if (props.accent === 'light'){
      return `
      background-color: ${props.theme.colour.blue.light};
      color: ${props.theme.colour.text.dark}
    `
    } else  if (props.accent === 'pink'){
      return `
      background-color: ${props.theme.colour.pink};
      color: ${props.theme.colour.text.dark}
    `
    } else {
      return `
      background-color: ${props.theme.colour.white};
      color: ${props.theme.colour.text.dark}
    `
    }
  }}
`;

