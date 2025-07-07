'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';

const features = [
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 36, color: '#C8102E' }} />,
    title: 'Passion for Performance',
    description:
      'Every vehicle is treated with precision and care. Whether it\'s a routine service or full-scale repair, our experts deliver performance that lasts.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 36, color: '#C8102E' }} />,
    title: 'Transparent & Trustworthy',
    description:
      'No hidden fees. No unnecessary upsells. Just honest advice and detailed reports to keep you informed.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 36, color: '#C8102E' }} />,
    title: 'Rapid Turnaround',
    description:
      'We value your time. Our streamlined processes and experienced team ensure your car is back on the road without delay.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 36, color: '#C8102E' }} />,
    title: 'Premium Parts & Tools',
    description:
      'We use only high-grade components and modern equipment to ensure longevity and reliability with every service.',
  },
];

export default function Sec2() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 10, px: 4 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: '#C8102E',
          fontWeight: 'bold',
          mb: 6,
        }}
      >
        Why Choose Us?
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {features.map((feature, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: '100%', sm: '45%', md: '45%' },
              minHeight: 120,
              backgroundColor: '#1a1a1a',
              borderRadius: 2,
              borderLeft: '4px solid #C8102E',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {feature.icon}
              <Typography variant="h6" sx={{ ml: 2, color: '#fff', fontWeight: 600 }}>
                {feature.title}
              </Typography>
            </Box>
            <Typography sx={{ color: '#ccc', fontSize: '0.95rem' }}>
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 8, textAlign: 'center', color: '#666', fontSize: '0.85rem' }}
      >
       TradeDrive Autos — Built for the road ahead.
      </Typography>
    </Box>
  );
}
