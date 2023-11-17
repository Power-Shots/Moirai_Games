import React from 'react';
import Link from 'next/link';
import { siteLinks } from '@/helpers/siteLinks';

const About = () => {
  return (
    <div>
      About
      <Link href={siteLinks.home}>Home</Link>
    </div>
  );
};

export default About;
