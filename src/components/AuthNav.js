import { Link, createTheme, ThemeProvider } from "@mui/material";
import { NavLink } from "react-router-dom";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#fff',
        },
    },
});

export const AuthNav = () => {
    return (
        < >
            <ThemeProvider theme={theme}>
                <Link
                    component={NavLink}
                    variant="h6"
                    underline="none"
                    color="secondary"
                    sx={{ flexGrow: 0.05 }}
                    to="/register">
                Register
                </Link>
                <Link
                    component={NavLink}
                    variant="h6"
                    underline="none"
                    color="secondary"
                    to="/login">
                Log in
                </Link>
            </ThemeProvider>    
        </>
    );
};