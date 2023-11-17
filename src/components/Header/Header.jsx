import React from 'react';
import {
  Content,
  LogoContainer,
  RootContainer,
} from '@/components/Header/Header.style';
import AppLogo from '@/components/icons/AppLogo';
import Link from 'next/link';
import { siteLinks } from '@/helpers/siteLinks';

const Header = () => {
  return (
    <RootContainer>
      <Content>
        <LogoContainer>
          <Link href={siteLinks.home}>
            <AppLogo />
          </Link>
        </LogoContainer>
      </Content>
    </RootContainer>
  );
};

export default Header;
