"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import infoImage from "../../../public/images/MOTimage2.png"; // adjust path as needed

export default function Sec2() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "center",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 8 },
        gap: 4,
      }}
    >
      {/* Image */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: "100%", md: 450 },
          height: { xs: 300, md: 500 },
          position: "relative",
        }}
      >
        <Image
          src={infoImage}
          alt="MOT Info"
          fill
          style={{ objectFit: "cover", borderRadius: 2 }}
        />
      </Box>

      {/* Text */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "red" }} gutterBottom>
           MOT Checks
        </Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Everything You Need To<br />Know
        </Typography>

        <Typography variant="body1" sx={{ color: "#333", textAlign: "justify" }}>
          Owning a car in the UK comes with important legal responsibilities. Alongside keeping your
          vehicle taxed and insured, one of the key obligations is passing the annual MOT test.
          Short for “Ministry of Transport”, the MOT is required for all vehicles over three years
          old to ensure they meet safety and environmental standards.

          <br/>
          <br/>

          Having a valid MOT is a legal obligation, not just an optional part of owning a vehicle. Recently, penalties for driving without an MOT or valid road tax have become more severe. Catching you could result in a hefty fine and potentially six penalty points on your licence. Many police vehicles are now equipped with automatic systems connected to the DVLA, allowing them to instantly verify whether your car is taxed, insured, and MOT-certified. Simply put, driving without proper documentation just isn’t worth the risk.
        </Typography>
      </Box>
    </Box>
  );
}
