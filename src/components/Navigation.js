import { NavLink } from "react-router-dom";
import { Link, createTheme, ThemeProvider} from "@mui/material";
import { useAuth } from "hooks/useAuth";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#fff',
        },
    },
});
export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <ThemeProvider theme={theme}>
            <Link
                component={NavLink}
                variant="h6"
                underline="none"
                color="secondary"
                sx={{ flexGrow: 1 }}
                to="/"
                end>
                Home
            </Link>
            {isLoggedIn && (
                    <Link
                        component={NavLink}
                        variant="h6"
                        underline="none"
                        color="secondary"
                        to="/contacts">
                    Contacts
                </Link>
                )}
            </ThemeProvider>
        </>
    );
};