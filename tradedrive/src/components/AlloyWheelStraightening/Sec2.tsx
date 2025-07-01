"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import wheelIcon from "../../../public/images/alloyWheel/wheel-icon.png";
import gearIcon from "../../../public/images/alloyWheel/gear-icon.png";
import sprayIcon from "../../../public/images/alloyWheel/spray-icon.png";

const services = [
  {
    icon: wheelIcon,
    alt: "Wheel Refinishing",
    label: "Wheel Refinishing ",
    width: 80,
    height: 80,
  },
  {
    icon: gearIcon,
    alt: "Wheel Remanufacturing",
    label: "Wheel Remanufacturing ",
    width: 80,
    height: 80,
  },
  {
    icon: sprayIcon,
    alt: "Wheel Custom Coloring",
    label: "Wheel Custom Coloring ",
    width: 80,
    height: 80,
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        textAlign: "center",
        my: 5,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Alloy Wheel Repair Specialists
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mb:3 }}>
        High Quality Alloy Wheel Repair, Custom Coloring & OEM Replacements
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ px: { md: "150px", xs: "10px", color:'gray' } }}
      >
        From minor cosmetic damage to complete restoration, Alloy Wheel Repair
        Specialists offers professional and <span color="black">affordable alloy rim repair.</span>  We can
        straighten and refinish wheels with the custom color of your choice. If
        your rims are beyond repair, we have access to the best-quality OEM
        replacements.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
          marginTop: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {services.map((service, index) => (
          <Box
            style={{
              transition: "transform 0.3s ease", // Smooth transition for scaling
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            } // Scale up on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset on leave
            key={index}
            sx={{
              display: "flex", mt:3,
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Image
              src={service.icon}
              alt={service.alt}
              width={service.width}
              height={service.height}
            />
            <Button
              sx={{
                marginTop: 1,
                fontWeight: "bold",
                color: "#E53935",
                fontFamily: "Roboto, sans-serif",
                fontSize: "0.88rem",  
              }}
            >
              {service.label}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
