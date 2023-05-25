import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import TabPostagem from "../../../components/postagens/tabpostagem/TabPostagem";
import { Brightness1 } from "@mui/icons-material";
import ModalPostagem from "../../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Home() {

   let navigate = useNavigate();
   const [token, setToken] = useLocalStorage("Token");

   useEffect(() => {
     if (token == "") {
       alert("Você precisa estar logado");
       navigate("/login");
     }
   }, [token]);
   
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="imgBackgroundHome"
        style={{
          backgroundImage:
            "url(https://i.ytimg.com/vi/XgOov36UzjQ/maxresdefault.jpg)",
          backgroundSize: "100vw"
        }}
      >
        <Grid item xs={8}>
          <img
            src="https://i.pinimg.com/originals/77/ca/a3/77caa32884d735d439ade45ba37feaf2.gif"
            style={{
              marginTop: "20px",
              borderRadius: "15px",
              border: "2px solid #000000",
            }}
            width="100%"
            height="100%"
          />
        </Grid>

        <Box className="homeCard">
          <Box padding={"15px"}>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="h4"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              BlogPessoal Vinicius
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Seja bem vindo!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" gap={1} marginBottom={2}>
            <Box>
              <ModalPostagem  />
            </Box>
            <Button
              variant="contained"
              style={{
                borderColor: "white",
                backgroundColor: "#810081",
                color: "white",
              }}
              className="Home-Button"
            >
              Ver Postagens
            </Button>
          </Box>
        </Box>

        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
