'use client';

import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BuildIcon from '@mui/icons-material/Build';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

import image1 from '../../../public/images/img6.jpg';
import image2 from '../../../public/images/img7.jpg';
import image3 from '../../../public/images/img8.jpg';

export default function Sectwo() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 8,
        px: { xs: 3, md: 10 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        alignItems: 'flex-start',
      }}
    >
      {/* Left Column - Images */}
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
          gridTemplateRows: { xs: 'repeat(3, auto)', md: '1fr 1fr' },
          gap: 2,
          width: '100%', // Ensure full width
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            gridRow: { md: '1 / span 2' },
            gridColumn: { md: '1 / 2' },
            width: '100%',
            height: { xs: 250, md: 400 }, // Explicit height for mobile and desktop
          }}
        >
          <Image
            src={image1}
            alt="Main mechanic"
            fill
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        </Box>

        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            width: '100%',
            height: { xs: 200, md: 200 }, // Explicit height for mobile and desktop
            gridRow: { md: '1 / 2' },
            gridColumn: { md: '2 / 3' },
          }}
        >
          <Image
            src={image2}
            alt="Factory line"
            fill
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        </Box>

        {!isMobileView && (
          <Box
            sx={{
              position: 'relative',
              borderRadius: 2,
              width: '100%',
              height: 180, // Fixed height for desktop
              gridRow: { md: '2 / 3' },
              gridColumn: { md: '2 / 3' },
            }}
          >
            <Image
              src={image3}
              alt="Gears closeup"
              fill
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>
        )}
      </Box>

      {/* Right Column - Text + Icons */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' },
            color: 'white',
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Restoring Your Vehicle{' '}
          <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 400 }}>
            , One Part at a Time
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: { md: '85%' },
            mb: 4,
          }}
        >
       Supplying excellent replacement components to maintain your car in good shape and your trip enjoyable.  The performance of your car is our promise.
        </Typography>

        {/* Two Column Flex Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BuildIcon sx={{ color: '#C8102E', fontSize: 40 }} />
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold', color: 'white' }}>
                Modern Workshop
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.7)' , textAlign: 'justify'}}>
              Equipped with advanced diagnostic tools and genuine spare parts to meet your vehicle’s needs. From repairs to upgrades, we’ve got you covered.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ color: '#C8102E', fontSize: 40 }} />
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold', color: 'white' }}>
                Continues Support
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.7)' , textAlign: 'justify'}}>
              Always here when you need us. Our experts are available around the clock to assist with inquiries, orders, or troubleshooting.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}