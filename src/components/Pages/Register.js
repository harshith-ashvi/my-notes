import { Avatar, Button, Container, Grid, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as Yup from "yup";
import { useFormik } from "formik";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useSelector, useDispatch } from "react-redux";
import { clearUserErrors, startUserRegister } from "../../actions/userActions";

const mainBoxStyle = {
    mt: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const avatarStyle = {
    m: 1,
    bgcolor: "primary.main"
}

const validationSchema = Yup.object({
    username: Yup
        .string()
        .required("Username cannot be empty"),
    email: Yup
        .string()
        .required("Email cannot be empty")
        .email("Invalid email format"),
    password: Yup
        .string()
        .required("Password cannot be empty")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )  
})

const Register = (props) => {
    const [ showPassword, setShowPassword ] = useState(false)

    const dispatch = useDispatch()
    const registerErrors = useSelector(state => state.user?.errors) || {}

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }

    const redirectLogin = () => {
        return props.history.push("/login")
    }

    useEffect(() => {
        dispatch(clearUserErrors())
    }, [])

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            dispatch(startUserRegister(values, resetForm, redirectLogin))
        }
    })

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={mainBoxStyle}>
                <Avatar sx={avatarStyle}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h4" component="h1">
                    Register
                </Typography>
                <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Username"
                                name="username"
                                fullWidth
                                required
                                value={values.username}
                                onChange={handleChange}
                                error={errors.hasOwnProperty("username") || registerErrors.hasOwnProperty("username")}
                                helperText={(errors.username && errors.username) || (registerErrors.username && registerErrors.username.message.split(".")[0])}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Email"
                                name="email"
                                fullWidth
                                required 
                                value={values.email}
                                onChange={handleChange}
                                error={errors.hasOwnProperty("email") || registerErrors.hasOwnProperty("email")}
                                helperText={(errors.email && errors.email) || (registerErrors.email && registerErrors.email.message.split(".")[0])}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Password"
                                name="password"
                                fullWidth
                                required
                                value={values.password}
                                onChange={handleChange}
                                error={errors.hasOwnProperty("password")}
                                helperText={errors.password && errors.password}
                                type={showPassword? "text":"password"}
                                InputProps={{
                                    endAdornment: (
                                        values.password.trim().length > 0 && (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    { showPassword? (
                                                        <VisibilityOutlinedIcon/>
                                                    ) : (
                                                        <VisibilityOffOutlinedIcon/>
                                                    ) }
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                fullWidth
                                sx={{ mt: 1, mb: 2 }}
                                type="submit"
                            >
                                Register
                            </Button>
                        </Grid>

                        <Grid container justifyContent="flex-end" sx={{ paddingBottom: 5 }}>
                            <Grid item>
                                <Link href="/login" variant="body2" underline="hover">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Register