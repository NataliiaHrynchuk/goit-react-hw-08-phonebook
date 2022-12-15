import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import  ContactForm from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";
import { selectContacts, selectIsloading } from "redux/contacts/contactSelectors";
import { Box, Typography } from '@mui/material';
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/contactsOperations";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsloading);
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
        }}>
            <Helmet>
                <Typography
                marginTop="100px"                   
                variant="h1"
                    >
                    Phonebook
                </Typography>
            </Helmet>

            <ContactForm />
            <div>{isLoading && 'Request in progress'}</div>
            <Typography
                component="h2"
                variant="h3"
                marginTop="-10px"
            >
                Contacts
            </Typography>
                {contacts.length > 0 && (
                    <>
                        <Filter />
                        <ContactList />
                    </>
                )}
        </Box>
    );
}