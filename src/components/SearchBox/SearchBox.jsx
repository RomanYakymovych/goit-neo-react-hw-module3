import css from './SearchBox.module.css'

const SearchBox = ( {value, onChange} ) => {
  return (
    <div className={css.searchContainer}>
      <p className={css.title}>Find contacts by name</p>
      <input className={css.input} value={value} onChange={onChange} type="text" />
    </div>
  );
};

export default SearchBox;
