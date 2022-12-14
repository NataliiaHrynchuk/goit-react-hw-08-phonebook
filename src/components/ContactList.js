
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button, Grid, Typography } from '@mui/material';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);
            
    return (
            
        <Grid
            component="ul"
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
        >
            {contacts.map(({ id, name, number }) => (
                <Grid container spasing={3}
                    key={id}
                    as="li"
                    display="flex"
                    gap="20px"
                    alignItems="center"
                    justifyContent="space-around"
                    sx={{
                        width: "400px",
                        padding: "6px",
                        backgroundColor: '#ebe6f3',
                        borderRadius: "4px"
                    }}
                >
                    <Grid item xs={3} >
                        <Typography variant='body1'>{name}:</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='body2'>{number}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            size="small"
                            type="button"
                            w="60px"
                            onClick={() => dispatch(deleteContact(id))}
                            >
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
};
