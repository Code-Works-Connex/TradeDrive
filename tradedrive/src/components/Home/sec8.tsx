'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Fade,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

import img1 from '../../../public/images/img1.png';
import img2 from '../../../public/images/img2.png';
import img3 from '../../../public/images/img3.png';

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: 'NIMHARA PERERA',
    role: 'Manager',
    image: img1,
  },
  {
    text: "Their services are outstanding! My vehicle has never run smoother. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: 'KAVINDU JAYASINGHE',
    role: 'Fleet Supervisor',
    image: img2,
  },
  {
    text: "The team is very responsive and professional. Highly recommended! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: 'DINUSHI FERNANDO',
    role: 'Operations Lead',
    image: img3,
  },
];

export default function Sec8() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

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

      {/* Main Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          maxWidth: 800,
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

        <Fade in timeout={500} key={index}>
          <Typography
            variant="body1"
            sx={{
              flex: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              lineHeight: 1.6,
              px: { xs: 0, sm: 2 },
              minHeight: { xs: '120px', sm: '100px' },
            }}
          >
            {current.text}
          </Typography>
        </Fade>

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

      {/* Mobile Arrows (below text) */}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 2, mb: 2 }}>
        <IconButton onClick={handlePrev} sx={{ color: '#fff', backgroundColor: '#111' }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ color: '#fff', backgroundColor: '#111' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Name & Role */}
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
        {current.role}
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
          src={current.image}
          alt={current.name}
          fill
          style={{ objectFit: 'cover', borderRadius: '50%' }}
        />
      </Avatar>
    </Box>
  );
}
