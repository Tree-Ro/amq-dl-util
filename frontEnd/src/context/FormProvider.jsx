import useForm from '../hooks/useForm';
import formContext from './formContext';
import PropTypes from 'prop-types';

const FormProvider = ({ children }) => {
  const { values, handleChange } = useForm();

  return (
    <formContext.Provider value={{ values, handleChange }}>
      {children}
    </formContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormProvider;
