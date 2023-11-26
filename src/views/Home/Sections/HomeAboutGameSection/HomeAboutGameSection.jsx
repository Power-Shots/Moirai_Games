import React from 'react';
import {
  Content,
  RootContainer,
  TextContainer,
  TitleText,
} from '@/views/Home/Sections/HomeAboutGameSection/HomeAboutGameSection.style';
import { Grid, Typography } from '@mui/material';
import { palette } from '@/theme/palette';
import SwitchInfoBlock from '@/views/Home/SubComponents/SwitchInfoBlock/SwitchInfoBlock';

const HomeAboutGameSection = () => {
  return (
    <RootContainer>
      <Content>
        <Grid container>
          <Grid xs={12} md={6}>
            <TextContainer>
              <TitleText mt={6} fontSize={'32px'}>
                Inter-Genre Game
              </TitleText>
              <Typography>
                <Typography
                  fontWeight={700}
                  component={'span'}
                  color={palette.text.blue}
                >
                  ESSENCE
                </Typography>{' '}
                is a dynamic and unpredictable fusion of a Board game,
                RPG, and Collectible Card game, offering both PVE and
                PVP online game modes. Players create composite
                characters, utilizing items and cards across diverse
                battlefields to own & earn.
              </Typography>
            </TextContainer>
          </Grid>
          <Grid
            display={'flex'}
            justifyContent={'flex-end'}
            xs={12}
            md={6}
          >
            <SwitchInfoBlock />
          </Grid>
        </Grid>
      </Content>
    </RootContainer>
  );
};

export default HomeAboutGameSection;
