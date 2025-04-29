import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
          .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.contactForm}>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" autoComplete="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" autoComplete="tel" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
