import React from "react";
import { Box } from "@mui/system";
import {  Container, Paper, Typography } from "@mui/material";
import notFound from "./../../assets/notFound.png"

const homePageStyle = {
    backgroundImage: `url(${notFound})`,
    backgroundSize: "cover",
    width: 700,
    height: 500,
    display: "flex",
    justifyContent: "center"
}

const NotFound = (props) => {
    return (
        <Container>
            <Box sx={{display: "flex", justifyContent: "center", mt: 8, alignContent: "column"}}>
                <Paper sx={homePageStyle}/>
            </Box>
        </Container>
    )
}

export default NotFound