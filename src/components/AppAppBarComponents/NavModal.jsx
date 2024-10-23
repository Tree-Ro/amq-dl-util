import { Backdrop, Box, Modal, Fade, Typography, Link, List, ListItem } from '@mui/material'

import { styled, alpha } from '@mui/material';

import PropTypes from 'prop-types'

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
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
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <Typography variant="h4" gutterBottom>
                AnisongDW Project
              </Typography>
              <Typography variant="body1" component={'p'}>
                This is a work-in-progress version of <Link href="https://anisongdb.com" target='_blank' rel='noopener'>AnisongDB</Link>. It started as a personal project for learning but has evolved into a tool to simplify downloading songs from <Link href="https://animemusicquiz.com" target='_blank' rel='noopener'>AMQ</Link> and quickly adding them to Spotify or any other media player, without the hassle of fixing metadata (ID3 Tags). The planned steps to use this tool at the moment is:
              </Typography>

              <List>
                <ListItem>1. Download the song.</ListItem>
                <ListItem>2. Import it into your media player.</ListItem>
                <ListItem>3. Listen.</ListItem>
              </List>

              <Typography variant="body1" component={'p'}>
                All I&apos;m doing here is technically just creating a front-end interface and processing the MP3s for you so all the credit should first and foremost go to <Link href='https://anisongdb.com' target='_blank' rel='noopener'>AnisongDB</Link> for (hopefully?) allowing me to use their API and secondly to Egerod and the people maintaining the <Link href='https://animemusicquiz.com' target='_blank' rel='noopener'>AMQ</Link> database as that is also a vital part in the chain.
              </Typography>
              <Typography sx={{ paddingTop: 2 }}>
                If you&apos;re reading this you should also consider supporting the traffic for AMQ, you can do this by donating to their <Link href='https://www.patreon.com/NextWorldGames' target='_blank' rel='noopener'>Patreon</Link>.
              </Typography>
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