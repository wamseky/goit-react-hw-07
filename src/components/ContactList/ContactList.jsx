import { useSelector } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const [parent] = useAutoAnimate({ easing: 'linear', duration: 300 });
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul ref={parent} className={css.list}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </>
  );
}