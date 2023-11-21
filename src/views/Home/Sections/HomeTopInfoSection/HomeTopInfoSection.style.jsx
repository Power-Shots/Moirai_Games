import { styled, Typography } from '@mui/material';
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
  width: 100%;
  left: 0;
  bottom: -60px;
  z-index: 1;

  img {
    width: 100%;
  }
`;

export const PolygonBackgroundContent = styled(`div`)`
  position: relative;
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
`;

export const YellowSpan = styled('span')`
  color: ${({ theme }) => `${theme.palette.text.yellow}`};
`