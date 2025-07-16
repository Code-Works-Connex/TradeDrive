'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImage2 from "../../../public/images/bannerDent.png"; 

export default function Page() {
  return (
    <Box
      sx={{
        position: 'relative',
        // width: '100%',
        height: { xs: '40vh', sm: '50vh', md: '60vh', lg: '80vh' }, // Responsive height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        px: { xs: 1, md: 2 }, // Padding for smaller screens
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={backgroundImage2.src}
        alt="Damaged Car"
        sx={{
         position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        //   objectFit: 'cover',
        //   opacity: 0.8,
        }}
      />

      {/* Text Overlay */}
      <Typography
        variant="h2"
        sx={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: 700,
          textTransform: 'uppercase',
          zIndex: 1,
          letterSpacing: { xs: '1px', md: '2px' }, // Adjust letter spacing for smaller screens
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
          p: { xs: 1, md: 2 }, // Padding around text for readability
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds contrast on smaller screens
        }}
      >
        DENTS & SCRATCHES
      </Typography>
    </Box>
  );
}