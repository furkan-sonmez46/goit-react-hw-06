import ContactForm from '../contactForm/ContactForm';
import SearchBox from '../searchBox/SearchBox';
import ContactList from '../contactList/ContactList';
import css from './App.module.css'

function App() {

  return (
    <>
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </div>
    </>
  );
}

export default App
