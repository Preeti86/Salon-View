import React from 'react';
import Dropdown from '../../components/drop-down/drop-down.component';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './HomePage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Dropdown />
    <Directory />
  </HomePageContainer> 
);

export default HomePage;