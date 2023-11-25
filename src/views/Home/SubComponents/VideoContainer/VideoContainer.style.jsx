import { styled } from '@mui/material';
import { generateHexColorWithOpacity } from '@/helpers/generateHexColorWithOpacity';

export const RootContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 800px;
  width: 100%;
  height: 461px;
  background: ${({ theme }) => generateHexColorWithOpacity(theme.palette.background.pink, 15)};
  border-radius: 20px;
  border: 8px solid ${({ theme }) => theme.palette.background.pink};
  
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }
`;