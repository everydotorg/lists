import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    position: ['fixed', 'absolute'],
    bottom: ['unset', 0],
    bg: 'white',
    borderRadius: ['zero', 'button'],
    p: 4,
    top: [0, 'unset'],
    m: [0, 4],
    height: ['100%', 'auto'],
    zIndex: [10, null],
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  divider: {
    display: ['none', 'unset']
  },
  content: {
    flexDirection: 'column',
    '& > *:not(:last-child)': {
      mb: [6, 2]
    }
  },
  closeBox: {
    flexShrink: 0,
    color: 'primary',
    cursor: 'pointer',
    alignSelf: 'flex-start',
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
  },
  aboutText: {
    color: 'textGray',
    fontWeight: 400,
    '& > span': { display: 'block' }
  }
}
