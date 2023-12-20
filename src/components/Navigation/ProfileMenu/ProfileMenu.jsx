import Avatar from "@mui/material/Avatar";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../../../store/AuthSlice";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function ProfileMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const fullName = useSelector((state) => state.auth.fullName);
  const token = useSelector((state) => state.auth.token);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    handleLogout(dispatch);
    setAnchorElUser(null);
  };

  if (!token || !fullName) {
    return (
      <Link to={"/auth/login"}>
        <Button variant="outlined">Sign in/up</Button>
      </Link>
    );
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open profile">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar {...stringAvatar(fullName)} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{"Profile"}</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <Typography textAlign="center">{"Logout"}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
