import React from 'react';
import {
  BoldText,
  HeartIconContainer,
  RootContainer,
  SupportInfoContainer,
} from '@/views/Home/Home.style';
import HomeTopInfoSection from '@/views/Home/Sections/HomeTopInfoSection/HomeTopInfoSection';
import SectionSeparator from '@/components/SectionSeparator/SectionSeparator';
import { palette } from '@/theme/palette';
import { Grid, Typography } from '@mui/material';
import HeartIcon from '@/components/icons/HeartIcon';
import HomeAboutGameSection from '@/views/Home/Sections/HomeAboutGameSection/HomeAboutGameSection';

const Home = () => {
  return (
    <RootContainer>
      <HomeTopInfoSection />
      <SectionSeparator backgroundColor={palette.background.green}>
        <Grid container>
          <Grid
            display={'flex'}
            gap={15}
            alignItems={'center'}
            xs={6}
            md={5}
          >
            <SupportInfoContainer>
              <HeartIconContainer>
                <HeartIcon />
              </HeartIconContainer>
              <BoldText noWrap>How to support project? &gt;</BoldText>
            </SupportInfoContainer>
          </Grid>
          <Grid
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            xs={6}
            md={7}
          >
            <Typography
              textAlign={'center'}
              color={palette.text.black}
            >
              Just tell your friends about ESSENCE 🖖
            </Typography>
          </Grid>
        </Grid>
      </SectionSeparator>
      <HomeAboutGameSection />
    </RootContainer>
  );
};

export default Home;
