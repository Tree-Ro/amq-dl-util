import { Button, Tooltip } from '@mui/material'
import { Engineering as EngineeringIcon } from '@mui/icons-material'

import PropTypes from 'prop-types'

const EnableOptionsIcon = ({ clickHandler }) => {
  return (
    <Tooltip title={'Advanced Options'} placement='left' arrow enterDelay={0}>
      <Button
        sx={{ position: 'absolute', right: '8px', top: '8px', minWidth: 'auto', padding: 0 }}
        onClick={clickHandler}>
        <EngineeringIcon fontSize='large' />
      </Button>
    </Tooltip>
  )
}
EnableOptionsIcon.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default EnableOptionsIcon