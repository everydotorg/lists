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
    p: 6,
    position: 'sticky',
    bg: 'white',
    top: 0,
    borderBottom: '1px solid',
    borderBottomColor: 'divider',
    zIndex: [null, 1]
  },
  logo: {
    backgroundColor: 'white',
    height: '2.5rem',
    width: '2.5rem',
    borderRadius: '100%',
    position: 'absolute',
    top: '1rem',
    right: '1rem'
  },
  logoDesktop: {
    backgroundColor: 'white',
    height: '3.5rem',
    width: '3.5rem',
    borderRadius: '100%',
    mr: 3
  },
  donateButton: {
    fontFamily: 'body',
    fontWeight: 'body',
    fontSize: 3,
    letterSpacing: '-0.01em'
  }
}
