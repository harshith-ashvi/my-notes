import React from "react";
import { Box } from "@mui/system";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Navbar = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        My Notes
                    </Typography>
                    <Button color="inherit" href="/" sx={{color: "white"}} size="large">Home</Button>
                    <Button color="inherit" href="#" sx={{color: "white"}} size="large">Register</Button>
                    <Button color="inherit" href="#" sx={{color: "white"}} size="large">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar