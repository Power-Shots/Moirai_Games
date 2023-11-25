import localFont from 'next/font/local';

export const Sovereign = localFont({
  name: 'Sovereign',
  src: '../../public/fonts/Sovereign.ttf',
  weight: 'normal',
});

export const AAtmospheric = localFont({
  name: 'a Atmospheric',
  src: '../../public/fonts/aAtmospheric.ttf',
  weight: 'normal',
});

export const ProximaNova = localFont({
  name: 'Proxima Nova',
  src: [
    {
      path: '../../public/fonts/ProximaNova-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
