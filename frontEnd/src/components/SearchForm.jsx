import { MainSearch, AdvancedSearch, EnableOptionsIcon } from './SearchFormComponents';
import { useState } from 'react';



const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <EnableOptionsIcon clickHandler={handleClick} />
      <MainSearch />
      {isOpen && <AdvancedSearch />}
    </>
  );
};





export default SearchForm