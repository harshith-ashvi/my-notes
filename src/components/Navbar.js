import React from "react";
import { Box } from "@mui/system";
import { AppBar, Button, CircularProgress, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeData } from "../actions/userActions";

const Navbar = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const history = useHistory()

    const handleLogout = () => {
        dispatch(removeData())
        localStorage.removeItem("token")
        alert("Successfully logged out")
        history.push("/")
    }

    const handleButtonClick = (pageUrl) => {
        history.push(pageUrl)
    }

    const { isLoading, data } = user

    return (
        <>
            { isLoading? (
                <Box sx={{ml: "50%"}}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                My Notes
                            </Typography>
                            <Button sx={{color: "white"}} onClick={() => handleButtonClick("/")}>Home</Button>
                            { Object.keys(data).length > 0? (
                                <>
                                    <Button sx={{color: "white"}} onClick={() => handleButtonClick("/notes")}>Notes</Button>
                                    <Button sx={{color: "white"}} onClick={() => handleButtonClick("/account")}>Account</Button>
                                    <Button sx={{color: "white"}} onClick={handleLogout}>Logout</Button>
                                    
                                </>
                            ) : (
                                <>
                                    <Button sx={{color: "white"}} onClick={() => handleButtonClick("/register")}>Register</Button>
                                    <Button sx={{color: "white"}} onClick={() => handleButtonClick("/login")}>Login</Button>
                                </>
                            ) }
                        </Toolbar>
                    </AppBar>
                </Box>
            ) }
        </>
    )
}

export default Navbar