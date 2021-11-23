import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startDeleteNote } from "../../actions/notesAction";
import NotesForm from "./NotesForm";

const NoteItem = (props) => {
    const { _id, title, body } = props
    const [ toggle, setToggle ] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete) {
            dispatch(startDeleteNote(id))
        }
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            {toggle? (
                <>
                    <NotesForm
                        id={_id}
                        title={title}
                        body={body}
                        toggle={toggle}
                        handleToggle={handleToggle}
                    />                 
                </>
            ) : (
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
                            onClick={handleToggle}
                            color="primary"
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained" 
                            onClick={() => handleDelete(_id)}
                            color="error"
                        >
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            )}
        </>
        
    )
}

export default NoteItem