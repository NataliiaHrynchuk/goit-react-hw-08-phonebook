import { Avatar, Box, Button, Container, FormControl, Grid, TextField, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logIn } from "redux/auth/authOperations";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <Lock/>
                </Avatar>  
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <FormControl
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{mt: 1}}
                >
                    <Grid container>
                        <Grid item xs={12} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                id="email"
                                autoComplete="email"
                                autoFocus
                            />   
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            /> 
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign in
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link
                                component={NavLink}
                                href="#"
                                variant="body2"
                                to="/register"
                            >
                                Don`t have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>

                </FormControl>
            </Box>
        </Container>    
    );
};