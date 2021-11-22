import { Avatar, Button, Container, Grid, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as Yup from "yup";
import { useFormik } from "formik";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useSelector, useDispatch } from "react-redux";
import { clearUserErrors, startUserLogin } from "../../actions/userActions";

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
    email: Yup
        .string()
        .required("Email cannot be empty")
        .email("Invalid email format"),
    password: Yup
        .string()
        .required("Password cannot be empty") 
})

const Login = (props) => {
    const [ showPassword, setShowPassword ] = useState(false)

    const dispatch = useDispatch()
    const loginErrors = useSelector(state => state.user.errors) || {}

    const initialValues = {
        email: "",
        password: ""
    }

    const redirectHome = () => {
        return props.history.push("/")
    }

    useEffect(() => {
        dispatch(clearUserErrors())
    }, [])

    const { handleChange, handleSubmit, values, errors, handleReset } = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            dispatch(startUserLogin(values, resetForm, redirectHome))
        }
    })

    const newLocal = errors.password && errors.password;
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={mainBoxStyle}>
                <Avatar sx={avatarStyle}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h4" component="h1">
                    Login
                </Typography>
                <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit} onReset={handleReset}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Email"
                                name="email"
                                fullWidth
                                required 
                                value={values.email}
                                onChange={handleChange}
                                error={errors.hasOwnProperty("email") || loginErrors.hasOwnProperty("errors")}
                                helperText={(errors.email && errors.email) || (loginErrors.errors && loginErrors.errors)}
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
                                error={errors.hasOwnProperty("password") || loginErrors.hasOwnProperty("errors")}
                                helperText={(newLocal) || (loginErrors.errors && loginErrors.errors)}
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
                                sx={{ mt: 1, mb: 1 }}
                                type="submit"
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid container justifyContent="flex-end" sx={{mt: 1, paddingBottom: 5}}>
                            <Grid item>
                                <Link href="/register" variant="body2" underline="hover">
                                    Don't have an account? Register
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Login