import { useState, useEffect } from 'react';
import formatData from '../utils/formatDataToAnisongDB';
import fetch50RandomSongs from '../utils/fetch50randomSongs';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchInitialResults = async () => {
      try {
        const data = await fetch50RandomSongs();  
        setResults(data);
      } catch (err) {
        setError('Failed to fetch initial results:', err);
      }
    };

    fetchInitialResults();
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const searchApi = async () => {
    const query = formatData(values);

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    };
    const url = 'https://anisongdb.com/api/search_request';

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, payload);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { values, handleChange, searchApi, loading, error, results };
};

export default useForm;
