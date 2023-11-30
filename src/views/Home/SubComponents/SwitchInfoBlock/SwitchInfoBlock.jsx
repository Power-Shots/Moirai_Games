import React, { useRef, useState } from 'react';
import {
  Content, FlexContainer,
  ImageContainer,
  RootContainer, TextContainer, TitleText,
} from '@/views/Home/SubComponents/SwitchInfoBlock/SwitchInfoBlock.style';
import RhombusPictogram from '@/components/pictograms/RhombusPictogram';
import { Slide, Typography } from '@mui/material';
import Image from 'next/image';
import { CustomButton } from '@/views/Home/Sections/HomeAboutGameSection/HomeAboutGameSection.style';
import { AAtmospheric } from '@/theme/localFonts.fonts';
import RotateHeartIcon from '@/components/icons/RotateHeartIcon';

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
        appear={false}
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
        <Content>
          <TextContainer>
            <TitleText fontSize={'43px'}>Hello, buddy!</TitleText>
            <Typography textAlign={'center'}>{`We're working hard to create an exciting game for you, and we want you to exist in the game.`}</Typography>
          </TextContainer>
          <TitleText fontSize={'32px'} mt={7} mb={2}>
            Create an AI enemy<br/>with your Name!
          </TitleText>
          <FlexContainer>
            <RotateHeartIcon/>
            <Typography fontSize={'16px'} textAlign={'center'}>
              {`You're awesome!`}
            </Typography>
          </FlexContainer>
        </Content>
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
          {!isOpen ? 'Fate`s Roll' : 'aahaha! GO'}
        </Typography>
      </CustomButton>
    </RootContainer>
  );
};

export default SwitchInfoBlock;
