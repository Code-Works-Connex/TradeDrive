'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
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

export default function Sec2() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    description: '',
    category: 'Dents & Scratches', // Default to 'Dents & Scratches'
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
          category: 'Dents & Scratches', // Hardcode to 'Dents & Scratches'
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
        category: 'Dents & Scratches',
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
        bgcolor: '#f0f0f0',
        p: { xs: 2, md: 7 },
        minHeight: '50vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
      }}
    >
      {/* Left Column - Book Now Form */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          bgcolor: '#fff',
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: '#000',
            textAlign: 'left',
            backgroundColor: '#f0f0f0',
            p: 1,
            borderRadius: 1,
          }}
        >
          Book Now
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
                  <PersonIcon sx={{ color: '#757575' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#757575' } }}
            sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
          />

          <TextField
            fullWidth
            variant="standard"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#757575' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#757575' } }}
            sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
          />

          <TextField
           required
            fullWidth
            variant="standard"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#757575' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#757575' } }}
            sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
          />

          <TextField
            fullWidth
            required
            variant="standard"
            label="Booking Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
            InputLabelProps={{ style: { color: '#757575' }, shrink: true }}
            sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
          />

          <TextField
          required
            fullWidth
            variant="standard"
            placeholder="How can we help you? Feel free to get in touch!"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={3}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon sx={{ color: '#757575' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#757575' } }}
            sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                sx={{ color: '#757575' }}
              />
            }
            label={
              <Typography sx={{ fontSize: '0.875rem', color: '#757575' }}>
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
            color="warning"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            type="submit"
            disabled={loading}
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 0,
              backgroundColor: '#f57c00',
              '&:hover': { backgroundColor: '#ef6c00' },
            }}
          >
            {loading ? 'Submitting...' : 'Book an Appointment'}
          </Button>
        </form>
      </Box>

      {/* Right Column - What We Do Section */}
      <Box
        sx={{
          flex: 1,
          p: 5,
          bgcolor: '#fff',
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            mb: 1,
            color: '#757575',
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          WHAT WE DO
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: '#000',
          }}
        >
          FULL-SERVICE Dents & Scratch Restoration
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          At Trade Drive, we offer expert dent and scratch repair services designed to restore your vehicle's appearance with precision and care. Whether it's a minor dent, a deep scratch, or paint damage, our skilled technicians use industry-leading techniques and equipment to get your car looking as good as new. We understand that your time is valuable. That's why our process is fast, efficient, and designed to cause as little disruption to your day as possible. Our team works with attention to detail, ensuring high-quality results without unnecessary delays.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f0f0f0',
            p: 1,
            borderRadius: 1,
            width: 'fit-content',
          }}
        >
          <IconButton sx={{ color: '#757575' }}>
            <PhoneIcon />
          </IconButton>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, ml: 1 }}
          >
            1 800 458 56 97
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}