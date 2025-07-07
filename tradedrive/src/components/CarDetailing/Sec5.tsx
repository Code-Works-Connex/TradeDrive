'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Checkbox,
  FormControlLabel,
  Alert,
  CircularProgress,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import bookingImage from '../../../public/images/detailingsec5.png';
import { API_ENDPOINTS } from '../../../src/api';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  description: string;
  category: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  agree: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  description?: string;
  category?: string;
  status?: string;
  agree?: string;
}

export default function Sec5() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    description: '',
    category: 'Car Detailing', // Default to 'Car Detailing'
    status: 'Pending',
    agree: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setError('');
    setSuccess('');
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.agree) newErrors.agree = 'You must agree to data collection';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(API_ENDPOINTS.booking, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          category: 'Car Detailing', // Hardcode to 'Car Detailing'
          status: formData.status,
          date: formData.date ? formData.date : null,
          description: formData.description.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create booking');
      }

      setSuccess('Booking created successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        description: '',
        category: 'Car Detailing',
        status: 'Pending',
        agree: false,
      });
      setErrors({});
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#000',
        width: '100%',
        minHeight: '60vh',
      }}
    >
      {/* Left Column - Image (Hidden on Mobile) */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          height: '70vh',
        }}
      >
        <img
          src={bookingImage.src}
          alt="Booking"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: 0,
            padding: 10,
          }}
        />
      </Box>

      {/* Right Column - Form */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: `'Courier New', Courier, monospace`,
            color: '#fff',
            mb: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Book A Slot
        </Typography>

        {/* Display success or error messages */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
            sx={{
              mb: 2,
              input: { color: '#fff' },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <TextField
            fullWidth
            variant="standard"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
            sx={{
              mb: 2,
              input: { color: '#fff' },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <TextField
            required
            fullWidth
            variant="standard"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
            sx={{
              mb: 2,
              input: { color: '#fff' },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <TextField
            required
            fullWidth
            variant="standard"
            label="Booking Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
            InputLabelProps={{ style: { color: '#aaa' }, shrink: true }}
            sx={{
              mb: 2,
              input: {
                color: '#fff',
                '&::-webkit-calendar-picker-indicator': {
                  filter: 'invert(1)', // 👈 Inverts the icon color (makes it white)
                },
              },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <TextField
            required
            fullWidth
            variant="standard"
            placeholder="How can we help you?"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={2}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
            sx={{
              mb: 2,
              textarea: { color: '#fff' },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                sx={{ color: '#fff' }}
              />
            }
            label={
              <Typography sx={{ fontSize: '0.875rem', color: '#aaa' }}>
                I agree that my data is collected and stored.
              </Typography>
            }
            sx={{ mb: 2 }}
          />
          {errors.agree && (
            <Typography sx={{ color: '#f44336', fontSize: '0.75rem', mb: 2 }}>
              {errors.agree}
            </Typography>
          )}

          <Button
            variant="contained"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            type="submit"
            disabled={loading}
            sx={{
              backgroundColor: '#2979ff',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.2,
              alignSelf: { xs: 'center', md: 'flex-start' },
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            {loading ? 'Submitting...' : 'Book an Appointment'}
          </Button>
        </form>
      </Box>
    </Box>
  );
}