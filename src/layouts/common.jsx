import React from 'react';
import { Main, RootContainer } from '@/layouts/common.style';
import Header from '@/components/Header/Header';

const CommonLayout = ({ children }) => {
  return (
    <RootContainer>
      <Header />
      <Main>{children}</Main>
    </RootContainer>
  );
};

export default CommonLayout;
