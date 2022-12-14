import { Avatar, Box, Button, Container, FormControl, Grid, TextField, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
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
                    Sign up
                </Typography>
                <FormControl
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{mt: 1}}
                >
                    <Grid container>
                        <Grid item xs={12} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="name"
                                label="Name"
                                id="name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                id="email"
                                autoComplete="email"/>   
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
                                autoComplete="new-password"/>     
                        </Grid>
                    </Grid> 
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link
                                component={NavLink}
                                href="#"
                                variant="body2"
                                to="/login"
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </FormControl> 
                </Box>
            </Container>  
    );
};