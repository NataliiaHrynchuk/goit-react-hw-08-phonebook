import { AppBar, Toolbar, Typography } from "@mui/material";
export default function Header () {
    return (
        <AppBar>
            <Toolbar >
                <Typography>Home</Typography>
                <Typography>Register</Typography>
                <Typography>Log in</Typography>
            </Toolbar>
        </AppBar>
    )
}