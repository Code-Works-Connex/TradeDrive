'use client';

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GavelIcon from '@mui/icons-material/Gavel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function Sec2() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', px: { xs: 2, md: 10 }, py: 4 }}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          color: '#C8102E',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Passionate About Perfecting Your Car
      </Typography>

      {/* Intro Section */}
      <Typography
        variant="body1"
        sx={{
          color: '#ccc',
          textAlign: 'center',
          maxWidth: '800px',
          mx: 'auto',
          mb: 6,
          fontSize: '1.1rem',
        }}
      >
        At Trade Drive Autos, we combine years of craftsmanship with modern techniques
        to give your car the attention it deserves. We pride ourselves on honest service,
        meticulous work, and customer satisfaction. Whether it’s a small scratch or major
        accident damage, our team treats every vehicle like it’s our own.
      </Typography>

      <Divider sx={{ bgcolor: '#444', mb: 6 }} />

      {/* Services Section (Row 1) */}
      <Box sx={{ mb: 10 }}>


        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {[
            {
              icon: <DirectionsCarIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
              title: 'Collision Repairs',
              text: 'Restoring your car to pre-accident condition.',
            },
            {
              icon: <GavelIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
              title: 'Dent & Scratch Removal',
              text: 'Precision work that erases all signs of damage.',
            },
            {
              icon: <BuildIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
              title: 'Panel Beating & Welding',
              text: 'Structural repairs done safely and expertly.',
            },
            {
              icon: <PrecisionManufacturingIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
              title: 'Paint Matching & Resprays',
              text: 'Factory-quality finishes that look brand new.',
            },
            {
              icon: <VerifiedIcon sx={{ fontSize: 40, color: '#C8102E' }} />,
              title: 'Rust Repairs',
              text: 'Protecting your vehicle and maintaining its value.',
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: '1 1 250px',
                backgroundColor: '#111',
                border: '1px solid #333',
                borderRadius: '10px',
                padding: 3,
                minHeight: 150,
                maxWidth: 280,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 0 15px rgba(255, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.4)',
                },
              }}
            >
              {item.icon}
              <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold', color: '#fff' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: '#ccc' }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
}
