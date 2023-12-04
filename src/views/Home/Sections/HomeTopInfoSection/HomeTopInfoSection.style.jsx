import { Grid, styled, Typography } from '@mui/material';
import { AAtmospheric } from '@/theme/localFonts.fonts';

export const RootContainer = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 40px;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 480px;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const PolygonBackgroundContainer = styled('div')`
  position: absolute;
  left: 0;
  bottom: -60px;
  z-index: 1;
  width: 100%;
  //background-image: url("/images/HEX_back2.svg");
  height: 100%;
  //background-position: 0 100%;
  //background-repeat: repeat-x;
  overflow: hidden;
  display: flex;
  align-items: flex-end;

  //img {
  //  width: 100%;
  //}
`;

export const PolygonBackgroundContent = styled(`div`)`
  position: relative;
  //max-width: 1640px;
  margin: 0 auto;
  min-width: 100%;
  display: flex;
  overflow: hidden;

  svg {
    position: relative;
    margin: 0 -25px;
    min-width: 1956px;
    //left: -50px;
    //
    //&:first-of-type {
    //  left: 0;
    //}
  }
`;

export const ImageContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 68px;
  position: relative;

  svg.icon {
    position: absolute;
    left: -30px;
    top: 0;
  }
`;

export const LogoContainer = styled('div')`
  svg {
    width: 100% !important;
    height: auto !important;
    path.icon {
      fill: ${({ theme }) => `${theme.palette.text.blue} !important`};
    }
  }
  width: 536px;
`;

export const VideoWrapper = styled('div')`
  position: relative;
  max-width: 800px;
  width: 100%;
`;

export const IconContainer = styled('div')`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex-direction: column;
  width: fit-content;
  right: 100px;
  bottom: calc(100% + 51px);
`;

export const IconContainerText = styled(Typography)`
  font-size: 18px;
`;

export const Title = styled(Typography)`
  font-family: ${AAtmospheric.style.fontFamily};
  font-size: 32px;
  color: ${({ theme }) => `${theme.palette.text.lightPink}`};
  max-width: 420px;
  line-height: 40px;
  text-transform: uppercase;
`;

export const Subtitle = styled(Typography)`
  line-height: 32px;
  letter-spacing: -0.75px;

  span {
    display: block;
    color: ${({ theme }) => `${theme.palette.text.green}`};
  }
`;

export const AboutInfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  width: 100%;
  gap: 32px;
  margin: 30px 30px 0 0;
  position: relative;

  svg.icon {
    position: absolute;
    top: -30px;
    right: calc(100% + 8px);
  }
`;

export const YellowSpan = styled('span')`
  color: ${({ theme }) => `${theme.palette.text.yellow}`};
`;

export const GridContainer = styled(Grid)`
  max-width: calc(1410px + 15px * 2);
  padding: 0 15px;
`;
