import { AppBar, Toolbar, Link, createTheme, ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
const theme = createTheme({
    palette: {
        secondary: {
            main: '#fff',
        },
    },
});

export default function Layout () {
    return (
        <>
            <AppBar position="static">
                <Toolbar component="nav">
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
                </Toolbar>
            </AppBar>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </>   
    )
}