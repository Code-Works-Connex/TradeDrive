'use client';

import React from 'react';
import { Box, Container } from '@mui/material';

export default function Sec3() {
  return (
    <Box sx={{ backgroundColor: '#0f0f0f', pb: 6, pt: 6 }}>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126730.07807650274!2d79.82933011962597!3d6.857257752825193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnMjYuMSJOIDc5wrA1NCczMi43IkU!5e0!3m2!1sen!2slk!4v1680916340342!5m2!1sen!2slk"
          width="100%"
          height="450px"
          allowFullScreen
          loading="lazy"
          title="Google Map Location"
          style={{
            border: 0,
            borderRadius: '8px',
          }}
        />
      </Container>
    </Box>
  );
}