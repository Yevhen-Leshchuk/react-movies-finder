import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = event => {
    const inputValue = event.currentTarget.value;
    setMovieName(inputValue);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieName.trim() === '') {
      toast.error('Enter correct value!');
      return;
    }
    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
      <input
        className={s.SearchFormInput}
        type="text"
        name="movieName"
        value={movieName}
        onChange={handleNameChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
