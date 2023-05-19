import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import './Home.css';
import { Box } from '@mui/material';
import TabPostagem from '../../../components/postagens/tabpostagem/TabPostagem';


function Home() {
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white"}} >
            <Grid alignItems="center" item xs={6} >
                <Box paddingX={20} >
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>BlogPessoal Vinicius</Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Seja bem vindo!</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>
                    <Button variant="contained" style={{ borderColor: "white", backgroundColor: "#810081", color: "white" }} className='Home-Button'>Ver Postagens</Button>
                </Box>
            </Grid>
            <Grid item xs={6} >
                <img src="https://inventta.net/wp-content/uploads/2021/02/capa-1-henrique-1024x516.png" alt="" width="100%" height="100%" />
            </Grid>
            <Grid xs={12} style={{ backgroundColor: "white" }}>
                <TabPostagem />
            </Grid>
        </Grid>
    </>
    );
}

export default Home;