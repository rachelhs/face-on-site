import React from 'react';
import { Nav } from './style';
import Logo from '../../../images/logos/FACE-ON_Logo-no-border.svg'
import logoStyles from '../../sections/logo.module.css'

const NavBar = () => (
      <Nav>
      <img className={logoStyles.logo} src={Logo} alt="Logo"></img>
        </Nav>
);

export default NavBar;