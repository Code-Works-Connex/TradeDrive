'use client';

import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

import sprayImage from '../../../public/images/image5.png'; // painter image

export default function Sec3() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // true if screen is < md

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#000',
        color: '#fff',
        px: { xs: 3, md: 10 },
        py: { xs: 4, md: 8 },
        alignItems: 'center',
        gap: { xs: 4, md: 6 },
        overflow: 'hidden',
      }}
    >
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ flex: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            paddingLeft: { xs: 0, md: 4 },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: '#ccc', fontSize: { xs: '1rem', md: '1.1rem' } }}
          >
            WHAT WE DO
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            FULL - SERVICE{' '}
            <Box component="span" sx={{ color: '#E53935' }}>
              DETAILING FOR CARS
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
          >
            Welcome to TradeDrive Auto
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.7,
            }}
          >
            At <strong>TradeDrive Auto</strong>, we provide expert car care services that keep your vehicle in top shape—inside and out. From smart cosmetic fixes to deep diagnostics, we’ve got it all covered.
            <br /><br />
            <strong>Our key services:</strong>
            <ul style={{ paddingLeft: '1.2em', marginTop: 8 }}>
              <li>Alloy Wheel Rework</li>
              <li>Dents & Scratch Removal</li>
              <li>Interior & Exterior Detailing</li>
              <li>Servicing & Mechanical Repair</li>
              <li>Vehicle Diagnostics</li>
              <li>Pre-MOT Inspections</li>
            </ul>
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1A1A1A',
              color: '#fff',
              width: 'fit-content',
              padding: '12px 24px',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', md: '1rem' },
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            📞 0 800 555 44 33
          </Button>
        </Box>
      </motion.div>

      {/* Right Column - Hidden on Mobile */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', sm: '90%', md: '500px' },
              height: { xs: 300, sm: 400, md: 600 },
              position: 'relative',
              mx: 'auto',
            }}
          >
            <Image
              src={sprayImage}
              alt="Car Painter"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: 12,
              }}
            />
          </Box>
        </motion.div>
      )}
    </Box>
  );
}
