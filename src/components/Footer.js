import {Box, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import {Sparkles} from "lucide-react";

function Footer() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "black.main", opacity: "0.6" }}>
        <Toolbar>
          <Stack
            direction={"row"}
            spacing={17}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            <React.Fragment />
            <Stack direction={"row"} spacing={1}>
              <IconButton
                href="https://github.com/Llianae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: "white.main" }} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/laureline-zittel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon sx={{ color: "white.main" }} />
              </IconButton>
              <IconButton
                href="mailto:laureline.zittel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon sx={{ color: "white.main" }} />
              </IconButton>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} alignItems="center">
              <Typography variant="h6" sx={{ color: "white.main" }}>
                © 2023 - Laureline Zittel
              </Typography>
            <Button
                style={
                  {
                    color: "hsl(211,95%,63%)",
                    padding: "0px 1.2rem 0px 1.2rem",
                  }
                } href="https://hugochampy.fr" target="_blank"
                rel="noopener noreferrer"><Sparkles className="blink_me"/></Button>
          </Stack>
          </Stack>
        </Toolbar>
      </Box>
    </React.Fragment>
  );
}

export default Footer;
