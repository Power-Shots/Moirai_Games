import { styled, Typography } from '@mui/material';

export const RootContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeartIconContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95px;
  min-height: 95px;
  position: relative;
  z-index: 10;
`;

export const BoldText = styled(Typography)`
  font-weight: 700;
  color: ${({theme}) => theme.palette.text.black}
`;

export const SupportInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 119px;
  position: relative;
  width: 100%;
  
  &::after {
    content: '';
    display: block;
    background: ${({theme}) => theme.palette.text.white};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 40px;
    z-index: 2;
  }
`;
