import React from 'react';
import {
  ContactsContainer,
  Content,
  HeaderInfo,
  LogoContainer,
  RedirectIconContainer,
  RootContainer,
  SocialLinkIconContainer,
  SocialLinksContainer,
  VerticalLine,
  WhitePaperContainer,
} from '@/components/Header/Header.style';
import AppLogoIcon from '@/components/icons/AppLogoIcon';
import Link from 'next/link';
import { siteLinks } from '@/helpers/siteLinks';
import { Typography } from '@mui/material';
import { AAtmospheric } from '@/theme/localFonts.fonts';
import RedirectIcon from '@/components/icons/RedirectIcon';
import { socialLinks } from '@/helpers/socialLinks';
import { palette } from '@/theme/palette';

const Header = () => {
  return (
    <RootContainer>
      <Content>
        <HeaderInfo>
          <LogoContainer>
            <Link href={siteLinks.home}>
              <AppLogoIcon />
            </Link>
          </LogoContainer>
          <WhitePaperContainer>
            <Typography textTransform={'uppercase'} fontSize={'12px'}
                        fontFamily={AAtmospheric.style.fontFamily}>WhitePaper</Typography>
            <RedirectIconContainer>
              <RedirectIcon />
            </RedirectIconContainer>
          </WhitePaperContainer>
        </HeaderInfo>
        <ContactsContainer>
          <Typography lineHeight={'32px'} textTransform={'uppercase'}
                      fontSize={'22px'} color={palette.text.blue}
                      fontFamily={AAtmospheric.style.fontFamily}>
            NFT’s
          </Typography>
          <VerticalLine />
          <SocialLinksContainer>
            {socialLinks.map((item) => (
              <SocialLinkIconContainer key={item.name}>
                <a href={item.href} target='_blank'>
                  {item.icon}
                </a>
              </SocialLinkIconContainer>
            ))}
          </SocialLinksContainer>
        </ContactsContainer>
      </Content>
    </RootContainer>
  );
};

export default Header;
