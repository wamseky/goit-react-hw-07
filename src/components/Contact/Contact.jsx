import { FaUserLarge } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={css.name}>
          {' '}
          <FaUserLarge />
          {name}
        </p>
        <p className={css.number}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}