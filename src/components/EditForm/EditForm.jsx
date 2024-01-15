import { useDispatch, useSelector } from 'react-redux';
import { selectContactToEdit } from '../../redux/selectors';
import { v4 as uuidv4 } from 'uuid';
import { closeEditor } from '../../redux/contactsSlice';
import { updateContact } from '../../redux/operations';
import { IconButton, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import css from './EditForm.module.css';
import CloseIcon from '@mui/icons-material/Close';

export const EditForm = () => {
  const dispatch = useDispatch();
  const contactToEdit = useSelector(selectContactToEdit);
  const handleEdit = event => {
    event.preventDefault();
    const form = event.target;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;
    if (newName === contactToEdit.name && newNumber === contactToEdit.number) {
      dispatch(closeEditor());
    } else {
      dispatch(updateContact({ id: contactToEdit.id, newName, newNumber }));
    }
  };
  const handleClose = () => {
    dispatch(closeEditor());
  };

  return (
    <div className={css.editFormContainer}>
      <form className={css.editForm} onSubmit={handleEdit}>
        <TextField
          size="small"
          className={css.editFormInput}
          name="name"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={uuidv4()}
          required
          defaultValue={contactToEdit.name}
        />
        <TextField
          size="small"
          className={css.editFormInput}
          label="Number"
          type="tel"
          name="number"
          pattern="^[+]?[0-9 \u0028\u0029\u002D]*$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={uuidv4()}
          required
          defaultValue={contactToEdit.number}
        />
        <IconButton
          className={css.editAcceptButn}
          type="submit"
          aria-label="Edit contact"
        >
          <DoneIcon />
        </IconButton>
      </form>

      <IconButton
        className={css.editCloseButn}
        type="button"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};
