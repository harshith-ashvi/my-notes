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

export const startUserLogin = (formData, resetForm, redirect) => {
    return (
        (dispatch) => {
            return (
                axios.post("http://dct-user-auth.herokuapp.com/users/login", formData)
                    .then((response) => {
                        const result = response.data
                        if(result.hasOwnProperty("errors")) {
                            dispatch(addUserErrors(result))
                        } else {
                            alert("Successfully Logged in")
                            dispatch(clearUserErrors())
                            dispatch(startUserAllDetails(result.token))
                            localStorage.setItem("token", result.token)
                            resetForm()
                            redirect()
                        }
                    })
            )
        }
    )
}

export const startUserAllDetails = (token) => {
    const userDetails = axios.get("http://dct-user-auth.herokuapp.com/users/account", {
        "headers": {
            "x-auth": token
        }
    })

    return (
        (dispatch) => {
            dispatch(loadingUpdate())
            return (
                Promise.all([userDetails])
                    .then((response) => {
                        const [ account ] = response
                        dispatch(loadingUpdate())
                        dispatch(addUserDetails(account.data))
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            )
        }
    )
}

export const addUserDetails = (details) => {
    return {
        type: "ADD_USER_DETAILS",
        payload: details
    }
}

export const loadingUpdate = () => {
    return {
        type: "LOADING_UPDATE"
    }
}

export const removeData = () => {
    return {
        type: "REMOVE_DATA"
    }
}