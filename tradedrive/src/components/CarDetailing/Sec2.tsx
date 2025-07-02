import React from 'react';
import { Box, Typography } from '@mui/material';
import detralingimg1 from '../../../public/images/detailingimg1.png';

export default function Sec2() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: { xs: 3, sm: 4, md: 6 },
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Box sx={{ maxWidth: '700px' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
            }}
          >
            We enhance your vehicles' beauty
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            Experience the ultimate shine and protection with our professional car detailing services. From deep interior cleaning to precision exterior polishing, we bring back the showroom look while preserving your vehicle’s value and finish. Perfect for every car enthusiast who demands perfection.
            <br />
            <br />
            Restore brilliance and protect your investment with our expert car detailing services. From meticulous interior rejuvenation to flawless exterior enhancement, we ensure every inch of your vehicle looks and feels brand new. Ideal for those who take pride in their ride and expect nothing less than excellence.
          </Typography>
        </Box>
      </Box>
      {/* Image Box - Hidden on mobile */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          height: '60vh',
        }}
      >
        <img
          src={detralingimg1.src}
          alt="Car Wash"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
      </Box>

      
    </Box>
  );
}
