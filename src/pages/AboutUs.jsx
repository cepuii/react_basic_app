import { Box, Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
import AVATAR from "../images/avatar.png";

const AboutUs = () => {
  return (
    <Grid
      container
      spacing={3}
      direction={"row"}
      justifyContent={"space-around"}
      sx={{ margin: "90px 20px 20px 20px" }}
    >
      <Grid item xs={12} md={3}>
        <img
          src={AVATAR}
          alt="Actor"
          width="220px"
          height="auto"
          style={{ margin: "30px" }}
        />
        <Typography variant="h4" component="h4">
          {"Personal info"}
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {"Serhei"}
        </Typography>
        <IconButton>
          <FacebookIcon></FacebookIcon>
        </IconButton>
        <IconButton>
          <TwitterIcon></TwitterIcon>
        </IconButton>
        <IconButton>
          <ShareIcon></ShareIcon>
        </IconButton>
        <Typography variant="h6" component="h4">
          {"Birthday"}
        </Typography>
        <Typography component="p">{"30.08.1992"}</Typography>
        <Typography variant="h6" component="h4">
          {"Country"}
        </Typography>
        <Typography component="p">{"Ukraine"}</Typography>
        <Typography variant="h6" component="h4">
          {"Gender"}
        </Typography>
        <Typography component="p">{"Male"}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {"Serhei"}
          </Typography>
          <hr
            style={{
              height: "2px",
              width: "100%",
              border: "none",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <Typography
            component="h6"
            sx={{
              display: "block",
              maxHeight: "150px",
              overflow: "auto",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          >
            {`Hey there!`}
          </Typography>
          <Typography
            component="p"
            sx={{
              display: "block",
              maxHeight: "150px",
              overflow: "auto",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          >
            {`Welcome to my site! I'm a frontend developer 
            with a sprinkle of backend experience – not quite 
            full-stack yet, but that's the goal! 🚀 The site 
            is crafted with React, and I'm eyeing React Native
            for future adventures in mobile development.`}
          </Typography>
          <Typography
            component="p"
            sx={{
              display: "block",
              maxHeight: "150px",
              overflow: "auto",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          >
            {`By the way, I recently graduated from Senior Full-Stack 
            Developer Nikolay's courses, and I couldn't be 
            happier with the knowledge gained. Everything you see 
            on this site is a direct result of those fantastic 
            courses. Let's keep the coding journey rolling! 👩‍💻✨`}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
