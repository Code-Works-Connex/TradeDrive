"use client";

import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const services = [
  {
    title: "Logbook & Scheduled Servicing",
    description:
      "Keep your warranty intact and extend the life of your car with manufacturer approved servicing.",
  },
  {
    title: "Oil & Filter Changes",
    description:
      "Protect your engine and maintain smooth performance with regular oil and filter replacements.",
  },
  {
    title: "Brake Repairs & Replacements",
    description:
      "Stay safe with thorough brake inspections, pad replacements, rotor machining, and fluid checks.",
  },
  {
    title: "Suspension & Steering Repairs",
    description:
      "We handle shocks, struts, bushings, and steering components to ensure a comfortable, controlled ride.",
  },
  {
    title: "Cooling System Repairs",
    description:
      "From radiator replacements to hose and water pump repairs, we keep your engine at the right temperature.",
  },
  {
    title: "Clutch & Transmission Servicing",
    description:
      "Smooth shifting and power delivery with professional clutch replacements and basic transmission servicing.",
  },
  {
    title: "Exhaust & Muffler Repairs",
    description:
      "Reduce noise, improve fuel economy, and lower emissions with our exhaust system services.",
  },
  {
    title: "Battery Replacement & Charging System Checks",
    description:
      "Ensure reliable starts and proper charging with battery services and alternator checks.",
  },
];

export default function Sec2() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getColumnCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const columnCount = getColumnCount();

  return (
    <Box sx={{ backgroundColor: "#fff", color: "#000", py: 8 }}>
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h3"
          sx={{
            color: "#C8102E",
            textAlign: "center",
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Premium Vehicle Service & Repairs
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#333",
            maxWidth: 800,
            mx: "auto",
            mb: 6,
          }}
        >
          At Trade Drive Autos, we offer full service car care from maintenance to mechanical repairs.
          Count on our skilled technicians for trusted, high quality work.
        </Typography>

        {/* Accordion Grid Container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              style={{
                flex: `1 1 calc(${100 / columnCount}% - 24px)`,
                minWidth: 280,
                maxWidth: 360,
              }}
            >
              <Accordion
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  "&::before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#C8102E" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{ px: 2 }}
                >
                  <Typography sx={{ color: "#C8102E", fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#fff"  , textAlign: 'justify'}}>
                    {service.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
