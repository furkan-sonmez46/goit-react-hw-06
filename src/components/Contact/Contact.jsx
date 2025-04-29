import styles from "./Contact.module.css";

const Contact = ({ id, name = 'Unknown', number = 'N/A', onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <span>
        {name}: {number}
      </span>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
