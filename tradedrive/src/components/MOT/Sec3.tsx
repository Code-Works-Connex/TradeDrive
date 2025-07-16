"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import motCheckIcon from "../../../public/images/car.png";
import numberSearchIcon from "../../../public/images/search.png";
import viewResultsIcon from "../../../public/images/medical-result.png";

export default function Sec3() {
  const items = [
    {
      icon: motCheckIcon,
      title: "MOT Check",
      description: "MOT checks are a legal requirement for all vehicles in the UK that are over 3 years old.",
    },
    {
      icon: numberSearchIcon,
      title: "Simple Number Plate Search",
      description: "Enter your vehicle registration number online and click search.",
    },
    {
      icon: viewResultsIcon,
      title: "View Results",
      description: "View instant results on the current and historical status of your vehicle",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 5 },
        backgroundColor: "#fff",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 6,
          color: "red",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        How it works
      </Typography>

      {/* Item Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ flex: 1, maxWidth: 300 }}
          >
            <Box sx={{ mx: "auto" }}>
              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={70}
                style={{ marginBottom: 20 }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#444" }}>
                {item.description}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
