import { MainSearch, AdvancedSearch, EnableOptionsIcon, SearchButton } from './SearchFormComponents';
import { useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types'

import useForm from '../hooks/useForm'

const SearchForm = ({ updateBody, loading }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { values, handleChange } = useForm()

  function handleDrawerClick() {
    setIsOpen(!isOpen)
  }

  const handleSearchClick = useCallback(() => {
    updateBody(values)
  }, [values, updateBody])

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  }, [handleSearchClick])


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <EnableOptionsIcon clickHandler={handleDrawerClick} />
      <MainSearch values={values} handleChange={handleChange} />
      {isOpen && <AdvancedSearch values={values} handleChange={handleChange} />}
      <SearchButton clickHandler={handleSearchClick} loading={loading} />
    </>
  );
};

SearchForm.propTypes = {
  updateBody: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default SearchForm