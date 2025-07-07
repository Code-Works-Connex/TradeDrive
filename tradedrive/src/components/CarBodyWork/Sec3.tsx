'use client';

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import experienceImg from '../../../public/images/imagesection1.png'; // ← Add your own image here

export default function Sec3() {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        px: { xs: 3, md: 10 },
        py: 4,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 6,
      }}
    >
      {/* Text Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            color: '#C8102E',
            fontWeight: 'bold',
            mb: 3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Experience the Difference
        </Typography>

        <List>
          {[
            'Skilled technicians with years of hands-on expertise.',
            'Modern tools & eco-friendly paint systems.',
            'Transparent estimates & honest timelines.',
            'Guaranteed workmanship and customer-focused service.',
          ].map((point, index) => (
            <ListItem key={index} sx={{ py: 1 }}>
              <CheckCircleIcon sx={{ color: '#C8102E', mr: 2 }} />
              <ListItemText
                primary={point}
                primaryTypographyProps={{ sx: { fontSize: '1.1rem', color: '#fff' } }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Image Content */}
      <Box
        sx={{
          flex: 1,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 0 20px rgba(200, 16, 46, 0.3)',
        }}
      >
        <Image
          src={experienceImg}
          alt="Experience the Difference"
          layout="responsive"
          width={600}
          height={400}
          style={{ objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}
