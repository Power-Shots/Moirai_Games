import React, { useRef, useState } from 'react';
import {
  Content,
  ImageContainer,
  RootContainer,
} from '@/views/Home/SubComponents/SwitchInfoBlock/SwitchInfoBlock.style';
import RhombusPictogram from '@/components/pictograms/RhombusPictogram';
import { Slide, Typography } from '@mui/material';
import Image from 'next/image';
import { CustomButton } from '@/views/Home/Sections/HomeAboutGameSection/HomeAboutGameSection.style';
import { AAtmospheric } from '@/theme/localFonts.fonts';

const SwitchInfoBlock = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const buttonClickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <RootContainer ref={rootRef}>
      <RhombusPictogram />

      <Slide
        container={rootRef.current}
        direction="down"
        in={!isOpen}
        mountOnEnter
        unmountOnExit
      >
        <Content>
          <ImageContainer>
            <Image
              src={'/images/BitmapImage.webp'}
              width={630}
              height={447}
              priority
              alt={'image'}
            />
          </ImageContainer>
        </Content>
      </Slide>
      <Slide
        container={rootRef.current}
        direction="down"
        in={isOpen}
        mountOnEnter
        unmountOnExit
      >
        <Content>2</Content>
      </Slide>
      <CustomButton
        variant={'contained'}
        size={'large'}
        onClick={buttonClickHandler}
      >
        <Typography
          component={'span'}
          textTransform={'uppercase'}
          fontSize={'22px'}
          fontFamily={AAtmospheric.style.fontFamily}
        >
          {isOpen ? 'Fate`s Roll' : 'aahaha!   GO'}
        </Typography>
      </CustomButton>
    </RootContainer>
  );
};

export default SwitchInfoBlock;
