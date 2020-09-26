import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 16px 0;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  margin-top: 20px;
  z-index: 1000;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 95%;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 95%;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 95%;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 95%;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.regular};

  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.colour.white};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 40px;
  text-align: center;
  background: ${props => props.theme.colour.white};
  a {
    font-size: 40px;
  }
  ul {
    margin-top: 0;
    padding-top: 30px;
  }
  li {
    padding: 15px 0 15px 0;
  }
`;

export const Brand = styled.div`
  margin-left: 10px;
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
