import { Helmet } from "react-helmet";
import {Typography} from '@mui/material';

export default function Contacts() {
    return (
        <div>
            <Helmet>
                <Typography
                marginTop="100px"                   
                variant="h3"
                    >
                    Contacts
                </Typography>
            </Helmet>
            
        </div>
    );
}