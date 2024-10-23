import { useState } from 'react'

const defaultValues = {
  anime_filter: '',
  anime_filter_partial: true,
  song_filter: '',
  song_filter_partial: true,
  artist_filter: '',
  artist_filter_partial: true,
  ignore_duplicate: false,
  opening_filter: true,
  ending_filter: true,
  insert_filter: true,
  composer_filter: '',
  composer_filter_partial: true,
};

const useForm = () => {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  return { values, handleChange };
};

export default useForm;
