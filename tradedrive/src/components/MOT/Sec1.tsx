"use client";

import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import bgImage from "../../../public/images/motBanner.jpg";

export default function Sec1() {
  const bulletPointsLeft = [
    "Check the MOT, Tax & Vehicle stats of any UK reg plate.",
    "Receive email and SMS reminders before your vehicle tax & MOT expire.",
    "Receive up to 25% back when you book your MOT online with Check Mot.",
  ];

  const bulletPointsRight = [
    "Comprehensive vehicle reports from within your dashboard.",
    "Sell your vehicle via Check Mot and receive additional cash back.",
  ];

  // Framer Motion variants
 const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // Explicitly type as cubic-bezier
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Wrapper: background for mobile */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage: {
            xs: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bgImage.src})`,
            md: "none",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 10 },
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            width: "100%",
            maxWidth: "700px",
            marginTop: "var(--motion-margin-top, 3rem)",
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            View <span style={{ color: "red" }}>MOT & Vehicle</span>
            <br />
            Tax Records
          </Typography>

          <Typography variant="body1" sx={{ color: "#ccc", mb: 4 }}>
            Easily access both current and past MOT results and road tax status. Get a detailed
            history of your vehicle’s MOT tests, including dates, outcomes, advisories, and
            failures, along with up-to-date tax information.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
            }}
          >
            <Box>
              <List dense>
                {bulletPointsLeft.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ListItem disableGutters>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: "#00bfff", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Box>
            <Box>
              <List dense>
                {bulletPointsRight.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ListItem disableGutters>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: "#00bfff", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Right side image for desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flex: 1,
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
}
