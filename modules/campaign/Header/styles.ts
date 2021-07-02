import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '200px',
    position: 'relative',
    display: [null, 'none']
  },
  desktopContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: ['none', 'flex'],
    p: 3,
    position: 'sticky',
    bg: 'white',
    top: 0,
    borderBottom: '1px solid',
    borderBottomColor: 'divider',
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
    fontFamily: 'body',
    fontWeight: 'body',
    fontSize: 3,
    letterSpacing: '-0.01em'
  }
}
