import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('This field is required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid number format')
    .required('This field is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [parent] = useAutoAnimate({
    easing: 'linear',
    duration: 300,
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div ref={parent} className={css.wrapper}>
          <label htmlFor="name">Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div ref={parent} className={css.wrapper}>
          <label htmlFor="number">Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            placeholder="XXX-XX-XX"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}