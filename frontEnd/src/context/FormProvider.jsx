import useForm from '../hooks/useForm';
import { ValuesContext, ResultsContext } from './formContext';

import PropTypes from 'prop-types'

const { values, handleChange, searchApi, loading, error, results } = useForm();

const ResultsProvider = ({ children }) => {
  return (
    <ResultsContext.Provider value={{ results }}>
      {children}
    </ResultsContext.Provider>
  );
};

ResultsProvider.propTypes = {
  children: PropTypes.node.isRequired
}


const ValuesProvider = ({ children }) => {
  return (
    <ValuesContext.Provider value={{ values, handleChange, searchApi, loading, error }}>
      {children}
    </ValuesContext.Provider>
  )
}

ValuesProvider.propTypes = {
  children: PropTypes.node.isRequired
}



export { ResultsProvider, ValuesProvider };
