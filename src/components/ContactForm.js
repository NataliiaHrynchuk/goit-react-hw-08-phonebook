import React from "react";
import { useState } from "react";
import { Box, Button, FormControl, Paper, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contactsOperations";
import { useSelector } from "react-redux";
import { selectContacts } from 'redux/contacts/contactSelectors';

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectContacts);

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value.trim());
                break;
            case 'number':
                setNumber(value.trim());
                break;
            default:
                return;
        }
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        const newContact = { name, number };
        const normalizedName = name.toLowerCase();
        const repeatedName = contacts.find(contact => contact.name.toLowerCase() === normalizedName);
        const repeatedNumber = contacts.find(contact => contact.number === number);
            
        if (repeatedName) {
            alert(`${name} is already in contacts.`);
        } else if (repeatedNumber) {
            alert(`${number} is already in contacts.`);
        } else {
            dispatch(addContact(newContact));
            setName(' ');
            setNumber(' ');
        };
    }

    return (
        <Paper
            sx={{
                minWidth: 300,
                minHeight: 300,
                marginTop: 2,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                
                alignItems: 'center',
                backgroundColor: '#ebe6f3',
            }}>
            <Typography variant="h6" sx={{mb: 2}}>Enter new contact</Typography>
            <FormControl
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography component="label" htmlFor="id-name">
                    Name </Typography>
                <TextField
                    type="text"
                    name="name"
                    id="id-name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    mt="10px"
                    mb="10px"
                    size="small"
                    onChange={handleChange}
                />
                
                <Typography component="label" htmlFor="id-number">
                    Number </Typography>
                <TextField
                    type="tel"
                    name="number"
                    id="id-numder"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                    mt="10px"
                    mb="10px"
                    mr="120px"
                    size="small"/>
                
                <Button type="submit">Add contact</Button>
            </FormControl>
            </Paper>
        )
    };