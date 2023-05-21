import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { Typography, Grid } from "@material-ui/core";
import "./Footer.css";
import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <Grid alignItems="center" item xs={12}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          style={{ backgroundColor: "#810081", height: "120px" }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              Feito com carinho por
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              Vinicius da Silva dos Santos
            </Typography>
          </Box>
          <Box display="flex" gap={4} alignItems="center" justifyContent="center">
            <a href="https://wa.me/5511990244686" target="_blank">
              <WhatsAppIcon style={{ fontSize: 60, color: "white" }} />
            </a>
            <a href="https://github.com/VinnyPC" target="_blank">
              <GitHubIcon style={{ fontSize: 60, color: "white" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/viniciussilvadev/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
            </a>
          </Box>

          <Box style={{ backgroundColor: "#810081", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Agradecimento à:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "white" }}
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Footer;
