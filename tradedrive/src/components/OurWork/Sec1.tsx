'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { API_ENDPOINTS, API_HOST } from '../../../src/api';

type GalleryImage = {
  id: number;
  url: string;
  name: string;
  order: number;
};

const Sec1 = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.enabledGallery);
        if (!res.ok) throw new Error('Failed to fetch gallery images');
        const data = await res.json();
        setImages(data.sort((a: GalleryImage, b: GalleryImage) => a.order - b.order));
      } catch (error) {
        console.error('❌ Error loading gallery:', error);
        setImages([]);
      }
    };

    fetchImages();
  }, []);

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
        We offer professional bodywork repairs and painting services at a convenient location for you. 
        We fully guarantee all of our work, ensuring your satisfaction with the final result!
      </Typography>

      {/* Dynamic Image Grid */}
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
        {images.map((img) => (
          <Box
            key={img.id}
            sx={{
              width: '100%',
              maxWidth: 350, // ✅ Fixed width
              height: 250, // ✅ Fixed height
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 2,
              transition: 'transform 0.3s',
              mx: 'auto',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Image
              src={`${API_HOST}${img.url}`}
              alt={img.name}
              width={350}
              height={250}
              style={{
                objectFit: 'cover',
                // filter: 'grayscale(100%)',
                transition: 'filter 0.3s ease',
              }}
            
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sec1;
