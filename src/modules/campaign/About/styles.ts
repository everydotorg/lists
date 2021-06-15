import { Style } from '../../../types/Style'
import { isIOS } from '../../../utils/isIOS'

export const styles: Style = {
  container: {
    position: ['fixed', 'absolute'],
    bottom: ['unset', 0],
    bg: 'white',
    borderRadius: ['zero', 'card'],
    p: 4,
    top: [0, 'unset'],
    m: [0, 4],
    zIndex: [10, null],
    height: [isIOS() ? '-webkit-fill-available' : '100vh', 'unset'],
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    mb: [6, 2]
  },
  divider: {
    display: ['none', 'unset']
  },
  content: {
    flexDirection: 'column'
  },
  closeBox: {
    flexShrink: 0,
    color: 'primary',
    cursor: 'pointer',
    ml: [4, 2]
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  branding: {
    alignItems: 'center',
    '& > *:not(:last-child)': {
      mr: 1
    }
  }
}
