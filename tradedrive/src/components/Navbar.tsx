"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { usePathname } from "next/navigation";

const theme = createTheme({
  typography: {
    fontFamily: "Orbitron, sans-serif",
  },
});

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [menuAnchors, setMenuAnchors] = React.useState<{ [key: string]: null | HTMLElement }>({
    "body-shop": null,
    services: null,
  });
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = React.useState<string | null>(null);
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>, itemKey: string) => {
    setMenuAnchors((prev) => ({
      ...prev,
      [itemKey]: prev[itemKey] ? null : event.currentTarget,
    }));
  };

  const handleMenuClose = (itemKey: string) => {
    setMenuAnchors((prev) => ({ ...prev, [itemKey]: null }));
  };

  const toggleMobileSubMenu = (itemHref: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setMobileSubMenuOpen((prev) => (prev === itemHref ? null : itemHref));
  };

  const menuItems = [
    { text: "Home", href: "/" },
    {
      text: "Body Shop",
      href: "/body-shop",
      subItems: [
        { text: "Car Body Work", href: "/body-shop/car-body-work" },
        { text: "Alloy Wheel Rework", href: "/body-shop/alloy-wheel-straightening" },
        { text: "Dent & Scratches", href: "/body-shop/dent-scratches" },
        { text: "Car Detailing", href: "/body-shop/car-detailing" },
      ],
    },
    {
      text: "Services",
      href: "/services",
      subItems: [
        { text: "Service & Repair", href: "/services/service-repair" },
        { text: "Diagnostic", href: "/services/diagnostic" },
        { text: "MOT Check", href: "/services/mot-check" },
      ],
    },
    { text: "Blogs", href: "/blogs" }, // ✅ New main nav link
    { text: "Our Work", href: "/our-work" },
    { text: "Contact Us", href: "/contact" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            background: "linear-gradient(45deg,rgb(0, 0, 0),rgb(2, 2, 3))",
            transition: "all 0.3s ease-in-out",
            top: "10px",
            width: "90%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: { xs: "space-between", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", ml: { md: "5%" } }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <Image
                  src="/images/logo1.png"
                  alt="Trade Drive Motors Logo"
                  width={150}
                  height={40}
                  style={{ marginRight: "10px" }}
                  sizes="(max-width: 600px) 100px, (max-width: 900px) 120px, 150px"
                />
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
                gap: { md: "15px", lg: "20px" },
              }}
            >
              {menuItems.slice(0, -1).map((item) => (
                <Box key={item.href} sx={{ position: "relative" }}>
                  {item.subItems ? (
                    <>
                      <Typography
                        onClick={(e) => handleMenuToggle(e, item.href.replace("/", ""))}
                        sx={{
                          color: "white",
                          cursor: "pointer",
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "center",
                          borderBottom: pathname.startsWith(item.href) ? "2px solid white" : "none",
                          transition: "color 0.3s ease, border-bottom 0.3s ease",
                          "&:hover": { color: "red" },
                        }}
                      >
                        {item.text}
                        <ExpandMoreIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
                      </Typography>
                      <Menu
                        anchorEl={menuAnchors[item.href.replace("/", "")]}
                        open={Boolean(menuAnchors[item.href.replace("/", "")])}
                        onClose={() => handleMenuClose(item.href.replace("/", ""))}
                        PaperProps={{
                          sx: {
                            mt: 1,
                            borderRadius: 2,
                            boxShadow: 4,
                            background: "linear-gradient(135deg, #1a1a2a, #2a2a3a)",
                            p: 1,
                          },
                        }}
                      >
                        {item.subItems.map((subItem, idx) => (
                          <React.Fragment key={subItem.href}>
                            {idx > 0 && <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />}
                            <MenuItem
                              onClick={() => handleMenuClose(item.href.replace("/", ""))}
                              sx={{
                                py: 1,
                                px: 2,
                                "&:hover": { backgroundColor: "rgba(255, 0, 255, 0.1)" },
                              }}
                            >
                              <Link
                                href={subItem.href}
                                style={{ textDecoration: "none", color: "white" }}
                              >
                                {subItem.text}
                              </Link>
                            </MenuItem>
                          </React.Fragment>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Box
                      sx={{
                        borderBottom: pathname === item.href ? "2px solid white" : "none",
                        transition: "border-bottom 0.3s ease",
                      }}
                    >
                      <Link
                        href={item.href}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: "14px", sm: "14px", md: "16px" },
                            transition: "color 0.3s ease",
                            "&:hover": { color: "red" },
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Link>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto", mr: { md: "5%" } }}>
              <Button
                component={Link}
                href="/contact"
                sx={{
                  background: "linear-gradient(90deg, rgb(105, 28, 28) 0%, red 100%)",
                  color: "white",
                  borderRadius: 50,
                  padding: "6px 20px",
                  fontSize: { xs: "14px", md: "16px" },
                  textTransform: "none",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                Contact Us
              </Button>
            </Box>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "none" }, "&:hover": { color: "red" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: { xs: 200, sm: 250 },
              p: 2,
              position: "relative",
              background: "#111",
              height: "100%",
            }}
            role="presentation"
          >
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
            >
              <CloseIcon />
            </IconButton>

            <List>
              {menuItems.map((item) => (
                <React.Fragment key={item.href}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={
                        item.subItems ? toggleMobileSubMenu(item.href) : toggleDrawer(false)
                      }
                      sx={{
                        justifyContent: "space-between",
                        borderBottom: pathname === item.href ? "2px solid white" : "none",
                      }}
                    >
                      <Link
                        href={item.subItems ? "#" : item.href}
                        style={{ textDecoration: "none", color: "white", flexGrow: 1 }}
                        onClick={(e) => item.subItems && e.preventDefault()}
                      >
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{ fontSize: { xs: "14px", sm: "16px" } }}
                        />
                      </Link>
                      {item.subItems && (
                        <ExpandMoreIcon
                          sx={{
                            color: "white",
                            transform: mobileSubMenuOpen === item.href ? "rotate(180deg)" : "none",
                            transition: "0.3s",
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                  {item.subItems && mobileSubMenuOpen === item.href && (
                    <>
                      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", my: 1 }} />
                      {item.subItems.map((sub, idx) => (
                        <Box key={sub.href} sx={{ pl: 3 }}>
                          <ListItem disablePadding>
                            <ListItemButton onClick={toggleDrawer(false)} sx={{ py: 1 }}>
                              <Link
                                href={sub.href}
                                style={{ textDecoration: "none", color: "white", width: "100%" }}
                              >
                                <ListItemText
                                  primary={sub.text}
                                  primaryTypographyProps={{ fontSize: "14px" }}
                                />
                              </Link>
                            </ListItemButton>
                          </ListItem>
                          {idx < item.subItems!.length - 1 && (
                            <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
                          )}
                        </Box>
                      ))}
                    </>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
