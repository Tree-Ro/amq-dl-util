import { LoadingButton } from '@mui/lab'
import { Search as SearchIcon } from '@mui/icons-material'

import PropTypes from 'prop-types'

const SearchButton = ({ clickHandler, loading }) => {

  return (
    <LoadingButton onClick={clickHandler} variant='contained' endIcon={<SearchIcon />} loading={loading}>
      Search
    </LoadingButton>
  )
}

SearchButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default SearchButton