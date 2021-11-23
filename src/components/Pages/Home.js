import React from "react";
import { Box } from "@mui/system";
import { CircularProgress, Container, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import homeIllustration from "./../../assets/homeIllustration.png"

const homePageStyle = {
    backgroundImage: `url(${homeIllustration})`,
    backgroundSize: "cover",
    width: 700,
    height: 500,
    display: "flex",
    justifyContent: "center"
}

const Home = (props) => {
    const loading = useSelector(state => state.user.isLoading)

    return (
        <>
            { loading? (
                <Box sx={{ml: "50%"}}>
                    <CircularProgress />
                </Box>
            ) : (
                <Container>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 8, alignContent: "column"}}>
                        <Paper sx={homePageStyle}>
                            <Typography variant="h3">Time to take Notes </Typography>
                        </Paper>
                    </Box>
                    
                </Container>
            ) }
        </>
        
    )
}

export default Home