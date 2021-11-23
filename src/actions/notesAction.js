import axios from "axios"

export const startAddNote = (formData, setContent) => {
    return (
        (dispatch) => {
            return (
                axios.post("http://dct-user-auth.herokuapp.com/api/notes", formData, {
                    "headers": {
                        "x-auth": localStorage.getItem("token")
                    },
                })
                    .then((response) => {
                        const result = response.data
                        dispatch(addNotes(result))
                        setContent()
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            )
        }
    )
}

export const addNotes = (note) => {
    return {
        type: "ADD_NOTES",
        payload: note
    }
}

export const startDeleteNote = (id) => {
    return (
        (dispatch) => {
            return (
                axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
                    "headers": {
                        "x-auth": localStorage.getItem("token")
                    }
                })
                    .then((response) => {
                        dispatch(deleteNote(id))
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            )
        }
    )
} 

export const deleteNote = (id) => {
    return {
        type: "DELETE_NOTE",
        payload: id
    }
}