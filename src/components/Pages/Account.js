import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const mainBoxStyle = {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const Account = (props) => {
    const user = useSelector(state => state.user)

    const { isLoading, data } = user

    return (
        <>
            {Object.keys(data).length === 0? (
                <Box sx={mainBoxStyle}>
                    <Typography variant="h5">You must Login first</Typography>
                </Box>
            ) : (
                <>
                    { isLoading? (
                        <div>
                            <CircularProgress/>
                        </div>
                    ) : (
                        <Container maxWidth="xs">
                            <Box sx={mainBoxStyle}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4">
                                            User Details
                                        </Typography>
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