import { styled } from '@mui/material';

export const RootContainer = styled('header')`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 93px;
`;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 60px;
`;

export const HeaderInfo = styled('div')`
  display: flex;
  align-items: center;
  gap: 108px;
`;

export const WhitePaperContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 9px;
`

export const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
`;

export const RedirectIconContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  svg.icon {
    width: 100%;
    height: 100%;
  }
`;

export const  ContactsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 62px;
  position: relative;
`;

export const VerticalLine = styled('span')`
  display: block;
  width: 2px;
  height: 40px;
  background: ${({ theme }) => theme.palette.text.white};
`;

export const  SocialLinksContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SocialLinkIconContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    
    path {
      stroke: ${({ theme }) => theme.palette.text.lightPink};
      stroke-width: 2px;
      fill: transparent;
      transition: 0.2s;
    }
  }
  
  &:hover {
    svg {
      
      &.discord {
        path {
          stroke:transparent;
        }
      }
      path {
        fill: ${({ theme }) => theme.palette.text.lightPink};
      }
    }
  }
`;
