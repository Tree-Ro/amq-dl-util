import { Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

import { useContext } from 'react'
import { ValuesContext } from '../../context/formContext'


const SearchButton = () => {
  const { searchApi } = useContext(ValuesContext)

  return (
    <Button onClick={searchApi} variant='contained' endIcon={<SearchIcon />}>
      Search
    </Button>
  )
}

export default SearchButton