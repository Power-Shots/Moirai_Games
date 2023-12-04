import { styled, Typography } from '@mui/material';

export const RootContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 630px;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 60px;

  svg.rhombus-pictogram {
    position: relative;
    z-index: -2;
  }
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  max-width: 630px;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;

export const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 55px;

  img {
    width: 100%;
  }
`;

export const TextContainer = styled('div')`
  position: relative;
  z-index: 2;
  background-color: ${({theme}) => theme.palette.text.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

export const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const TitleText = styled(Typography)`
  color: ${({theme}) => theme.palette.text.pink};
  font-weight: 700;
  text-align: center;
`
