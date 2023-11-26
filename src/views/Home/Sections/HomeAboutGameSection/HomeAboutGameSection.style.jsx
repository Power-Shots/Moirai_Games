import { Button, styled, Typography } from '@mui/material';

export const RootContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 66px;
`;

export const Content = styled('div')`
  max-width: calc(1410px + 15px * 2);
  width: 100%;
  padding: 0 15px;
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 561px;
  width: 100%;
`;

export const TitleText = styled(Typography)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.background.orange};
  font-weight: 700;
`;

export const CustomButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 387px;
  width: 100%;
`;
