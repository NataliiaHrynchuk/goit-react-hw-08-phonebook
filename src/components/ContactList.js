
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button, Grid, Typography } from '@mui/material';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);
            
    return (
            
        <ul
            // as="ul"
            pad="0">
            {contacts.map(({ id, name, number }) => (
                <Grid container spasing={3}
                    key={id}
                    as="li"
                    display="flex"
                    gap="10px"
                    alIt="center"
                >
                    <Typography variant='body1'>{name}:</Typography>
                    <Typography variant='body2'>{number}</Typography>
                    <Button
                        type="button"
                        w="60px"
                        onClick={() => dispatch(deleteContact(id))}
                    >Delete
                    </Button>
                </Grid>
            ))}
        </ul>
    )
};
