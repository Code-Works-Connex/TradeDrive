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
} from "@mui/material";
import Image from "next/image";

import leftImage from "../../../public/images/img9.png";
import rightImage from "../../../public/images/img10.png";
import popupBackground from "../../../public/images/img1.png";

import CloseIcon from "@mui/icons-material/Close";

export default function Sec7() {
  const [openBookModal, setOpenBookModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      categories: { ...prev.categories, [name]: checked },
    }));
  };

  const renderModal = (type) => {
    const isContact = type === "contact";

    return (
      <Modal
        open={isContact ? openContactModal : openBookModal}
        onClose={() =>
          isContact ? setOpenContactModal(false) : setOpenBookModal(false)
        }
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            p: 4,
            borderRadius: 2,
            maxWidth: "520px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            scrollbarColor: "#555 transparent",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "10px",
              border: "2px solid transparent",
              backgroundClip: "content-box",
            },
          }}
        >
          <Image
            src={popupBackground}
            alt="Popup Background"
            fill
            style={{ objectFit: "cover", opacity: 0.15, zIndex: 0 }}
            sizes="(max-width: 768px) 90vw, 500px"
          />
          <IconButton
            onClick={() =>
              isContact ? setOpenContactModal(false) : setOpenBookModal(false)
            }
            sx={{ position: "absolute", top: 12, right: 12, color: "#fff", zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography variant="h5" sx={{ mb: 3, color: "#fff", fontWeight: 300 }}>
              {isContact ? "Let's Work Together" : "Book Your Slot"}
            </Typography>

            {[
              ...(isContact
                ? [{ label: "Company Name", name: "company" }]
                : [{ label: "Name", name: "name" }]),
              { label: "Phone", name: "phone" },
              { label: "Email", name: "email" },
            ].map(({ label, name }) => (
              <Box
                key={name}
                sx={{
                  display: "flex",
                  alignItems: "center",
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
                  InputProps={{ disableUnderline: true, style: { color: "#fff" } }}
                  sx={{ "& input::placeholder": { color: "#fff", opacity: 0.8 } }}
                />
              </Box>
            ))}

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography sx={{ color: "#fff", flexGrow: 1 }}>Select Category</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
              }}
            >
              {/* Car Body Work */}
              <Box sx={{ backgroundColor: "#1e1e1e", p: 2, borderRadius: 2, flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: "#fff", mb: 1 }}>
                  Car Body Work {">"}
                </Typography>
                {[
                  { label: "Alloy Wheel Rework", key: "alloy" },
                  { label: "Dents & Scratures", key: "dents" },
                  { label: "Car Detailing", key: "detailing" },
                ].map((item) => (
                  <FormControlLabel
                    key={item.key}
                    control={
                      <Checkbox
                        checked={formData.categories[item.key]}
                        onChange={handleCheckboxChange}
                        name={item.key}
                        sx={{ color: "#ccc", "&.Mui-checked": { color: "#fff" } }}
                      />
                    }
                    label={item.label}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      ml: 0,
                      color: "#fff",
                    }}
                  />
                ))}
              </Box>

              {/* Workshop */}
              <Box sx={{ backgroundColor: "#1e1e1e", p: 2, borderRadius: 2, flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: "#fff", mb: 1 }}>
                  Work Shop {">"}
                </Typography>
                {[
                  { label: "Service & repair", key: "service" },
                  { label: "Diagnostic", key: "diagnostic" },
                  { label: "MOT check", key: "mot" },
                ].map((item) => (
                  <FormControlLabel
                    key={item.key}
                    control={
                      <Checkbox
                        checked={formData.categories[item.key]}
                        onChange={handleCheckboxChange}
                        name={item.key}
                        sx={{ color: "#ccc", "&.Mui-checked": { color: "#fff" } }}
                      />
                    }
                    label={item.label}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      ml: 0,
                      color: "#fff",
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#fff",
                color: "#C8102E",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#ddd",
                },
              }}
            >
              SUBMIT
            </Button>
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
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            GET IN TOUCH
          </Typography>
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

      {/* BOTH MODALS */}
      {renderModal("book")}
      {renderModal("contact")}
    </Box>
  );
}
