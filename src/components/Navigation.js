import { NavLink } from "react-router-dom";
import { createTheme, ThemeProvider} from "@mui/material";
import { StyledLink } from "components/StyledLink";
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
        <nav>
            <ThemeProvider theme={theme}>
            <StyledLink
                component={NavLink}
                variant="h6"
                underline="none"
                color="secondary"
                to="/"
                end
                >
                Home
            </StyledLink>
            {isLoggedIn && (
                    <StyledLink
                        component={NavLink}
                        sx={{ml:3}}
                        variant="h6"
                        underline="none"
                        color="secondary"
                        to="/contacts"
                    >
                    Contacts
                </StyledLink>
                )}
            </ThemeProvider>
        </nav>
    );
};