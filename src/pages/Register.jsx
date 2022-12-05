import { Helmet } from "react-helmet";
import Typography from '@mui/material/Typography';
import { RegisterForm } from "components/RegisterForm";

export default function Register() {
    return (
        <div>
            <Helmet>
                <Typography variant="h3">Registration</Typography>
            </Helmet>
            <RegisterForm></RegisterForm>
        </div>
    );
}