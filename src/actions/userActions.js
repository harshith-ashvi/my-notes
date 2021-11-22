import axios from "axios";

export const startUserRegister = (formData, resetForm, redirectLogin) => {
    return (
        (dispatch) => {
            return (
                axios.post("http://dct-user-auth.herokuapp.com/users/register", formData)
                    .then((response) => {
                        const result = response.data
                        if(result.hasOwnProperty("errors")) {
                            dispatch(addUserErrors(result.errors))
                        } else {
                            alert("Successfully registered")
                            dispatch(clearUserErrors())
                            resetForm()
                            redirectLogin()
                        }
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            )
        }
    )
}

export const addUserErrors = (errors) => {
    return {
        type: "ADD_USER_ERRORS",
        payload: errors
    }
}

export const clearUserErrors = () => {
    return {
        type: "CLEAR_USER_ERRORS"
    }
}