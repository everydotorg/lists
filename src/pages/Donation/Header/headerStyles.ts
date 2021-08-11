import { Style } from 'types/Style'

export const styles: Style = {
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    p: [4, 6],
    pb: [0, 0]
  },
  firstLine: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  closeBox: {
    position: 'fixed',
    bg: 'white',
    top: 0,
    right: 0,
    m: [4, 6],
    zIndex: 5,
    cursor: 'pointer',
    color: 'primary',
    height: ['3rem', '3.5rem'],
    width: ['3rem', '3.5rem'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: ['default', 'small'],
    '& > svg': {
      width: ['14px', '18px'],
      height: ['14px', '18px']
    }
  },
  header: {
    fontWeight: 400,
    color: 'textGray',
    opacity: '0.8'
  }
}
