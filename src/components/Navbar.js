import React from "react";
import { Box } from "@mui/system";
import { AppBar, Button, CircularProgress, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
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

    const { isLoading, data } = user

    return (
        <>
            { isLoading? (
                <div>
                    <CircularProgress />
                </div>
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                My Notes
                            </Typography>
                            <Button color="inherit" href="/" sx={{color: "white"}} size="large">Home</Button>
                            { Object.keys(data).length > 0? (
                                <>
                                    <Button color="inherit" href="#" sx={{color: "white"}} size="large">Notes</Button>
                                    <Button color="inherit" href="#" sx={{color: "white"}} size="large">Account</Button>
                                    <Button color="inherit" onClick={handleLogout} sx={{color: "white"}} size="large">Logout</Button>
                                </>
                            ) : (
                                <>
                                    <Button color="inherit" href="/register" sx={{color: "white"}} size="large">Register</Button>
                                    <Button color="inherit" href="/login" sx={{color: "white"}} size="large">Login</Button>
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