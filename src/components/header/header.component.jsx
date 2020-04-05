import React from 'react';

import { ReactComponent as Backicon } from '../../assests/back.svg';
import { ReactComponent as Settingsicon } from '../../assests/settings.svg';

import { HeaderContainer, LogoContainer, Text } from './header.styles';

const Header = ( ) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Backicon className="logo" />
    </LogoContainer>
      <Text to="/">
        Hår
      </Text>
    <LogoContainer>
    <Settingsicon className="settings"/>
    </LogoContainer>
  </HeaderContainer>
);

export default Header;