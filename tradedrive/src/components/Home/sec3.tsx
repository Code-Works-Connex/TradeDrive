'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

import sprayImage from '../../../public/images/image5.png'; // painter image

export default function Sec3() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#000',
        color: '#fff',
        px: { xs: 3, md: 10 },
        py: { xs: 4, md: 8 },
        alignItems: 'center',
        gap: { xs: 4, md: 6 },
      }}
    >
      {/* Left Column */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          paddingLeft: { xs: 0, md: 4 },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: '#ccc', fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          WHAT WE DO
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}
        >
          FULL - SERVICE{' '}
          <Box component="span" sx={{ color: '#E53935' }}>
            DETAILING FOR CARS
          </Box>
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
        >
          Welcome to TradeDrive
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: 500, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.7 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1A1A1A',
            color: '#fff',
            width: 'fit-content',
            padding: '12px 24px',
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', md: '1rem' },
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          📞 0 800 555 44 33
        </Button>
      </Box>

      {/* Right Column - Larger Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={sprayImage}
          alt="Car Painter"
          width={500} // Increased width
          height={600} // Increased height
          style={{
            borderRadius: 12,
            objectFit: 'cover',
            maxWidth: '150%',
            height: 'auto',
          }}
        />
      </Box>
    </Box>
  );
}
