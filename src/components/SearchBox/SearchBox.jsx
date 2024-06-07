import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectFilters } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectFilters);

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}