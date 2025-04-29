import styles from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Find contacts by name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBox;
