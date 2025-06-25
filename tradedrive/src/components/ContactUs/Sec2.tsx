'use client';

import React from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'; 
import { useTheme } from '@mui/material/styles';

export default function Sec2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 4, sm: 6 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 4,
          p: {md: 10},
          px: { md: 20 }
        }}
      >
        {/* Left Column - Contact Form */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            CONTACT FORM
          </Typography>

          <TextField
            fullWidth
            variant="standard"
            placeholder="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            variant="standard"
            placeholder="Email Address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            variant="standard"
            placeholder="How can we help you? Feel free to get in touch!"
            multiline
            rows={3}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          {/* <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body2">
                I agree that my data is   collected and stored.
                
              </Typography>
            }
            sx={{ mb: 4 }}
          /> */}

          <Button
            variant="contained"
            color="error"
            startIcon={<SendIcon />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 0,
            }}
          >
            GET IN TOUCH
          </Button>
        </Box>

        {/* Right Column - Contact Info */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start', // Align content to the left
            gap: 2,
            px: { xs: 1, sm: 4 },
            textAlign: 'left', // Ensure text is left-aligned
          }}
        >
          <Typography variant="subtitle2" sx={{ letterSpacing: 1, fontWeight: 600 }}>
            CONTACT US
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            HAVE QUESTIONS?
            <br />
            GET IN TOUCH!
          </Typography>

          <Typography variant="body1" color="text.secondary">
            785 15h Street, Office 478
            <br />
            Berlin, De 81566
            <br />
            info@email.com
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 700, mt: 1 }}>
            +1 840 841 25 69
          </Typography>

          {/* Social Icons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start', // Align icons to the left
              gap: 1.5,
              mt: 2,
            }}
          >
            {[<FacebookIcon />, <CloseIcon />, <SportsBasketballIcon />, <InstagramIcon />].map(
              (icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    border: '1px solid #000',
                    width: 40,
                    height: 40,
                    borderRadius: 0,
                  }}
                >
                  {icon}
                </IconButton>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}