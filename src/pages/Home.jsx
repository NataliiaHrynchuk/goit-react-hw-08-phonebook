import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <Box
            container
            >
            <Typography
                variant="h3"
                marginTop="50px"
                align='center'
            > 
                Welcome to Phonebook!
            </Typography>
            <Typography
                variant="h5"
                marginTop="50px"
                align='center'
            > 
            If you are not logged in, log in.
            </Typography>
            <Typography
                variant="h5"
                marginTop="50px"
                align='center'
            > 
            If you are not registered, register and log in.
            </Typography>
        </Box>
    )
}