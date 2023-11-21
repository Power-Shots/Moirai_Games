import React from 'react';
import {
  AboutInfoContainer, Content,
  ImageContainer,
  InfoContainer,
  LogoContainer, PolygonBackgroundContainer, PolygonBackgroundContent,
  RootContainer,
  Subtitle,
  Title, YellowSpan,
} from '@/views/Home/Sections/HomeTopInfoSection/HomeTopInfoSection.style';
import NextImg from '@/components/UI/NextImg/NextImg';
import AppLogoIcon from '@/components/icons/AppLogoIcon';
import { Grid, Typography } from '@mui/material';
import { palette } from '@/theme/palette';
import VideoContainer from '@/views/Home/SubComponents/VideoContainer/VideoContainer';

const HomeTopInfoSection = () => {
  return (
    <RootContainer>
      <Content>
        <Grid container>
          <Grid item xs={6}>
            <ImageContainer>
              <NextImg
                src={'/images/Heroes.webp'}
                width={707}
                height={401}
                alt='Heroes'
                priority
              />
            </ImageContainer>
          </Grid>
          <Grid item xs={6}>
            <InfoContainer>
              <LogoContainer>
                <AppLogoIcon />
              </LogoContainer>
              <Title tag={'h1'}>Play-To-Earn, Active Board RPG</Title>
              <Subtitle>
                With unique combat system, designed on the principle{' '}
                <span>
                &quot;Easy to Learn, Difficult to Master.&quot;
              </span>
              </Subtitle>
            </InfoContainer>
          </Grid>
        </Grid>
        <Grid container mt={{ xs: 1, md: 15 }}>
          <Grid display={'flex'} justifyContent='flex-end' item xs={6}>
            <AboutInfoContainer>
              <Typography fontSize='22px' color={palette.text.yellow}>
                Legendary things do not tolerate haste.
              </Typography>
              <Typography>
                <YellowSpan>*</YellowSpan>The team&apos;s main dream was to design a game so explosive that it would be loved by all, delivering players
                the emotion of a cozy tabletop game you can carry in your pocket or have sitting on your table.
              </Typography>
              <Typography color={palette.text.yellow} fontSize='22px'>
                ESSENCE currently developed on enthusiasm and without any external $ support.
              </Typography>
            </AboutInfoContainer>
          </Grid>
          <Grid item xs={6}>
            <VideoContainer onClick={() => console.warn('click')}/>
          </Grid>
        </Grid>
      </Content>

      <PolygonBackgroundContainer>
        <PolygonBackgroundContent>
          <img src={'/images/PolygonBackgroundWithIcon.svg'} alt={'Polygon background'} />
        </PolygonBackgroundContent>
      </PolygonBackgroundContainer>
    </RootContainer>
  );
};

export default HomeTopInfoSection;
