'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Sec4() {
  return (
    <Box
      sx={{
        backgroundColor: '#222', 
        color: '#fff',
        textAlign: 'center',
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
          fontWeight: 600,
          maxWidth: '900px',
          mx: 'auto',
          lineHeight: 1.3,
        }}
      >
        Our team of expert auto detailers is committed to excellence, innovation, and quality service for{' '}
        <Box component="span" sx={{ color: '#2979ff' }}>
          every car, everywhere.
        </Box>
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontWeight: 500 }}>Peter Bowman</Typography>
        <Typography sx={{ color: '#aaa', fontSize: '0.9rem' }}>Service Manager</Typography>
      </Box>
    </Box>
  );
}
