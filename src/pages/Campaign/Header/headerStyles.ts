import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '200px',
    position: 'relative',
    display: [null, 'none'],
    m: 1,
    mb: 0,
    borderTopLeftRadius: 'button',
    borderTopRightRadius: 'button'
  },
  desktopContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: ['none', 'flex'],
    p: 6,
    position: 'sticky',
    bg: 'white',
    top: 0,
    zIndex: [null, 1]
  },
  logo: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '1rem',
    right: '1rem'
  },
  logoDesktop: {
    backgroundColor: 'white',
    mr: 3
  },
  donateButton: {
    fontSize: 3,
    letterSpacing: '-0.01em'
  },
  linkButton: {
    fontWeight: '400',
    ':hover': {
      opacity: 1,
      bg: 'primary',
      color: 'white'
    }
  },
  linkCopied: {
    color: 'primary',
    cursor: 'unset',
    ':hover': {
      bg: 'white',
      opacity: 1
    }
  }
}
