// Paste this entire updated Sec7 component in your file

"use client";

import React, { useState } from "react";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

import leftImage from "../../../public/images/img9.png";
import rightImage from "../../../public/images/img10.png";
import popupBackground from "../../../public/images/img1.png";

type CategoryKey = "alloy" | "dents" | "detailing" | "service" | "diagnostic" | "mot";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  categories: Record<CategoryKey, boolean>;
}

export default function Sec7() {
  const [openBookModal, setOpenBookModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    categories: {
      alloy: false,
      dents: false,
      detailing: false,
      service: false,
      diagnostic: false,
      mot: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      categories: { ...prev.categories, [name]: checked },
    }));
  };

  const renderModal = (type: "book" | "contact") => {
    const isContact = type === "contact";

    return (
      <Modal
        open={isContact ? openContactModal : openBookModal}
        onClose={() => (isContact ? setOpenContactModal(false) : setOpenBookModal(false))}
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
              "&::-webkit-scrollbar": {
                width: "8px",
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
              onClick={() => (isContact ? setOpenContactModal(false) : setOpenBookModal(false))}
              sx={{ position: "absolute", top: 10, right: 10, color: "#fff", zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="h5" sx={{ mb: 3, color: "#fff", fontWeight: 500 }}>
                {isContact ? "Let's Work Together" : "Book Your Slot"}
              </Typography>

              {([
                ...(isContact
                  ? [{ label: "Company Name", name: "company" as const }]
                  : [{ label: "Name", name: "name" as const }]),
                { label: "Phone", name: "phone" as const },
                { label: "Email", name: "email" as const },
              ] as const).map(({ label, name }) => (
                <Box
                  key={name}
                  sx={{
                    mb: 2,
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <TextField
                    fullWidth
                    name={name}
                    placeholder={label}
                    variant="standard"
                    value={formData[name]}
                    onChange={handleChange}
                    InputProps={{
                      disableUnderline: true,
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& input::placeholder": { color: "#fff", opacity: 0.8 },
                    }}
                  />
                </Box>
              ))}

              <Typography sx={{ color: "#fff", mb: 1, fontWeight: 500 }}>
                Select Category
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
                    Car Body Work &gt;
                  </Typography>
                  <Divider sx={{ borderColor: "#444", mb: 1 }} />
                  {[
                    { label: "Alloy Wheel Rework", key: "alloy" },
                    { label: "Dents & Scratures", key: "dents" },
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
                    Work Shop &gt;
                  </Typography>
                  <Divider sx={{ borderColor: "#444", mb: 1 }} />
                  {[
                    { label: "Service & repair", key: "service" },
                    { label: "Diagnostic", key: "diagnostic" },
                    { label: "MOT check", key: "mot" },
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
                sx={{
                  mt: 3,
                  backgroundColor: "#fff",
                  color: "#C8102E",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#eee",
                  },
                }}
              >
                SUBMIT
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
            onClick={() => setOpenBookModal(true)}
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
            onClick={() => setOpenContactModal(true)}
          >
            CONTACT US
          </Button>
        </Box>
      </Box>

      {/* Modals */}
      {renderModal("book")}
      {renderModal("contact")}
    </Box>
  );
}
