import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { useDispatch } from "react-redux"
import { startAddNote, startNoteEdit } from "../../actions/notesAction";

const NotesForm = (props) => {
    const { id, title: noteTitle, body: noteBody, toggle, handleToggle } = props

    const [ title, setTitle ] = useState(noteTitle? noteTitle:"")
    const [ body, setBody ] = useState(noteBody? noteBody: "")
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
                title,
                body
            }
            if (toggle) {
                dispatch(startNoteEdit(id, formData, handleToggle))
            } else {
                dispatch(startAddNote(formData, setInputFieldContent))
            }
        } else {
            setFormError(error)
        }
    }

    return (
        <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">{toggle? "Update":"Add"} Notes</Typography>
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

                <Grid item xs={toggle? 6:12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="success"
                        >
                        {toggle? "Update":"Add Note"}
                    </Button>
                </Grid>

                { toggle && 
                    (
                        <Grid item xs={6}>
                            <Button
                                onClick={handleToggle}
                                variant="contained" 
                                color="error"
                                fullWidth
                                >
                                Cancel
                            </Button>
                        </Grid> 
                    )
                 }

                

            </Grid>
        </Box>
    )
}

export default NotesForm