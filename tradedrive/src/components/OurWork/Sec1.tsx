'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import bodywork1 from '../../../public/images/imagesection3.png';
import bodywork2 from '../../../public/images/imagesection3.png';
import bodywork3 from '../../../public/images/imagesection3.png';
import bodywork4 from '../../../public/images/imagesection3.png';

const Sec1 = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const images = [bodywork1, bodywork2, bodywork3, bodywork4];

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        minHeight: '100vh',
        mt: 10,
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant={isXs ? 'h4' : 'h3'}
        fontWeight="bold"
        color="text.primary"
        gutterBottom
        sx={{ position: 'relative', display: 'inline-block' }}
      >
        Bodywork Gallery
        <Box
          sx={{
            width: 50,
            height: 4,
            backgroundColor: '#ff0000',
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: 600,
          mx: 'auto',
          mt: 2,
          mb: 6,
          lineHeight: 1.6,
          fontSize: isXs ? '0.95rem' : '1rem',
        }}
      >
        Professional bodywork repairs and painting at a convenient location to you.
        All our work is fully guaranteed and ensures you are delighted with the finish!
      </Typography>

      {/* Image Grid using Box */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 3,
          maxWidth: 1600,
          mx: 'auto',
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Image
              src={img}
              alt={`Bodywork ${index + 1}`}
              width={400}
              height={300}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
                filter: 'grayscale(100%)',
                transition: 'filter 0.3s ease',
              }}
              onMouseOver={(e) => {
                (e.currentTarget.style.filter = 'grayscale(0%)');
              }}
              onMouseOut={(e) => {
                (e.currentTarget.style.filter = 'grayscale(100%)');
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sec1;
