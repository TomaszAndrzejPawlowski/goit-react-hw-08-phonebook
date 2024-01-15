import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <main>
      <div className={css.container}>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <h1 className={css.titles}>Phonebook</h1>
        <ContactForm generateId={uuidv4()} />
        <h2 className={css.titles}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </main>
  );
};
export default Contacts;
