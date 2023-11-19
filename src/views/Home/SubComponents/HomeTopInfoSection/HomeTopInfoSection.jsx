import React from 'react';
import {
  ImageContainer,
  InfoContainer,
  LogoContainer, PolygonBackgroundContainer, PolygonBackgroundContent,
  RootContainer, Subtitle, Title,
} from '@/views/Home/SubComponents/HomeTopInfoSection/HomeTopInfoSection.style';
import NextImg from '@/components/UI/NextImg/NextImg';
import AppLogoIcon from '@/components/icons/AppLogoIcon';
import { Grid } from '@mui/material';
import PolygonBackground from '@/components/pictograms/PolygonBackground';

const HomeTopInfoSection = () => {
  return (
    <RootContainer>
      <Grid container>
        <Grid xs={6}>
          <ImageContainer>
            <NextImg src={'/images/Heroes.webp'} width={707} height={401} alt='Heroes' priority />
          </ImageContainer>
        </Grid>
        <Grid xs={6}>
          <InfoContainer>
            <LogoContainer>
              <AppLogoIcon />
            </LogoContainer>
            <Title tag={'h1'}>
              Play-To-Earn, Active Board RPG
            </Title>
            <Subtitle>
              With unique combat system, designed on the principle <span>&quot;Easy to Learn, Difficult to Master.&quot;</span>
            </Subtitle>
          </InfoContainer>
        </Grid>
      </Grid>
      <PolygonBackgroundContainer>
        <PolygonBackgroundContent>
          <img src={'/images/HomeTopPolygonBackground.svg'} />
        </PolygonBackgroundContent>
      </PolygonBackgroundContainer>
    </RootContainer>
  );
};

export default HomeTopInfoSection;