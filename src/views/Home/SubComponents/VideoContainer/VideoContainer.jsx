import React from 'react';
import { RootContainer } from '@/views/Home/SubComponents/VideoContainer/VideoContainer.style';
import NextImg from '@/components/UI/NextImg/NextImg';

const VideoContainer = ({onClick, backgroundImageUrl}) => {
  return (
    <RootContainer onClick={() => onClick()} backgroundImageUrl={backgroundImageUrl}>
      <NextImg src={'/images/DontForgetVideoImage.webp'} width={639} height={461} priority />
    </RootContainer>
  );
};

export default VideoContainer;