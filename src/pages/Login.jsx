import { Helmet } from "react-helmet";
import Typography from '@mui/material/Typography';
import { LoginForm } from "components/LoginForm";

export default function Login() {
    return (
        <div>
            <Helmet>
                <Typography variant="h3">Login</Typography>
            </Helmet>
            <LoginForm></LoginForm>
        </div>
    );
} 