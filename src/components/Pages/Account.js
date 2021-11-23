import { Avatar, CircularProgress, Container, Grid, Typography, Alert, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const mainBoxStyle = {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const avatarStyle = {
    m: 1,
    bgcolor: "secondary.main",
    width: 100,
    height: 100,
    ml: 6
}

const Account = (props) => {
    const user = useSelector(state => state.user)

    const { isLoading, data } = user

    return (
        <>
            {!localStorage.getItem("token")? (
                <Box sx={mainBoxStyle}>
                    <Alert severity="error">You must <Link href="/login" underline="hover">Login</Link> first</Alert>
                </Box>
            ) : (
                <>
                    { isLoading? (
                        <Box sx={{ml: "50%", mt: 25}}>
                            <CircularProgress/>
                        </Box>
                    ) : (
                        <Container maxWidth="xs">
                            <Box sx={mainBoxStyle}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h3">
                                            My Details
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Avatar sx={avatarStyle}>
                                            <Typography variant="h3">
                                                {data.username && data.username[0].toUpperCase()}
                                            </Typography>
                                        </Avatar>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            ID: {data._id}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            Username: {data.username}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            Email: {data.email}
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Container>
                    )}
                </>
            )}
            
        </>
    )
}

export default Account