import React from 'react';
import { Content, RootContainer } from '@/components/SectionSeparator/SectionSeparator.style';
import { palette } from '@/theme/palette';

const SectionSeparator = ({backgroundColor = palette.background.yellow, children}) => {
  return (
    <RootContainer backgroundColor={backgroundColor}>
      <Content>{children}</Content>
    </RootContainer>
  );
};

export default SectionSeparator;