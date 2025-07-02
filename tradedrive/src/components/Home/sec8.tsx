'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Fade,
  CircularProgress,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { API_ENDPOINTS, API_HOST } from '../../../src/api';

type Testimonial = {
  message: string;
  name: string;
  date: string;
  photo: string;
};

export default function Sec8() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const total = testimonials.length;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.publishedTestimonials, {
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error('❌ Error fetching testimonials:', err);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const current = testimonials[index];

  return (
    <Box
      sx={{
        backgroundColor: '#0e0e0e',
        color: '#fff',
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        minHeight: '400px',
      }}
    >
      {/* Label */}
      <Box
        sx={{
          backgroundColor: '#8B0000',
          color: 'white',
          borderRadius: '30px',
          px: 4,
          py: 1,
          fontWeight: 'bold',
          fontSize: { xs: '0.8rem', sm: '1rem' },
          mb: 4,
        }}
      >
        TESTIMONIALS
      </Box>

      {loading ? (
        <CircularProgress sx={{ color: '#ff0000', mt: 4 }} />
      ) : testimonials.length === 0 ? (
        <Typography>No testimonials available</Typography>
      ) : (
        <>
          {/* Main Testimonial Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: 700,
              width: '100%',
              mb: 4,
              gap: { xs: 2, sm: 0 },
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                color: '#fff',
                backgroundColor: '#111',
                '&:hover': { backgroundColor: '#333' },
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                // py: 4,
                px: { xs: 0, sm: 2 },
                flex: 1,
              }}
            >
              <Fade in timeout={500} key={index}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {current.message}
                </Typography>
              </Fade>
            </Box>

            <IconButton
              onClick={handleNext}
              sx={{
                color: '#fff',
                backgroundColor: '#111',
                '&:hover': { backgroundColor: '#333' },
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          {/* Mobile Arrows */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 2, mb: 2 }}>
            <IconButton onClick={handlePrev} sx={{ color: '#fff', backgroundColor: '#111' }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton onClick={handleNext} sx={{ color: '#fff', backgroundColor: '#111' }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          {/* Name & Date */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}
          >
            {current.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'gray', mb: 2, fontSize: { xs: '0.85rem', sm: '1rem' } }}
          >
            {new Date(current.date).toLocaleDateString()}
          </Typography>

          {/* Avatar */}
          <Avatar
            sx={{
              width: { xs: 60, sm: 70 },
              height: { xs: 60, sm: 70 },
              border: '3px solid #333',
            }}
          >
            <Image
              src={`${API_HOST}${current.photo}`}
              alt={current.name}
              fill
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </Avatar>
        </>
      )}
    </Box>
  );
}
