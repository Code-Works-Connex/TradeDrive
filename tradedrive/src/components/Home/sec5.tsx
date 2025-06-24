'use client';

import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const features = [
  {
    title: 'PREMIUM QUALITY',
    description: 'Sed do eiusmod tempor',
    icon: <StarIcon sx={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'LICENSE & INSURANCE',
    description: 'Sed do eiusmod tempor',
    icon: <AssignmentIcon sx={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'LICENSE & INSURANCE',
    description: 'Sed do eiusmod tempor',
    icon: <AssignmentIcon sx={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'RANGE OF SERVICE',
    description: 'Sed do eiusmod tempor',
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: 'white' }} />,
  },
];

export default function Sec5() {
  return (
    <Box sx={{ backgroundColor: 'black', py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid #333',
              textAlign: 'center',
              height: 250,
              width: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2,
              backgroundColor: 'transparent',
            }}
          >
            <Box mb={2}>{feature.icon}</Box>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
              {feature.title}
            </Typography>
            <Typography sx={{ color: '#aaa', mt: 1 }}>
              {feature.description}
            </Typography>
            <Box mt={2} display="flex" justifyContent="center" gap={0.7}>
              {[...Array(3)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 6,
                    height: 6,
                    bgcolor: 'red',
                    borderRadius: '50%',
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
