
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);
            
    return (
            
        <ul
            // as="ul"
            pad="0">
            {contacts.map(({ id, name, number }) => (
                <div
                    key={id}
                    as="li"
                    display="flex"
                    gap="10px"
                    alIt="center"
                >
                    <p>{name}:</p>
                    <p>{number}</p>
                    <button
                        type="button"
                        w="60px"
                        onClick={() => dispatch(deleteContact(id))}
                    >Delete
                    </button>
                </div>
            ))}
        </ul>
    )
};
