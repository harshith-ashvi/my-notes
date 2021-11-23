import { Alert, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import NoteItem from "./NoteItem";

const mainBoxStyle = {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const NotesList = (props) => {
    const notes = useSelector(state => state.notes.data)
    

    return (
        <Grid container spaing={2}>
            { notes.length === 0? (
                <Box sx={mainBoxStyle}>
                    <Alert severity="info">No Notes are there to display</Alert>
                </Box>
            ) : (
                <Grid container spacing={2}>
                    { notes.map((note) => {
                        return (
                            <Grid item key={note._id} xs={12}>
                                <NoteItem {...note}/>
                            </Grid>
                        )
                    }) }
                </Grid>
            )}

        </Grid>
    )
}

export default NotesList