import { Button, Grid, styled, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { useAuth } from "hooks/useAuth";

const LogOutButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    '&:hover': {
        backgroundColor: '#ad1457',
        borderColor: '#a19ba8',
        color: '#ffffff',
    }
});

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut());

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            marginTop="0" marginLeft="0"
        >
            <Typography variant="h6">Welcome, {user.name}</Typography>
            <LogOutButton
                type="button"
                variant="outlined"
                disableRipple
                size="small"
                
                sx={{ml: 3}}
                onClick={handleLogOut}>
                Logout
            </LogOutButton>
        </Grid>
    );
};