import { styled } from '@mui/material';

export const RootContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 630px;
  width: 100%;
  position: relative;

  svg.rhombus-pictogram {
    position: relative;
    z-index: -2;
  }
`;

export const Content = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  width: 630px;
`;

export const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
  }
`;
