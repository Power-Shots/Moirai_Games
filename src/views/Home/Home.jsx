import React from 'react';
import { Typography } from '@mui/material';
import { AAtmospheric, ProximaNova, Sovereign } from '@/theme/localFonts.fonts';

const Home = () => {
  return <div>
    <Typography fontFamily={Sovereign.style.fontFamily}>Sovereign</Typography>
    <Typography fontFamily={ProximaNova.style.fontFamily} fontWeight={700}>ProximaNova</Typography>
    <Typography fontFamily={ProximaNova.style.fontFamily} fontWeight={400}>ProximaNova</Typography>
    <Typography fontFamily={AAtmospheric.style.fontFamily} >Sovereign</Typography>
  </div>;
};

export default Home;
