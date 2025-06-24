'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Sec6() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        backgroundColor: 'black',
        py: 2,
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          animation: 'scrollText 40s linear infinite', // ⬅️ slowed down
        }}
      >
        {Array(10).fill('NEW CAR EVERY DAY').map((text, i) => (
          <Typography
            key={i}
            component="span"
            sx={{
              display: 'inline-block',
              fontSize: { xs: '1.8rem', md: '5rem' },
              fontWeight: 700,
              color: '#292929',
              letterSpacing: 2,
              mx: 4,
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>

      {/* Custom Keyframes */}
      <style jsx global>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
}
