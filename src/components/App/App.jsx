import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading, selectError } from '../../redux/contactsSlice.js';
import { fetchContacts } from '../../redux/contactsOps';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.page}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {isError && <Error />}
    </section>
  );
}