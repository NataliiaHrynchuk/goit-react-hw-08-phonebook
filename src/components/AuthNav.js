import { Grid, createTheme, ThemeProvider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { StyledLink } from "components/StyledLink";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#fff',
        },
    },
});

export const AuthNav = () => {
    return (
        <Grid container justifyContent="flex-end" >
            <ThemeProvider theme={theme}>
                <StyledLink
                    component={NavLink}
                    variant="h6"
                    underline="none"
                    color="secondary"
                    sx={{ flexGrow: 0.05 }}
                    to="/register">
                Register
                </StyledLink>
                <StyledLink
                    component={NavLink}
                    variant="h6"
                    underline="none"
                    color="secondary"
                    to="/login">
                Log in
                </StyledLink>
            </ThemeProvider>    
        </Grid>
    );
};