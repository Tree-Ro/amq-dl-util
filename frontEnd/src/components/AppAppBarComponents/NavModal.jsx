import { Backdrop, Box, Modal, Fade, Typography } from '@mui/material'

import { styled, alpha } from '@mui/material';

import PropTypes from 'prop-types'

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  padding: '24px',
  ...theme.applyStyles('dark', {
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.paper, 0.4),
    boxShadow: theme.shadows[1],
  }),
}))



const NavModal = ({ isOpen, setIsOpen }) => {

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <StyledBox>
            <Typography id="modal-title" variant="h6" component="h2">
              What is this? [WIP]
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Currently this is nothing but a mere skeleton but with some time and effort I hope it will turn into something pretty. Credits + Explanation will probably go here in the future. This is just being written as placeholder text and serves no real purpose.
            </Typography>
          </StyledBox>
        </Fade>
      </Modal>
    </>
  );
}

export default NavModal

NavModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
}