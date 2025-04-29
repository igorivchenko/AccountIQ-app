import s from './SearchField.module.css';

const SearchField = ({ ...rest }) => {
  return <input {...rest} type="text" className={s.field} />;
};

export default SearchField;
