import React from 'react';
import { RootContainer } from '@/views/Home/Home.style';
import HomeTopInfoSection from '@/views/Home/Sections/HomeTopInfoSection/HomeTopInfoSection';
import SectionSeparator from '@/components/SectionSeparator/SectionSeparator';
import { palette } from '@/theme/palette';

const Home = () => {
  return (
    <RootContainer>
      <HomeTopInfoSection />
      <SectionSeparator backgroundColor={palette.background.green}/>
    </RootContainer>
  );
};

export default Home;
