'use client';

import React from 'react';
import { Box, Container } from '@mui/material';

export default function Sec3() {
  return (
    <Box sx={{ backgroundColor: '#0f0f0f', pb: 6, pt: 6 }}>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.1031968452057!2d-0.28577412345790415!3d52.1324442719622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877cecbf861d8b9%3A0x78df0ebfa6691c40!2s50f%20Sunderland%20Rd%2C%20Sandy%20SG19%201QY%2C%20UK!5e0!3m2!1sen!2slk!4v1751954784080!5m2!1sen!2slk"
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