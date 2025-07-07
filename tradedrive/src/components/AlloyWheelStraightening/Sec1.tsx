'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import bgImage from '../../../public/images/alloyBanner.png'; // Update path as needed

export default function Sec1() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '50vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Contact Us Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        style={{ zIndex: 0 }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.4)', // dark overlay for text visibility
          zIndex: 1,
        }}
      />

      {/* Centered Text */}
      <Typography
        variant="h2"
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
        }}
      >
    ALLOY WHEEL REWORK
      </Typography>
    </Box>
  );
}
