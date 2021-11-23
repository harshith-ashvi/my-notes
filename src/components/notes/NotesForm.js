import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { useDispatch } from "react-redux"
import { startAddNote } from "../../actions/notesAction";

const NotesForm = (props) => {
    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")
    const [ formError, setFormError ] = useState({})
    const error = {}

    const dispatch = useDispatch()

    const runvalidation = () => {
        //title validation
        if(title.trim().length === 0){
            error.title = "Title cannot be empty"
        }
    }

    const setInputFieldContent = () => {
        setTitle("")
        setBody("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runvalidation()

        if(Object.keys(error).length === 0){
            setFormError({})
            const formData = {
                title: title,
                body: body
            }
            dispatch(startAddNote(formData, setInputFieldContent))
        } else {
            setFormError(error)
        }
    }

    return (
        <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Add Notes</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        variant="outlined"
                        label="Title"
                        required
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        error={formError.hasOwnProperty("title")}
                        helperText={formError.title && formError.title}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        variant="outlined"
                        label="Body"
                        fullWidth
                        multiline={true}
                        rows={4}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        >
                        Add Note
                    </Button>
                </Grid>

                

            </Grid>
        </Box>
    )
}

export default NotesForm