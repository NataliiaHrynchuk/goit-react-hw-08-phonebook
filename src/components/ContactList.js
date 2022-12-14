
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
            gap="10px"
        >
            {contacts.map(({ id, name, number }) => (
                    <Grid container spasing={3}
                    key={id}
                    as="li"
                    display="flex"
                    gap="20px"
                    alignItems="center"
                >
                    <Grid item xs >
                        <Typography variant='body1'>{name}:</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body2'>{number}</Typography>
                    </Grid>
                    <Grid item xs>
                    <Button
                        type="button"
                        w="60px"
                        onClick={() => dispatch(deleteContact(id))}
                    >Delete
                        </Button>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
};
