import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        className="Appbar"
        style={{ background: "#810081"}}
      >
        <Toolbar variant="dense" className="Navbar" style={{display: "flex", justifyContent: "space-around", marginTop: "1em"}}>
          <Box style={{ cursor: "pointer" }} className="Navbar-Logo">
            <Typography variant="h4" color="inherit">
              BlogPessoal - Vinicius
            </Typography>
          </Box>

          <Stack direction={"row"} gap={5}>
            <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink">
              <Button variant="text" style={{ color: "white" }}>
                Home
              </Button>
            </Box>

            <Box px={1} style={{ cursor: "pointer" }} className="NavbarLink">
              <Button variant="text" style={{ color: "white" }}>
                Postagens
              </Button>
            </Box>

            <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink">
              <Button variant="text" style={{ color: "white" }}>
                Temas
              </Button>
            </Box>

            <Box px={1} style={{ cursor: "pointer" }} className="NavbarLink">
              <Button variant="text" style={{ color: "white" }}>
                Cadastrar Tema
              </Button>
            </Box>

            <Link to="/login">
              <Box px={2} style={{ cursor: "pointer" }} className="NavbarLink">
                <Button variant="text" style={{ color: "white" }}>
                  Logout
                </Button>
              </Box>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
