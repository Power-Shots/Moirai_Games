import React from 'react';
import Image from 'next/image';

const NextImg = (
  {
    src,
    alt = 'Image',
    width,
    height,
    fill,
    priority = false,
    objectFit = 'contain',
  },
  props,
) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      style={{ objectFit }}
      {...props}
    />
  );
};

export default NextImg;
