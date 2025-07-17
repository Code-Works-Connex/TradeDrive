"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  IconButton,
  Checkbox,
  FormControlLabel,
  Divider,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { API_BASE_URL } from '../../api';

import leftImage from "../../../public/images/img9.png";
import rightImage from "../../../public/images/img10.png";
import popupBackground from "../../../public/images/img1.png";

export interface Booking {
  id: number;
  booking_id: string;
  name: string;
  phone: string;
  email: string;
  categories: string[];
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  date: string;
  description: string;
  createdAt: string;
}

interface B2BResponse {
  id: number;
  companyName: string;
  email: string;
  phone: string;
  categories: string[];
  status: 'New' | 'Reviewed' | 'Resolved';
  createdAt: string;
}

type CategoryKey = "alloy" | "dents" | "detailing" | "service" | "diagnostic" | "mot";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  date: string;
  categories: Record<CategoryKey, boolean>;
}

const CATEGORY_MAPPING: Record<CategoryKey, string> = {
  alloy: "Alloy Wheel Rework",
  dents: "Dents & Scratches",
  detailing: "Car Detailing",
  service: "Service & Repair",
  diagnostic: "Diagnostic",
  mot: "MOT Check",
};

// Server action: Create booking
async function createBooking(
  booking: Omit<Booking, 'id' | 'createdAt' | 'booking_id'>
): Promise<Booking> {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings/web`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(booking),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Failed to create booking: ${response.statusText}`);
    }

    const createdBooking: Booking = await response.json();
    return createdBooking;
  } catch (error: any) {
    console.error('Error creating booking:', error);
    throw new Error(error.message || 'Unable to create booking');
  }
}

