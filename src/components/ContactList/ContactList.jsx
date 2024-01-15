import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/operations';
import {
  selectError,
  selectFilterContacts,
  selectIsEditorActive,
  selectIsLoading,
} from '../../redux/selectors';
import { showEditor } from '../../redux/contactsSlice';
import { EditForm } from '../EditForm/EditForm';
import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';

export const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilterContacts);
  const isEditorActive = useSelector(selectIsEditorActive);

  useEffect(() => {}, [isEditorActive]);
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  const handleShowEdit = (id, name, number) => {
    dispatch(showEditor({ id, name, number }));
  };

  return (
    <ul className={css.contactList}>
      {isEditorActive && <EditForm />}
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <IconButton
              onClick={() => handleDelete(contact.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <p>
              {contact.name}____{contact.number}
            </p>
            <IconButton
              onClick={() =>
                handleShowEdit(contact.id, contact.name, contact.number)
              }
              aria-label="Edit contact"
            >
              <PersonIcon />
            </IconButton>
          </li>
        ))
      ) : (
        <div>No contacts available</div>
      )}
      {isLoading && !error && <p>Updating...</p>}
    </ul>
  );
};
