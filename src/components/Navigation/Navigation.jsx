import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../images/logo.png";
import { MENU } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import SearchInput from "./SearchInput/SearchInput";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navigation({ pages }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#2b2d42" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ paddingTop: "5px", display: { xs: "none", md: "flex" } }}
          >
            <img src={logo} alt="logo" width={"250px"} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "#4a4e69",
              }}
            >
              {MENU.map(({ name, link }, index) => (
                <NavLink
                  key={index}
                  to={link}
                  className={({ isActive }) =>
                    `navLink ${isActive ? "isActive" : ""}`
                  }
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {MENU.map(({ name, link }, index) => (
              <NavLink
                key={index}
                to={link}
                className={({ isActive }) =>
                  `navLink ${isActive ? "isActive" : ""}`
                }
              >
                {name}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ mr: "50px" }}>
            <SearchInput></SearchInput>
          </Box>
          <ProfileMenu></ProfileMenu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
