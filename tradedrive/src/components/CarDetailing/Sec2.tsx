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
            We enhance your vehicles' beauty.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            Our expert automobile detailing services will give your vehicle the best possible gloss and protection.  We restore your car's showroom appearance while maintaining its value and finish, from thorough interior cleaning to expert exterior polishing.  Our services are ideal for any auto enthusiast who expects excellence.
            <br />
            <br />
            With our professional auto detailing services, you can restore shine and safeguard your investment.  From painstaking external improvements to interior revitalisation, we make sure every part of your car feels and looks new.  Our services are ideal for individuals who strive for excellence and derive pleasure from their car.
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
