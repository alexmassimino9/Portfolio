import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";

const NavButton = ({ to, children }) => {
  return (
    <Button
      sx={{
        bgcolor: "transparent",
        color: "#1A1A1A",
        textTransform: "none",
        fontSize: "1.2rem",
        fontWeight: 500,
        borderRadius: "8px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          bgcolor: "#2ECC71",
          color: "#FFF",
        },
      }}
      className="link"
      variant="text"
      component={Link}
      to={to}
    >
      {children}
    </Button>
  );
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const pages = [
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#FFF",
        color: "#1A1A1A",
        borderBottom: "1px solid #F4F4F4",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography variant="h5">
            <Button
              sx={{
                bgcolor: "transparent",
                color: "#1A1A1A",
                textTransform: "none",
                fontWeight: 700,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  color: "#2ECC71",
                },
              }}
              component={Link}
              to="/"
            >
              My Portfolio
            </Button>
          </Typography>
        </Box>
        <IconButton
          sx={{ ml: 2 }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.path}
              onClick={handleClose}
              component={Link}
              to={page.path}
            >
              {page.label}
            </MenuItem>
          ))}
        </Menu>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography variant="h6">
            <Button
              sx={{
                bgcolor: "transparent",
                color: "#1A1A1A",
                textTransform: "none",
                fontWeight: 700,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  color: "#2ECC71",
                },
              }}
              component={Link}
              to="/"
            >
              My Portfolio
            </Button>
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {pages.map((page) => (
            <NavButton key={page.path} to={page.path}>
              {page.label}
            </NavButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
