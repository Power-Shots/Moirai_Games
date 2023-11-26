import { styled } from '@mui/material';

export const RootContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 64px;
  width: 100%;
`;

export const Content = styled('div')`
  max-width: calc(1410px + 15px * 2);
  padding: 0 15px;
  width: 100%;
`;
