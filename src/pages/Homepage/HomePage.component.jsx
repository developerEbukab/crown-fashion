import React from 'react';
import Directory from '../../components//Directory/Directory.component';
import { HomePageContainer } from './Homepage.styles';
import "./Homepage.styles.scss";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory/>
    </HomePageContainer>
  );
};

export default HomePage;
