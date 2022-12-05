import { AppBar, Toolbar } from "@mui/material";
import { useAuth } from "hooks/useAuth";
import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

export const Header = () => {
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);
    return (
        <AppBar position="static">
            <Toolbar component="nav">
            <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>
        </AppBar>
    );
};