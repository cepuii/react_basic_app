import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import googlePlayBadge from "../../images/google-play-badge.png";
import appStoreBadge from "../../images/app-store-badge.png";

export default function Footer() {
  const additionalInfoButtons = [
    "Terms of use",
    "Privacy-Policy",
    "FAQ",
    "Watch List",
  ];

  const socialLinkIcons = [
    "fa-facebook-f",
    "fa-twitter",
    "fa-google-plus-g",
    "fa-github",
  ];

  const buttonStoreStyle = {
    bgcolor: "#252525",
    width: "145px",
    height: "55px",
    "&:hover": {
      border: `2px solid white`,
      backgroundColor: "#252525",
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#141414",
        color: "white",
        padding: "40px 0 20px",
        width: "100%",
      }}
      component="footer"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ backgroundColor: "#191919", minHeight: "100px", padding: "20px" }}
      >
        <Grid item lg={6}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {additionalInfoButtons.map((value) => (
              <Button
                size="md"
                variant="plain"
                color="neutral"
                sx={{
                  textTransform: "none",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "#252525",
                  },
                }}
              >
                {value}
              </Button>
            ))}
          </Box>
          <Typography
            variant="subtitle3"
            align="left"
            color="white"
            component="p"
            marginTop="20px"
          >
            © 2023 WATCHIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </Typography>
        </Grid>
        <Grid item lg={2}>
          <Typography
            variant="subtitle1"
            align="left"
            color="white"
            component="p"
            marginBottom="10px"
            marginLeft="10px"
          >
            Follow us:
          </Typography>

          {socialLinkIcons.map((iconName) => (
            <IconButton
              sx={{
                bgcolor: "#252525",
                margin: "5px",
                width: "40px",
                height: "40px",
                "&:hover": {
                  border: `2px solid white`,
                  backgroundColor: "#252525",
                },
              }}
              size="small"
              aria-label="socialLink"
              onClick={(event) => console.log(event)}
            >
              <FontAwesomeIcon
                icon={"fa-brands " + iconName}
                style={{ color: "#fff" }}
              />
            </IconButton>
          ))}
        </Grid>
        <Grid item lg={2}>
          <Typography
            variant="subtitle1"
            align="left"
            color="white"
            component="p"
            marginBottom="10px"
            marginLeft="10px"
          >
            Watchit App
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "no-wrap" }}>
            <Button sx={buttonStoreStyle}>
              <img src={googlePlayBadge} alt="Google Play" width="100%"></img>
            </Button>
            <Button sx={buttonStoreStyle}>
              <img src={appStoreBadge} alt="App Store" width="100%"></img>
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* </div> */}
    </Box>
  );
}
