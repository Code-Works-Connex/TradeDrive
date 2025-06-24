'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

// ✅ Import your actual images here
import leftImage from '../../../public/images/img9.png';
import rightImage from '../../../public/images/img10.png';

export default function Sec7() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        minHeight: '60vh',
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          minHeight: { xs: 300, md: 'auto' },
        }}
      >
        <Image
          src={leftImage}
          alt="Have a Problem"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            px: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, mb: 1 }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '2.2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            HAVE A PROBLEM?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              px: 3,
              py: 1,
              fontSize: { xs: '0.8rem', sm: '1rem' },
              '&:hover': {
                backgroundColor: '#fff',
                color: '#000',
              },
            }}
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          minHeight: { xs: 300, md: 'auto' },
        }}
      >
        <Image
          src={rightImage}
          alt="Work With Us"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.26)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            px: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '2.2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            WORK WITH US
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              px: 3,
              py: 1,
              fontSize: { xs: '0.8rem', sm: '1rem' },
              '&:hover': {
                backgroundColor: '#fff',
                color: '#000',
              },
            }}
          >
            CONTACT US
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
