import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts = [], onDeleteContact }) => {
  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact =>
        contact ? (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDeleteContact}
          />
        ) : null
      )}
    </ul>
  );
};

export default ContactList;
