import { useState } from 'react';
import formatData from '../utils/formatDataToAnisongDB';

const useAnisong = () => {
  let url = 'https://anisongdb.com/api/search_request';
  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const [options, setOptions] = useState(defaultOptions);
  const [prevValues, setPrevValues] = useState(null);

  const updateBody = (values) => {
    const newValues = formatData(values);
    
    // Only updates the options if required
    if (JSON.stringify(newValues) !== JSON.stringify(prevValues)) {
      const newOptions = {
        ...defaultOptions,
        body: JSON.stringify(newValues),
      };
      setOptions(newOptions);
      setPrevValues(newValues); 
    }
  };

  if (!options.body) {
    url = 'https://anisongdb.com/api/get_50_random_songs';
  }

  return { url, options, updateBody };
};

export default useAnisong;
