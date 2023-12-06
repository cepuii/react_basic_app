import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../images/logo.png";
import { MENU } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import "./navigation.css";

export default function Navigation({ pages }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#2b2d42" }}>
          <Typography variant="h6" component="div" sx={{ paddingTop: "5px" }}>
            <img src={logo} alt="logo" width={"250px"} />
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
