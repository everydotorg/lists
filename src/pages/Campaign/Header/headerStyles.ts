import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    minHeight: '200px',
    position: 'relative',
    display: [null, 'none']
  },
  desktopContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: ['none', 'flex'],
    p: 6,
    bg: 'white'
  },
  donateButton: {
    fontSize: 3,
    letterSpacing: '-0.01em',
    position: 'fixed',
    m: 6,
    top: 0,
    right: 0,
    zIndex: [null, 1],
    display: ['none', 'block'],
    lineHeight: 1
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
