import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../images/logo.png";
import { MENU } from "../../constants/constants";
import { NavLink } from "react-router-dom";

const navToolbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#14213d",
};

export default function Navigation({ pages }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={navToolbarStyle}>
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
