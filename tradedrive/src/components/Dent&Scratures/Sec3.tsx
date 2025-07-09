'use client';

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import backgroundImage3 from '../../../public/images/banner2dent.jpg'; // Replace with the actual image path

export default function Sec3() {
  return (
    <Box
      sx={{
        position: 'relative',
        // width: '100%',
        height: { xs: '50vh', sm: '50vh', md: '40vh' }, // Adjusted for tablet views
        backgroundImage: `url(${backgroundImage3.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        px: { xs: 1, sm: 2, md: 4 }, // Increased padding for tablets
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          px: { xs: 1, sm: 2, md: 4 },
          flexDirection: { xs: 'column', sm: 'row', md: 'row' }, // Row from small tablets onward
          gap: { xs: 2, sm: 1, md: 0 }, // Adjusted gap for tablets
          flexWrap: 'wrap', // Allow wrapping on tablets if needed
        }}
      >
        {/* Part Replacement */}
        <Box sx={{ textAlign: 'center', color: '#fff', p: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: { xs: 0.5, sm: 0.75, md: 1 },
              fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, // Scaled for tablets
            }}
          >
            PART REPLACEMENT
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#ccc',
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.875rem' }, // Scaled for tablets
            }}
          >
            {/* Adipiscing elit, sed do eiusmod */}
          </Typography>
        </Box>

        {/* Divider after Part Replacement */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: { xs: 'auto', sm: '70px', md: '60px' }, // Adjusted for tablet height
            borderColor: '#fff',
            borderWidth: 1,
            display: { xs: 'none', sm: 'block' }, // Show from small tablets
            my: { xs: 0, sm: 0, md: 0 }, // Margin adjustment
          }}
        />

        {/* Collision Repair */}
        <Box sx={{ textAlign: 'center', color: '#fff', p: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: { xs: 0.5, sm: 0.75, md: 1 },
              fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, // Scaled for tablets
            }}
          >
            COLLISION REPAIR
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#ccc',
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.875rem' }, // Scaled for tablets
            }}
          >
            {/* Adipiscing elit, sed do eiusmod */}
          </Typography>
        </Box>

        {/* Divider after Collision Repair */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: { xs: 'auto', sm: '70px', md: '60px' }, // Adjusted for tablet height
            borderColor: '#fff',
            borderWidth: 1,
            display: { xs: 'none', sm: 'block' }, // Show from small tablets
            my: { xs: 0, sm: 0, md: 0 }, // Margin adjustment
          }}
        />

        {/* Vehicle Tuning */}
        <Box sx={{ textAlign: 'center', color: '#fff', p: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: { xs: 0.5, sm: 0.75, md: 1 },
              fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, // Scaled for tablets
            }}
          >
            VEHICLE TUNING
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#ccc',
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.875rem' }, // Scaled for tablets
            }}
          >
            {/* Adipiscing elit, sed do eiusmod */}
          </Typography>
        </Box>

        {/* Divider after Vehicle Tuning */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: { xs: 'auto', sm: '70px', md: '60px' }, // Adjusted for tablet height
            borderColor: '#fff',
            borderWidth: 1,
            display: { xs: 'none', sm: 'block' }, // Show from small tablets
            my: { xs: 0, sm: 0, md: 0 }, // Margin adjustment
          }}
        />

        {/* Paint Services */}
        <Box sx={{ textAlign: 'center', color: '#fff', p: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: { xs: 0.5, sm: 0.75, md: 1 },
              fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, // Scaled for tablets
            }}
          >
            PAINT SERVICES
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#ccc',
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.875rem' }, // Scaled for tablets
            }}
          >
            {/* Adipiscing elit, sed do eiusmod */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}