import React from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Home = (props) => {
    const loading = useSelector(state => state.user.isLoading)

    return (
        <>
            { loading? (
                <CircularProgress/>
            ) : (
                <Container>
                    <Typography>Home Page</Typography>
                </Container>
            ) }
        </>
        
    )
}

export default Home