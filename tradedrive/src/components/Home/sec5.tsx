'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VerifiedIcon from '@mui/icons-material/Verified';
import { motion, cubicBezier } from 'framer-motion';

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
    title: 'VERIFIED DRIVERS',
    description: 'Sed do eiusmod tempor',
    icon: <VerifiedIcon sx={{ fontSize: 40, color: 'white' }} />,
  },
  {
    title: 'RANGE OF SERVICE',
    description: 'Sed do eiusmod tempor',
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: 'white' }} />,
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.1, 0.25, 1), // ✅ Fixed easing function
    },
  },
};

export default function Sec5() {
  return (
    <Box sx={{ backgroundColor: 'black', py: 6 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Box
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
                {/* <Typography sx={{ color: '#aaa', mt: 1 }}>{feature.description}</Typography> */}
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
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
}