// Server action: Create B2B response
async function createB2BResponse(
  response: Omit<B2BResponse, 'id' | 'createdAt'>
): Promise<B2BResponse> {
  try {
    const apiResponse = await fetch(`${API_BASE_URL}/b2b-responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(response),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      throw new Error(errorData.message || `Failed to create B2B response: ${apiResponse.statusText}`);
    }

    const createdResponse: B2BResponse = await apiResponse.json();
    return createdResponse;
  } catch (error: any) {
    console.error('Error creating B2B response:', error);
    throw new Error(error.message || 'Unable to create B2B response');
  }
}

export default function Sec7() {
  const [openBookModal, setOpenBookModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    date: "",
    categories: {
      alloy: false,
      dents: false,
      detailing: false,
      service: false,
      diagnostic: false,
      mot: false,
    },
  });
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Auto-close success modal after 5 seconds
  useEffect(() => {
    if (openSuccessModal && successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg('');
        setOpenSuccessModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [openSuccessModal, successMsg]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => {
      const newCategories = { ...prev.categories, [name]: checked };
      return { ...prev, categories: newCategories };
    });
  };

  // Open modal and reset form data
  const handleModalOpen = (type: "book" | "contact") => {
    setErrorMsg('');
    setSuccessMsg('');
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      date: "",
      categories: {
        alloy: false,
        dents: false,
        detailing: false,
        service: false,
        diagnostic: false,
        mot: false,
      },
    });
    if (type === "contact") {
      setOpenContactModal(true);
    } else {
      setOpenBookModal(true);
    }
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (type: "book" | "contact") => {
    const isContact = type === "contact";

    // Trim inputs for validation
    const trimmedData = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      date: formData.date.trim(),
    };

    // Validate required fields
    if (!isContact && !trimmedData.name) {
      setErrorMsg('Name is required.');
      return;
    }
    if (isContact && !trimmedData.company) {
      setErrorMsg('Company name is required.');
      return;
    }
    if (!trimmedData.email) {
      setErrorMsg('Email is required.');
      return;
    }
    if (!emailRegex.test(trimmedData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!trimmedData.phone) {
      setErrorMsg('Phone is required.');
      return;
    }
    if (!isContact && !trimmedData.date) {
      setErrorMsg('Date is required.');
      return;
    }
    if (!isContact) {
      const selectedDate = new Date(trimmedData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to start of day
      if (isNaN(selectedDate.getTime())) {
        setErrorMsg('Invalid date format.');
        return;
      }
      if (selectedDate < today) {
        setErrorMsg('Selected date cannot be in the past.');
        return;
      }
    }
    const selectedCategories = Object.entries(formData.categories)
      .filter(([_, checked]) => checked)
      .map(([key]) => CATEGORY_MAPPING[key as CategoryKey]);
    if (selectedCategories.length === 0) {
      setErrorMsg('At least one category must be selected.');
      return;
    }

    try {
      setLoading(true);
      setErrorMsg('');

      if (isContact) {
        const b2bData: Omit<B2BResponse, 'id' | 'createdAt'> = {
          companyName: trimmedData.company,
          email: trimmedData.email,
          phone: trimmedData.phone,
          categories: selectedCategories,
          status: 'New',
        };
        await createB2BResponse(b2bData);
        setOpenContactModal(false);
      } else {
        const bookingData: Omit<Booking, 'id' | 'createdAt' | 'booking_id'> = {
          name: trimmedData.name,
          phone: trimmedData.phone,
          email: trimmedData.email,
          categories: selectedCategories,
          status: 'Pending',
          date: trimmedData.date,
          description: 'Booking submitted via website',
        };
        await createBooking(bookingData);
        setOpenBookModal(false);
      }

      // Reset form and open success modal
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        date: "",
        categories: {
          alloy: false,
          dents: false,
          detailing: false,
          service: false,
          diagnostic: false,
          mot: false,
        },
      });
      setSuccessMsg(isContact ? 'Contact request submitted successfully!' : 'Booking created successfully!');
      setOpenSuccessModal(true);
    } catch (error: any) {
      setErrorMsg(error.message || 'Failed to submit form');
      setTimeout(() => setErrorMsg(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  // Function to get today's date in YYYY-MM-DD format
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const renderFormModal = (type: "book" | "contact") => {
    const isContact = type === "contact";

    // Debug: Calculate disabled conditions
    const trimmedData = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      date: formData.date.trim(),
    };
    const isButtonDisabled =
      loading ||
      (isContact ? !trimmedData.company : !trimmedData.name) ||
      !trimmedData.email ||
      !emailRegex.test(trimmedData.email) ||
      !trimmedData.phone ||
      (!isContact && !trimmedData.date) ||
      !Object.values(formData.categories).some((checked) => checked);

    return (
      <Modal
        open={isContact ? openContactModal : openBookModal}
        onClose={() => {
          setErrorMsg('');
          setSuccessMsg('');
          isContact ? setOpenContactModal(false) : setOpenBookModal(false);
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ width: "100%", maxWidth: 600, mx: 2 }}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              p: 4,
              borderRadius: 2,
              overflowY: "auto",
              maxHeight: "90vh",
              scrollbarWidth: "thin",
              scrollbarColor: "#888 #222",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#222",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "10px",
              },
            }}
          >
            <Image
              src={popupBackground}
              alt="Popup Background"
              fill
              style={{ objectFit: "cover", opacity: 0.1, zIndex: 0 }}
            />
            <IconButton
              onClick={() => {
                setErrorMsg('');
                setSuccessMsg('');
                isContact ? setOpenContactModal(false) : setOpenBookModal(false);
              }}
              sx={{ position: "absolute", top: 10, right: 10, color: "#fff", zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="h5" sx={{ mb: 3, color: "#fff", fontWeight: 500 }}>
                {isContact ? "Let's Work Together" : "Book Your Slot"}
              </Typography>

              {errorMsg && (
                <Alert severity="error" sx={{ mb: 2, bgcolor: 'rgba(255, 76, 76, 0.1)', color: '#fff' }}>
                  {errorMsg}
                </Alert>
              )}

              {([
                ...(isContact
                  ? [{ label: "Company Name *", name: "company" as const, type: "text" as const }]
                  : [{ label: "Name *", name: "name" as const, type: "text" as const }]),
                { label: "Phone *", name: "phone" as const, type: "tel" as const },
                { label: "Email *", name: "email" as const, type: "email" as const },
                ...(isContact ? [] : [{ label: "Booking Date *", name: "date" as const, type: "date" as const }]),
              ] as const).map(({ label, name, type }) => (
                <Box
                  key={name}
                  sx={{
                    mb: 2,
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    name={name}
                    placeholder={label}
                    variant="standard"
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    InputProps={{
                      disableUnderline: true,
                      style: { color: "#fff" },
                      ...(type === "date" ? {
                        min: getMinDate(),
                        inputProps: {
                          min: getMinDate(),
                          // Prevent manual entry of past dates
                          onKeyDown: (e: React.KeyboardEvent) => {
                            if (e.key === 'Enter') {
                              const inputDate = new Date((e.target as HTMLInputElement).value);
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              if (inputDate < today) {
                                e.preventDefault();
                                setErrorMsg('Selected date cannot be in the past.');
                                setTimeout(() => setErrorMsg(''), 3000);
                              }
                            }
                          },
                        }} : {}),
                    }}
                    sx={{
                      "& input::placeholder": { color: "#fff", opacity: 0.8 },
                      ...(type === "date"
                        ? {
                          '& input[type="date"]::-webkit-calendar-picker-indicator': {
                            filter: 'invert(1)',
                            cursor: 'pointer',
                          },
                          '& input[type="date"]': {
                            colorScheme: 'light',
                          },
                        }
                        : {}),
                    }}
                    disabled={loading}
                    InputLabelProps={type === "date" ? { shrink: true } : undefined}
                  />
                </Box>
              ))}

              <Typography sx={{ color: "#fff", mb: 1, fontWeight: 500 }}>
                Select Category *
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                {/* Car Body Work Group */}
                <Box 
                  sx={{
                    flex: 1,
                    background: "#222",
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography sx={{ color: "#fff", mb: 1, fontWeight: 600 }}>
                    Car Body Work
                  </Typography>
                  <Divider sx={{ borderColor: "#444", mb: 1 }} />
                  {[
                    { label: "Alloy Wheel Rework", key: "alloy" },
                    { label: "Dent & Scratches", key: "dents" },
                    { label: "Car Detailing", key: "detailing" },
                  ].map((item) => (
                    <FormControlLabel
                      key={item.key}
                      control={
                        <Checkbox
                          name={item.key}
                          checked={formData.categories[item.key as CategoryKey]}
                          onChange={handleCheckboxChange}
                          sx={{
                            color: "#aaa",
                            "&.Mui-checked": { color: "#fff" },
                          }}
                          disabled={loading}
                        />
                      }
                      label={item.label}
                      sx={{ color: "#fff", mb: 1 }}
                    />
                  ))}
                </Box>

                {/* Work Shop Group */}
                <Box
                  sx={{
                    flex: 1,
                    background: "#222",
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography sx={{ color: "#fff", mb: 1, fontWeight: 600 }}>
                    Work Shop
                  </Typography>
                  <Divider sx={{ borderColor: "#444", mb: 1 }} />
                  {[
                    { label: "Service & Repair", key: "service" },
                    { label: "Diagnostic", key: "diagnostic" },
                    { label: "MOT Check", key: "mot" },
                  ].map((item) => (
                    <FormControlLabel
                      key={item.key}
                      control={
                        <Checkbox
                          name={item.key}
                          checked={formData.categories[item.key as CategoryKey]}
                          onChange={handleCheckboxChange}
                          sx={{
                            color: "#aaa",
                            "&.Mui-checked": { color: "#fff" },
                          }}
                          disabled={loading}
                        />
                      }
                      label={item.label}
                      sx={{ color: "#fff", mb: 1 }}
                    />
                  ))}
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={() => handleSubmit(type)}
                disabled={isButtonDisabled}
                sx={{
                  mt: 3,
                  backgroundColor: "#fff",
                  color: "#C8102E",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#eee",
                  },
                  "&:disabled": {
                    BACKGROUNDColor: "#aaa",
                    color: "#666",
                  },
                }}
              >
                {loading ? 'Submitting...' : 'SUBMIT'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };

  const renderSuccessModal = () => {
    return (
      <Modal
        open={openSuccessModal}
        onClose={() => {
          setSuccessMsg('');
          setOpenSuccessModal(false);
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ width: "100%", maxWidth: 400, mx: 2 }}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              p: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Image
              src={popupBackground}
              alt="Popup Background"
              fill
              style={{ objectFit: "cover", opacity: 0.1, zIndex: 0 }}
            />
            <IconButton
              onClick={() => {
                setSuccessMsg('');
                setOpenSuccessModal(false);
              }}
              sx={{ position: "absolute", top: 10, right: 10, color: "#fff", zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Alert severity="success" sx={{ mb: 2, bgcolor: 'rgba(76, 175, 80, 0.1)', color: '#fff' }}>
                {successMsg}
              </Alert>
              <Button
                variant="contained"
                onClick={() => {
                  setSuccessMsg('');
                  setOpenSuccessModal(false);
                }}
                sx={{
                  backgroundColor: "#fff",
                  color: "#C8102E",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#eee",
                  },
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        minHeight: "60vh",
      }}
    >
      {/* LEFT COLUMN */}
      <Box sx={{ flex: 1, position: "relative", minHeight: { xs: 300, md: "auto" } }}>
        <Image src={leftImage} alt="Have a Problem" fill style={{ objectFit: "cover" }} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            HAVE A PROBLEM?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              px: 3,
              py: 1,
              "&:hover": { backgroundColor: "#fff", color: "#000" },
            }}
            onClick={() => handleModalOpen("book")}
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>

      {/* RIGHT COLUMN */}
      <Box sx={{ flex: 1, position: "relative", minHeight: { xs: 300, md: "auto" } }}>
        <Image src={rightImage} alt="Work With Us" fill style={{ objectFit: "cover" }} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.26)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            WORK WITH US
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              px: 3,
              py: 1,
              "&:hover": { backgroundColor: "#fff", color: "#000" },
            }}
            onClick={() => handleModalOpen("contact")}
          >
            CONTACT US
          </Button>
        </Box>
      </Box>

      {/* Modals */}
      {renderFormModal("book")}
      {renderFormModal("contact")}
      {renderSuccessModal()}
    </Box>
  );
}