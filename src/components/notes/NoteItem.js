import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startDeleteNote } from "../../actions/notesAction";

const NoteItem = (props) => {
    const { _id, title, body } = props

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete) {
            dispatch(startDeleteNote(id))
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    { title }
                </Typography>
                <Typography variant="body2">
                    { body }
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained" 
                    onClick={() => handleDelete(_id)}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default NoteItem