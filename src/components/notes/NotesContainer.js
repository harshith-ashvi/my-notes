import { Container, Typography, Grid, CircularProgress } from "@mui/material";
import React from"react";
import { Box } from "@mui/system";
import NotesList from "./NotesList";
import NotesForm from "./NotesForm";
import { useSelector } from "react-redux";

const mainBoxStyle = {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const NotesContainer = () => {
    const notes = useSelector(state => state.notes)

    const { isLoading } = notes

    return (
        <>
            { !localStorage.getItem("token")? (
                <Box sx={mainBoxStyle}>
                    <Typography variant="h5">You must Login first</Typography>
                </Box>
            ) : (
                isLoading? (
                    <div>
                        <CircularProgress/>
                    </div>
                ) : (
                    <Container>
                        <Box sx={{mt: 4}}>
                            <Typography variant="h4" sx={{mb: 4}}>My Notes</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={8}>
                                    <NotesList/>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <NotesForm/>
                                </Grid>

                            </Grid>
                        </Box>
                    </Container>
                )
            ) }
        </>  
    )
}

export default NotesContainer